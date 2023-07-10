import React from 'react'

import { getBanksWithCurrency } from '@/api'
import ElasticSearch from '@/components/ElasticSearch'
import Map, { Coordinate } from '@/components/Map'
import { getCurreenciesNames, getCurreencyByName } from '@/utils/currencyParser'

type BankCardType = {
  banksWithCurency: Coordinate[]
  userLocation: Coordinate
}

class BankCard extends React.Component<never, BankCardType> {
  constructor(props: never) {
    super(props)
    this.state = {
      banksWithCurency: [],
      userLocation: {
        latitude: 0,
        longitude: 0,
      },
    }
  }

  componentDidMount(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      const { longitude, latitude } = position.coords
      this.setState({ userLocation: { longitude, latitude } })
    })
  }

  handleChangeValue = async (newValue: string) => {
    const currency = getCurreencyByName(newValue)
    const { userLocation } = this.state
    if (currency) {
      const banks = await getBanksWithCurrency(currency.code, userLocation)
      this.setState({ banksWithCurency: banks })
    }
  }

  render() {
    const currenciesNames = getCurreenciesNames()
    const { handleChangeValue } = this
    const { banksWithCurency, userLocation } = this.state
    return (
      <>
        <ElasticSearch
          options={currenciesNames}
          title="Search currency in the bank"
          changeValue={handleChangeValue}
        />
        <Map
          banksCoordinates={banksWithCurency}
          userCoordinate={userLocation}
        />
      </>
    )
  }
}

export default BankCard
