import axios from 'axios'
import { useEffect, useState } from 'react'

import { URL_LATEST } from '@/constants/api'
import { QUOTES } from '@/constants/currencies'

import { Option, OptionContainer, Text } from './styled'

type CurrencyModalType = {
  code: string
}

const CurrencyModal = ({ code }: CurrencyModalType) => {
  const currency = QUOTES.find((quote) => quote.code === code)
  const [selectedCurrencyCode, setSelectedCurrencyCode] = useState('')
  const [modalMessage, setModalMessage] = useState('Choose Currency...')
  const [isLoading, setIsLoading] = useState(false)

  const handleOnCurrencyClick = (selectedCode: string) => {
    setSelectedCurrencyCode(selectedCode)
  }

  useEffect(() => {
    const fetchCurrencyValue = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get(
          `${URL_LATEST}?apikey=${process.env.COIN_API_KEY}&base_currency=${code}&currencies=${selectedCurrencyCode}`
        )

        const currencyResponse = (await response.data).data[
          selectedCurrencyCode
        ]
        setModalMessage(`Exchange Rates: ${currencyResponse.value}`)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    if (selectedCurrencyCode) {
      fetchCurrencyValue()
    }
  }, [selectedCurrencyCode, code])

  if (!currency) {
    return <Text>Currency not found</Text>
  }
  return (
    <>
      <Text>{currency?.name}</Text>
      <OptionContainer>
        {QUOTES.map(
          (quote) =>
            quote.code !== code && (
              <Option
                $selected={selectedCurrencyCode === quote.code}
                key={quote.code}
                onClick={() => handleOnCurrencyClick(quote.code)}
              >
                {quote.name}
              </Option>
            )
        )}
      </OptionContainer>
      <Text>{isLoading ? 'Loading...' : modalMessage}</Text>
    </>
  )
}

export default CurrencyModal
