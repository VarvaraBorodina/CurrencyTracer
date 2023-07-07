import { getCurreencyByName } from './currencyParser'

export type ObserverFunction = (params: ChartParams | undefined) => void
export type ChartParams = {
  baseCurrencyName: string
  currencyName: string
}

class ChartParamsFormObserver {
  observers: ObserverFunction[]

  constructor() {
    this.observers = []
  }

  public subscribe(func: ObserverFunction) {
    this.observers.push(func)
  }

  public unsubcribe(func: ObserverFunction) {
    this.observers = this.observers.filter(
      (observer: ObserverFunction) => observer !== func
    )
  }

  public chartParamsChanged(params: ChartParams): void {
    if (this.isChartParamsFormCorrent(params)) {
      this.notify(params)
    }
  }

  public notify(params: ChartParams) {
    this.observers.forEach((observer: ObserverFunction) => {
      observer(params)
    })
  }

  // eslint-disable-next-line class-methods-use-this
  public isChartParamsFormCorrent(params: ChartParams): boolean {
    const { baseCurrencyName, currencyName } = params
    if (!getCurreencyByName(baseCurrencyName)) {
      return false
    }
    if (!getCurreencyByName(currencyName)) {
      return false
    }
    if (baseCurrencyName === currencyName) {
      return false
    }
    return true
  }
}

export default new ChartParamsFormObserver()
