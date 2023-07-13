import { useCallback, useEffect, useState } from 'react'

import { getCurrenciesValues } from '@/api'
import { Currency } from '@/components/CurrencyCard/types'
import { CACHE_EXPIRES_TIME } from '@/constants/api'
import useTypedDispatch from '@/hooks/useTypedDispatch'
import useTypedSelector from '@/hooks/useTypedSelector'
import { quotesSelector, setQuotes } from '@/store/slices/quotesSlice'
import { setUpdateTime } from '@/store/slices/timeSlice'

import CurrencyCard from '../CurrencyCard'
import Loader from '../Loader'
import { Container, CurrencyContainer, Line, Title } from './styled'

type CurrencySectionProps = {
  title: string
  handleOnCurrencyCardClick: (
    currencyCode: string,
    currencyName: string
  ) => void
}

const CurrencySection = ({
  title,
  handleOnCurrencyCardClick,
}: CurrencySectionProps) => {
  const [isError, setIsError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const lastUpdateTime: number = useTypedSelector((state) => {
    return state.time
  })

  const quotesFromStorage: Currency[] = useTypedSelector(quotesSelector)
  const dispatch = useTypedDispatch()

  const fetchQuotes = useCallback(async () => {
    try {
      const currenciesValues = await getCurrenciesValues()
      dispatch(setQuotes(JSON.stringify(currenciesValues)))
      setIsLoading(false)
    } catch (error) {
      setIsError(true)
    }
  }, [])

  useEffect(() => {
    const currentTime: number = new Date().getTime()
    if (
      currentTime - lastUpdateTime > CACHE_EXPIRES_TIME ||
      !quotesFromStorage.length
    ) {
      fetchQuotes()
      dispatch(setUpdateTime(currentTime))
    } else {
      setIsLoading(false)
    }
  }, [fetchQuotes])

  if (isError) {
    return <Title>Something went wrong...</Title>
  }

  return (
    <Container>
      <Title>{title}</Title>
      <Line />
      {isLoading ? (
        <Loader />
      ) : (
        <CurrencyContainer>
          {quotesFromStorage &&
            quotesFromStorage.map((quote) => (
              <CurrencyCard
                currency={quote}
                key={quote.name}
                handleOnClick={handleOnCurrencyCardClick}
              />
            ))}
        </CurrencyContainer>
      )}
    </Container>
  )
}

export default CurrencySection
