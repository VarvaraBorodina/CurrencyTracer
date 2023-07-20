import { useCallback, useEffect, useState } from 'react'
import React from 'react'

import { getCurrenciesValues } from '@/api'
import CurrencyCard from '@/components/CurrencyCard'
import { Currency } from '@/components/CurrencyCard/types'
import Loader from '@/components/icons/Loader'
import { CACHE_EXPIRES_TIME } from '@/constants/api'
import { useTypedDispatch, useTypedSelector } from '@/hooks'
import { quotesSelector, setQuotes } from '@/store/slices/quotesSlice'
import { setUpdateTime } from '@/store/slices/timeSlice'

import { Container, CurrencyContainer, Line, Title } from './styled'
import { CurrencySectionProps } from './types'

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

export default React.memo(CurrencySection)
