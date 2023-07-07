/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
import axios from 'axios'

import { URL_HISTORY } from '@/constants/api'

const getMonthInfo = async (
  dates: string[],
  baseCurrency: string,
  currency: string
) => {
  const monthValues = []
  for (let i = 0; i < dates.length; i++) {
    const response = await axios.get(
      `${URL_HISTORY}?base=${baseCurrency}&date=${dates[i]}`
    )
    const data = await response.data
    monthValues.push(Number(data.rates[currency]))
  }
  return monthValues
}

export { getMonthInfo }
