import { getCurreencyByName } from './currencyParser'

export type ObserverFunction = (params: ChartParams | undefined) => void
export type ModalObserverFunction = (message: string) => void
export type ChartParams = {
  baseCurrencyName: string
  currencyName: string
}

class ChartParamsFormObserver {
  observers: ObserverFunction[]

  modalObservers: ModalObserverFunction[]

  constructor() {
    this.observers = []
    this.modalObservers = []
  }

  public subscribe(func: ObserverFunction) {
    this.observers.push(func)
  }

  public subscribeModal(func: ModalObserverFunction) {
    this.modalObservers.push(func)
  }

  public unsubcribeModal(func: ModalObserverFunction) {
    this.modalObservers = this.modalObservers.filter(
      (observer: ModalObserverFunction) => observer !== func
    )
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

  public notifyModal(message: string) {
    this.modalObservers.forEach((observer: ModalObserverFunction) => {
      observer(message)
    })
  }

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
