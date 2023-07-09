import { useEffect, useState } from 'react'

import { getCurrencyValue } from '@/api'
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
  const [isError, setIsError] = useState<boolean>(false)

  const handleOnCurrencyClick = (selectedCode: string) => {
    setSelectedCurrencyCode(selectedCode)
  }

  useEffect(() => {
    const fetchCurrencyValue = async () => {
      try {
        setIsLoading(true)
        const value = await getCurrencyValue(code, selectedCurrencyCode)
        setModalMessage(
          `1 ${
            QUOTES.find((quote) => quote.code === selectedCurrencyCode)?.name
          } = ${value} ${currency?.name}`
        )
        setIsLoading(false)
      } catch (error) {
        setIsError(true)
      }
    }
    if (selectedCurrencyCode) {
      fetchCurrencyValue()
    }
  }, [selectedCurrencyCode, code])

  if (!currency) {
    return <Text>Currency not found</Text>
  }
  if (isError) {
    return <Text>Something went wrong...</Text>
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
