import React from 'react'

import CurrencyCard from '@/components/CurrencyCard'
import Dropdown from '@/components/ui/Dropdown'
import TEXT from '@/constants/text'
import chartParamsObserver, { ChartParams } from '@/utils/chartParamsObserver'
import {
  getCurreenciesWithChartNames,
  getCurreencyByName,
} from '@/utils/currencyParser'

import { ChosenOptions, Dropdowns } from './styled'

class ChartParamsForm extends React.Component<object, ChartParams> {
  currenciesNames = getCurreenciesWithChartNames()

  constructor(props: object) {
    super(props)
    this.state = {
      baseCurrencyName: TEXT.FIRST_DROPDOWN,
      currencyName: TEXT.SECOND_DROPDOWN,
    }
  }

  componentDidUpdate(prevProps: object, prevState: ChartParams): void {
    const { baseCurrencyName, currencyName } = this.state
    if (
      prevState.baseCurrencyName !== baseCurrencyName ||
      prevState.currencyName !== currencyName
    )
      chartParamsObserver.chartParamsChanged(this.state)
  }

  setTitle = (newTitle: string, id: number) => {
    switch (id) {
      case 1:
        this.setState({ baseCurrencyName: newTitle })
        break
      case 2:
        this.setState({ currencyName: newTitle })
        break
      default:
        break
    }
  }

  render() {
    const { baseCurrencyName, currencyName } = this.state
    const baseCurrency = getCurreencyByName(baseCurrencyName)
    const currency = getCurreencyByName(currencyName)
    return (
      <>
        <Dropdowns>
          <Dropdown
            title={baseCurrencyName}
            setTitle={this.setTitle}
            id={1}
            options={this.currenciesNames}
          />
          <Dropdown
            title={currencyName}
            setTitle={this.setTitle}
            id={2}
            options={this.currenciesNames}
          />
        </Dropdowns>
        <ChosenOptions>
          {baseCurrency && <CurrencyCard currency={baseCurrency} />}
          {currency && <CurrencyCard currency={currency} />}
        </ChosenOptions>
      </>
    )
  }
}

export default ChartParamsForm
