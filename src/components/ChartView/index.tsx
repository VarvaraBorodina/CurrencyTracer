import { Chart as ChartJS, registerables } from 'chart.js'
import React, { createRef, RefObject } from 'react'

import { COLORS } from '@/constants/themes'

import Chart from './styled'

type ChartViewType = {
  values: number[]
  time: string[]
}
class ChartView extends React.PureComponent<ChartViewType> {
  currencyChar: ChartJS | null

  chartRef: RefObject<HTMLCanvasElement>

  constructor(props: ChartViewType) {
    super(props)
    this.currencyChar = null
    this.chartRef = createRef()
  }

  componentDidMount(): void {
    const { time, values } = this.props
    if (this.currencyChar) {
      this.currencyChar.destroy()
    }
    if (time.length && values.length) {
      ChartJS.register(...registerables)
      this.currencyChar = new ChartJS('myChart', {
        type: 'line',
        data: {
          labels: time,
          datasets: [
            {
              data: values,
              borderColor: COLORS.LOGO_BOTTOM,
              fill: false,
              label: 'Time Line',
            },
          ],
        },
      })
    }
  }

  componentWillUnmount(): void {
    if (this.currencyChar) {
      this.currencyChar.destroy()
    }
  }

  render() {
    return (
      <Chart>
        <canvas id="myChart" ref={this.chartRef} />
      </Chart>
    )
  }
}

export default ChartView
