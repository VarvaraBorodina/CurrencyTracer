import React from 'react'

import { getMonthInfo } from '@/api'
import ChartView from '@/components/chart/ChartView'
import Loader from '@/components/icons/Loader'
import TEXT from '@/constants/text'
import chartParamsObserver, {
  ChartParams,
  ObserverFunction,
} from '@/utils/chartParamsObserver'
import { getCurreencyByName } from '@/utils/currencyParser'
import { getLastMonthDates } from '@/utils/formatDate'

import Text from './styled'
import { ChartType } from './types'

class ChartWithAPI extends React.PureComponent<object, ChartType> {
  constructor(props: object) {
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
        chartParamsObserver.notifyModal(TEXT.MODAL_MESSAGE_OK)
      }
    } catch (error) {
      this.setState({ isError: true })
      chartParamsObserver.notifyModal(TEXT.MODAL_MESSAGE_ERROR)
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
