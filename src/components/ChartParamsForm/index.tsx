import React from 'react'

import CurrencyCard from '@/components/CurrencyCard'
import Dropdown from '@/components/Dropdown'
import chartParamsObserver, { ChartParams } from '@/utils/ChartParamsObserver'
import {
  getCurreenciesWithChartNames,
  getCurreencyByName,
} from '@/utils/currencyParser'

import { ChosenOptions, Dropdowns } from './styled'

class ChartParamsForm extends React.Component<
  Record<string, never>,
  ChartParams
> {
  currenciesNames = getCurreenciesWithChartNames()

  constructor(props: any) {
    super(props)
    this.state = {
      baseCurrencyName: 'Base Currency',
      currencyName: 'Currency',
    }
  }

  componentDidUpdate(): void {
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
