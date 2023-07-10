import { ChartViewType } from '@/components/ChartView'

export type CustomInputObserverFunction = (
  params: ChartViewType | undefined
) => void

class ChartCustomInputObserver {
  observers: CustomInputObserverFunction[]

  constructor() {
    this.observers = []
  }

  public subscribe(func: CustomInputObserverFunction) {
    this.observers.push(func)
  }

  public unsubcribe(func: CustomInputObserverFunction) {
    this.observers = this.observers.filter(
      (observer: CustomInputObserverFunction) => observer !== func
    )
  }

  public notify(params: ChartViewType) {
    console.log('public notify(params: ChartViewType) {')
    this.observers.forEach((observer: CustomInputObserverFunction) => {
      observer(params)
    })
  }
}

export default new ChartCustomInputObserver()
