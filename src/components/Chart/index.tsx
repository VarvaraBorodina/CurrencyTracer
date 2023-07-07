import React from 'react'

import ChartView from '@/components/ChartView'
import chartParamsObserver, {
  ChartParams,
  ObserverFunction,
} from '@/utils/ChartParamsObserver'
import { getCurreencyByName } from '@/utils/currencyParser'
import { getLastMonthDates } from '@/utils/formatDate'

import { getMonthInfo } from '../api'
import Loader from '../Loader'

type ChartType = {
  values: number[]
  time: string[]
  isLoading: boolean
}

class Chart extends React.PureComponent<Record<string, never>, ChartType> {
  constructor(props: any) {
    super(props)
    this.state = {
      values: [],
      time: [],
      isLoading: false,
    }
  }

  componentDidMount(): void {
    chartParamsObserver.subscribe(this.getChartData)
  }

  fetchCharData = async (
    currency: string | undefined,
    baseCurrency: string | undefined
  ) => {
    if (currency && baseCurrency) {
      this.setState({ isLoading: true })
      const lastMonthDates = getLastMonthDates()
      const monthData = await getMonthInfo(
        lastMonthDates,
        baseCurrency,
        currency
      )
      this.setState({ values: monthData, time: lastMonthDates })
      this.setState({ isLoading: false })
    }
  }

  getChartData: ObserverFunction = (params?: ChartParams) => {
    if (params) {
      const { baseCurrencyName, currencyName } = params
      const baseCurrency = getCurreencyByName(baseCurrencyName)?.code
      const currency = getCurreencyByName(currencyName)?.code
      this.fetchCharData(currency, baseCurrency)
    }
  }

  render() {
    const { time, values, isLoading } = this.state
    return isLoading ? <Loader /> : <ChartView values={values} time={time} />
  }
}

export default Chart
