import { ChartViewType } from '@/components/chart/ChartView/types'
import TEXT from '@/constants/text'

import { CustomInputObserverFunction, ModalObserverFunction } from './types'

class ChartCustomInputObserver {
  observers: CustomInputObserverFunction[]

  modalObservers: ModalObserverFunction[]

  constructor() {
    this.observers = []
    this.modalObservers = []
  }

  public subscribe(func: CustomInputObserverFunction) {
    this.observers.push(func)
  }

  public subscribeModal(func: ModalObserverFunction) {
    this.modalObservers.push(func)
  }

  public unsubcribe(func: CustomInputObserverFunction) {
    this.observers = this.observers.filter(
      (observer: CustomInputObserverFunction) => observer !== func
    )
  }

  public notify(params: ChartViewType) {
    this.observers.forEach((observer: CustomInputObserverFunction) => {
      observer(params)
    })
    this.modalObservers.forEach((modalObserver: ModalObserverFunction) => {
      modalObserver(TEXT.MODAL_MESSAGE_OK)
    })
  }
}

export default new ChartCustomInputObserver()
