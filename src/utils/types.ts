import { ChartViewType } from '@/components/chart/ChartView/types'

export type CustomInputObserverFunction = (
  params: ChartViewType | undefined
) => void

export type ObserverFunction = (params: ChartParams | undefined) => void
export type ModalObserverFunction = (message: string) => void
export type ChartParams = {
  baseCurrencyName: string
  currencyName: string
}
