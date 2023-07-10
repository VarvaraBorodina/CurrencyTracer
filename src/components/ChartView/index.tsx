import React from 'react'
import {
  CartesianGrid,
  Customized,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'

import CustomChartRectangle from '../CustomChartRectangle'
import Chart from './styled'

type ChartViewType = {
  values: number[]
  time: string[]
}

type Column = {
  name: string
  previousValue: number
  currentValue: number
}

type ChartViewState = {
  chartData: Column[]
  minDataValue: number
  maxDataValue: number
}

class ChartView extends React.Component<ChartViewType, ChartViewState> {
  constructor(props: ChartViewType) {
    super(props)
    this.state = {
      chartData: [],
      minDataValue: Number.MAX_SAFE_INTEGER,
      maxDataValue: 0,
    }
  }

  componentDidMount(): void {
    const { values, time } = this.props
    const { minDataValue, maxDataValue } = this.state
    const newChartData = []
    for (let i = 1; i < values.length; i += 1) {
      if (values[i - 1] > maxDataValue) {
        this.setState({ maxDataValue: values[i - 1] })
      }
      if (values[i - 1] < minDataValue) {
        this.setState({ minDataValue: values[i - 1] })
      }

      if (values[i - 1] === values[i]) {
        values[i - 1] += values[i - 1] * 0.0001
      }
      newChartData.push({
        name: time[i],
        previousValue: values[i - 1],
        currentValue: values[i],
      })
    }
    this.setState({ chartData: newChartData })
  }

  componentDidUpdate(): void {}

  componentWillUnmount(): void {}

  render() {
    const { chartData, minDataValue, maxDataValue } = this.state
    if (maxDataValue > 0) {
      return (
        <Chart>
          <ResponsiveContainer width="100%" height="60%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="1 1" />
              <XAxis dataKey="name" hide />
              <YAxis
                domain={[minDataValue, maxDataValue]}
                tickFormatter={(value) => value.toFixed(3)}
              />
              <Line type="monotone" dataKey="previousValue" opacity={0} />
              <Line type="monotone" dataKey="currentValue" hide />
              <Customized component={CustomChartRectangle} />
            </LineChart>
          </ResponsiveContainer>
        </Chart>
      )
    }
    return null
  }
}

export default ChartView
