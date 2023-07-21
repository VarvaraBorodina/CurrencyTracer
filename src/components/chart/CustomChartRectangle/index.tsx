import React from 'react'
import { Rectangle } from 'recharts'

import { COLORS } from '@/constants/themes'

import { CustomChartType, Point } from './types'

const CustomChartRectangle = ({ formattedGraphicalItems }: CustomChartType) => {
  const [firstSeries, secondSeries] = formattedGraphicalItems

  return firstSeries?.props?.points.map(
    (firstSeriesPoint: Point, index: number) => {
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
