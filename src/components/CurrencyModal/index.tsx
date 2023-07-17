import { useEffect, useMemo, useState } from 'react'

import { getCurrencyValue } from '@/api'
import { QUOTES } from '@/constants/currencies'
import TEXT from '@/constants/text'

import { Option, OptionContainer, Text } from './styled'

type CurrencyModalType = {
  code: string
}

const CurrencyModal = ({ code: baseCurrencyCode }: CurrencyModalType) => {
  const currency = useMemo(
    () => QUOTES.find(({ code }) => code === baseCurrencyCode),
    [baseCurrencyCode]
  )
  const [selectedCurrencyCode, setSelectedCurrencyCode] = useState('')
  const [modalMessage, setModalMessage] = useState(TEXT.MODAL_TEXT)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState<boolean>(false)

  const handleOnCurrencyClick = (selectedCode: string) => {
    setSelectedCurrencyCode(selectedCode)
  }

  useEffect(() => {
    const fetchCurrencyValue = async () => {
      try {
        setIsLoading(true)
        const value = await getCurrencyValue(
          baseCurrencyCode,
          selectedCurrencyCode
        )
        setModalMessage(
          `1 ${
            QUOTES.find(({ code }) => code === selectedCurrencyCode)?.name
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
  }, [selectedCurrencyCode, baseCurrencyCode])

  if (!currency) {
    return <Text>{TEXT.NOT_FOUND}</Text>
  }
  if (isError) {
    return <Text>{TEXT.ERROR}</Text>
  }
  return (
    <>
      <Text>{currency?.name}</Text>
      <OptionContainer>
        {QUOTES.map(
          ({ code, name }) =>
            code !== baseCurrencyCode && (
              <Option
                $selected={selectedCurrencyCode === code}
                key={code}
                onClick={() => handleOnCurrencyClick(code)}
                data-cy={`modal-option-${code}`}
              >
                {name}
              </Option>
            )
        )}
      </OptionContainer>
      <Text data-cy="modal-message">
        {isLoading ? TEXT.MODAL_LOADER : modalMessage}
      </Text>
    </>
  )
}

export default CurrencyModal
