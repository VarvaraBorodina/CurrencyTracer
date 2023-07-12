import React from 'react'

import { getBanksWithCurrency } from '@/api'
import ElasticSearch from '@/components/ElasticSearch'
import Map, { Coordinate } from '@/components/Map'
import LOCATION from '@/constants/location'
import { getCurreenciesNames, getCurreencyByName } from '@/utils/currencyParser'

type BankCardType = {
  banksWithCurency: Coordinate[]
}

class BankCard extends React.Component<never, BankCardType> {
  constructor(props: never) {
    super(props)
    this.state = {
      banksWithCurency: [],
    }
  }

  handleChangeValue = async (newValue: string) => {
    const currency = getCurreencyByName(newValue)
    if (currency) {
      const banks = await getBanksWithCurrency(currency.code)
      this.setState({ banksWithCurency: banks })
    }
  }

  render() {
    const currenciesNames = getCurreenciesNames()
    const { handleChangeValue } = this
    const { banksWithCurency } = this.state
    console.log(LOCATION, banksWithCurency)
    return (
      <>
        <ElasticSearch
          options={currenciesNames}
          title="Search currency in the bank"
          changeValue={handleChangeValue}
        />
        <Map banksCoordinates={banksWithCurency} />
      </>
    )
  }
}

export default BankCard
