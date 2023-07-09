import React from 'react'

import ElasticSearch from '@/components/ElasticSearch'
import Map from '@/components/Map'
import { getCurreenciesNames, getCurreencyByName } from '@/utils/currencyParser'
import { getBanksWithCurrency } from '@/api'

class BankCard extends React.Component {
  constructor(props: never) {
    super(props)
    this.state = { currencyName: '', banksWithCurency: [] }
  }

  handleChangeValue = (newValue: string) => {
    this.setState({
      currencyName: newValue,
    })

    const currency = getCurreencyByName(newValue)
    if (currency) {
      getBanksWithCurrency(currency.code)
    }
  }

  render() {
    const currenciesNames = getCurreenciesNames()
    const { handleChangeValue } = this
    const { banksWithCurency } = this.state
    return (
      <>
        <ElasticSearch
          options={currenciesNames}
          title="Enter currency"
          changeValue={handleChangeValue}
        />
        <Map banksCoordinates={banksWithCurency} />
      </>
    )
  }
}

export default BankCard
