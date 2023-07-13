/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
import axios from 'axios'

import { Coordinate } from '@/components/Map'
import { BANKS_URL, URL_HISTORY, URL_LATEST } from '@/constants/api'
import BANKS_WITH_CURRENCIES from '@/constants/banksWithCurrencies'
import { BASE_CURRENCY, QUOTES } from '@/constants/currencies'
import LOCATION from '@/constants/location'

type Geocodes = {
  main: Coordinate
}
type BankInfo = {
  geocodes: Geocodes
  fsq_id: string
}

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
    `${URL_LATEST}?apikey=${
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
    `${URL_LATEST}?apikey=${process.env.COIN_API_KEY}&base_currency=${selectedCurrencyCode}&currencies=${code}`
  )

  const currencyResponse = (await response.data).data[code]
  return currencyResponse.value.toFixed(5)
}

const getBanksWithCurrency = async (currency: string) => {
  const response = await axios(BANKS_URL, {
    headers: {
      Authorization: process.env.LOCATION_API_KEY,
    },
    params: {
      query: 'bank',
      ll: `${LOCATION.latitude},${LOCATION.longitude}`,
      sort: 'DISTANCE',
      radius: 2000,
    },
  })
  const allBanks = (await response).data.results
  const banksWithCurrency: Coordinate[] = []
  const banksWithCurrencyIds =
    BANKS_WITH_CURRENCIES[currency as keyof typeof BANKS_WITH_CURRENCIES]

  allBanks.forEach(({ fsq_id, geocodes }: BankInfo) => {
    const { longitude, latitude } = geocodes.main
    if (banksWithCurrencyIds.includes(fsq_id)) {
      banksWithCurrency.push({ longitude, latitude })
    }
  })
  return banksWithCurrency
}

export {
  getBanksWithCurrency,
  getCurrenciesValues,
  getCurrencyValue,
  getMonthInfo,
}
