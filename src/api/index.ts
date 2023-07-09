/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
import axios from 'axios'

import { BANKS_URL, URL_HISTORY } from '@/constants/api'
import BANKS_WITH_CURRENCIES from '@/constants/banksWithCurrencies'

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

const getBanksWithCurrency = async (currency: string) => {
  const banksId = BANKS_WITH_CURRENCIES[currency]

  const response = axios.get(BANKS_URL)
  console.log((await response).data)
}

export { getBanksWithCurrency, getMonthInfo }
