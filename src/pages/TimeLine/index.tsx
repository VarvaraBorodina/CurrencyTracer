import React from 'react'

import CurrencyCard from '@/components/CurrencyCard'
import Dropdown from '@/components/Dropdown'
import { getCurreenciesNames, getCurreencyByName } from '@/utils/currencyParser'

import { ChosenOptions, Container, Dropdowns } from './styled'

type TimeLineState = {
  baseCurrencyName: string
  currencyName: string
  accuracy: string
}

const accuracyOptions = ['Month (by days)', 'Day (by hour)', 'Hour (by minute)']

class TimeLine extends React.Component<null, TimeLineState> {
  currenciesNames = getCurreenciesNames()

  constructor(props: null) {
    super(props)
    this.state = {
      baseCurrencyName: 'Base Currency',
      currencyName: 'Currency',
      accuracy: 'Accuracy',
    }
  }

  setTitle = (newTitle: string, id: number) => {
    switch (id) {
      case 1:
        this.setState({ baseCurrencyName: newTitle })
        break
      case 2:
        this.setState({ currencyName: newTitle })
        break
      case 3:
        this.setState({ accuracy: newTitle })
        break
      default:
        break
    }
  }

  render() {
    const { baseCurrencyName, currencyName, accuracy } = this.state
    const baseCurrency = getCurreencyByName(baseCurrencyName)
    const currency = getCurreencyByName(currencyName)
    return (
      <Container>
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
          <Dropdown
            title={accuracy}
            setTitle={this.setTitle}
            id={3}
            options={accuracyOptions}
          />
        </Dropdowns>
        <ChosenOptions>
          {baseCurrency && <CurrencyCard currency={baseCurrency} />}
          {currency && <CurrencyCard currency={currency} />}
        </ChosenOptions>
      </Container>
    )
  }
}

export default TimeLine
