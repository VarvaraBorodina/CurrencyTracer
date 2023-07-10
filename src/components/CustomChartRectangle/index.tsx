import React from 'react'
import { Rectangle } from 'recharts'

import { COLORS } from '@/constants/themes'

class CustomChartRectangle extends React.Component {
  render() {
    const { formattedGraphicalItems } = this.props

    const firstSeries = formattedGraphicalItems[0]
    const secondSeries = formattedGraphicalItems[1]

    return firstSeries?.props?.points.map((firstSeriesPoint, index: number) => {
      const secondSeriesPoint = secondSeries?.props?.points[index]
      const yDifference = firstSeriesPoint.y - secondSeriesPoint.y

      console.log(yDifference)
      return (
        <Rectangle
          key={firstSeriesPoint.payload.name}
          width={10}
          height={yDifference}
          x={secondSeriesPoint.x - 5}
          y={secondSeriesPoint.y}
          fill={yDifference > 0 ? COLORS.CHART_DOWN : COLORS.CHART_UP}
        />
      )
    })
  }
}

export default CustomChartRectangle
