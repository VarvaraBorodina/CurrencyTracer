import React from 'react'
import { Rectangle } from 'recharts'

import { COLORS } from '@/constants/themes'

const CustomChartRectangle = (props: any) => {
  const { formattedGraphicalItems } = props

  const firstSeries = formattedGraphicalItems[0]
  const secondSeries = formattedGraphicalItems[1]

  return firstSeries?.props?.points.map(
    (firstSeriesPoint: any, index: number) => {
      const secondSeriesPoint = secondSeries?.props?.points[index]
      const yDifference = firstSeriesPoint.y - secondSeriesPoint.y

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
    }
  )
}

export default CustomChartRectangle
