import axios from 'axios'
import { useEffect, useState } from 'react'

import { Currency } from '@/components/CurrencyCard/types'
import { CACHE_EXPIRES_TIME, URL_LATEST } from '@/constants/api'
import { BASE_CURRENCY, QUOTES } from '@/constants/currencies'
import useTypedDispatch from '@/hooks/useTypedDispatch'
import useTypedSelector from '@/hooks/useTypedSelector'
import { setQuotes } from '@/store/slices/quotesSlice'
import { setUpdateTime } from '@/store/slices/timeSlice'
import parseCurrency from '@/utils/currencyParser'

import CurrencyCard from '../CurrencyCard'
import Loader from '../Loader/Loader'
import { Container, CurrencyContainer, Line, Title } from './styled'

type CurrencySectionProps = {
  title: string
}

const CurrencySection = ({ title }: CurrencySectionProps) => {
  const [isError, setIsError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const lastUpdateTime: number = useTypedSelector((state) => {
    return state.time
  })

  const quotesFromStorage: Currency[] = useTypedSelector((state) =>
    parseCurrency(state.quotes)
  )

  const dispatch = useTypedDispatch()

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await axios.get(
          `${URL_LATEST}?api-key=${
            process.env.COIN_API_KEY
          }&base=${BASE_CURRENCY}&currencies=${QUOTES.map(
            (quote) => quote.code
          ).join(',')}`
        )
        const currenciesValues = (await response.data).data
        dispatch(setQuotes(currenciesValues))
        setIsLoading(false)
      } catch (error) {
        setIsError(true)
      }
    }

    const currentTime: number = new Date().getTime()
    if (
      currentTime - lastUpdateTime > CACHE_EXPIRES_TIME ||
      !quotesFromStorage.length
    ) {
      fetchQuotes()
      dispatch(setUpdateTime())
    } else {
      setIsLoading(false)
    }
  }, [])

  if (isError) {
    return <h1>Something went wrong...</h1>
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
            quotesFromStorage.map(({ name, value, svg }) => (
              <CurrencyCard name={name} value={value} svg={svg} key={name} />
            ))}
        </CurrencyContainer>
      )}
    </Container>
  )
}

export default CurrencySection
