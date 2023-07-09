/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
import axios from 'axios'

import { URL_HISTORY, URL_LATEST } from '@/constants/api'
import { BASE_CURRENCY, QUOTES } from '@/constants/currencies'

const getMonthInfo = async (
  dates: string[],
  baseCurrency: string,
  currency: string
) => {
  const monthValues = []
  for (let i = 0; i < dates.length; i++) {
    const response = await axios.get(
      `${URL_HISTORY}?base=${currency}&date=${dates[i]}`
    )
    const data = await response.data
    monthValues.push(Number(data.rates[baseCurrency]))
  }
  return monthValues
}

const getCurrenciesValues = async () => {
  const response = await axios.get(
    `${URL_LATEST}?api-key=${
      process.env.COIN_API_KEY
    }&base=${BASE_CURRENCY}&currencies=${QUOTES.map((quote) => quote.code).join(
      ','
    )}`
  )
  const currenciesValues = (await response.data).data
  return currenciesValues
}

const getCurrencyValue = async (code: string, selectedCurrencyCode: string) => {
  const response = await axios.get(
    `${URL_LATEST}?apikey=${process.env.COIN_API_KEY}&base_currency=${code}&currencies=${selectedCurrencyCode}`
  )

  const currencyResponse = (await response.data).data[selectedCurrencyCode]
  return currencyResponse.value.toFixed(5)
}

export { getCurrenciesValues, getCurrencyValue, getMonthInfo }
