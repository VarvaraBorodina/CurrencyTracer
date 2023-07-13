import React from 'react'

import { getMonthInfo } from '@/api'
import ChartView from '@/components/ChartView'
import chartParamsObserver, {
  ChartParams,
  ObserverFunction,
} from '@/utils/ChartParamsObserver'
import { getCurreencyByName } from '@/utils/currencyParser'
import { getLastMonthDates } from '@/utils/formatDate'

import Loader from '../Loader'
import Text from './styled'

type ChartType = {
  values: number[]
  time: string[]
  isLoading: boolean
  isError: boolean
}

class ChartWithAPI extends React.PureComponent<
  Record<string, never>,
  ChartType
> {
  constructor(props: any) {
    super(props)
    this.state = {
      values: [],
      time: [],
      isLoading: false,
      isError: false,
    }
  }

  componentDidMount(): void {
    chartParamsObserver.subscribe(this.getChartData)
  }

  fetchCharData = async (
    currency: string | undefined,
    baseCurrency: string | undefined
  ) => {
    try {
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
    } catch (error) {
      this.setState({ isError: true })
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
    const { time, values, isLoading, isError } = this.state
    if (isError) {
      return <Text>Something went wrong...</Text>
    }
    return isLoading ? <Loader /> : <ChartView values={values} time={time} />
  }
}

export default ChartWithAPI
