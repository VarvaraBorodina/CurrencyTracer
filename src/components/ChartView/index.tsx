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

export type ChartViewType = {
  values: number[]
  time: string[]
}

class ChartView extends React.PureComponent<ChartViewType> {
  render() {
    const { values, time } = this.props
    let minDataValue = Number.MAX_SAFE_INTEGER
    let maxDataValue = 0
    const chartData = []

    for (let i = 1; i < values.length; i += 1) {
      if (values[i - 1] > maxDataValue) {
        maxDataValue = values[i - 1]
      }
      if (values[i - 1] < minDataValue) {
        minDataValue = values[i - 1]
      }

      if (values[i - 1] === values[i]) {
        values[i - 1] += values[i - 1] * 0.0001
      }
      chartData.push({
        name: time[i],
        previousValue: values[i - 1],
        currentValue: values[i],
      })
    }

    if (maxDataValue > 0) {
      return (
        <Chart data-cy="chart">
          <ResponsiveContainer width="99%" height={500}>
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
