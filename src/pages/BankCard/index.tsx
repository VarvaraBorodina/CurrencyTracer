import React from 'react'

import { getBanksWithCurrency } from '@/api'
import Map, { Coordinate } from '@/components/Map'
import ElasticSearch from '@/components/ui/ElasticSearch'
import TEXT from '@/constants/text'
import { getCurreenciesNames, getCurreencyByName } from '@/utils/currencyParser'

type BankCardType = {
  banksWithCurency: Coordinate[]
}

class BankCard extends React.Component<object, BankCardType> {
  constructor(props: object) {
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
    return (
      <>
        <ElasticSearch
          options={currenciesNames}
          title={TEXT.SEARCH_PLACEHOLDER}
          changeValue={handleChangeValue}
        />
        <Map banksCoordinates={banksWithCurency} />
      </>
    )
  }
}

export default BankCard
