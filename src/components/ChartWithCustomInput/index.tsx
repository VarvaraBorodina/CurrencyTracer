import React from 'react'

import ChartView, { ChartViewType } from '@/components/ChartView'
import ChartCustomInputObserver, {
  CustomInputObserverFunction,
} from '@/utils/ChartCustomInputObserver'

type ChartType = {
  values: number[]
  time: string[]
}

class Chart extends React.PureComponent<Record<string, never>, ChartType> {
  constructor(props: any) {
    super(props)
    this.state = {
      values: [],
      time: [],
    }
  }

  componentDidMount(): void {
    ChartCustomInputObserver.subscribe(this.getChartData)
  }

  getChartData: CustomInputObserverFunction = (params?: ChartViewType) => {
    if (params?.values && params.time) {
      this.setState({
        values: params?.values,
        time: params?.time,
      })
    }
  }

  render() {
    const { time, values } = this.state
    return <ChartView values={values} time={time} />
  }
}

export default Chart
