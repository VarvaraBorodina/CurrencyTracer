import React from 'react'

import ElasticSearch from '@/components/ElasticSearch'
import { getCurreenciesNames } from '@/utils/currencyParser'

class BankCard extends React.Component {
  constructor(props: never) {
    super(props)
    this.state = { currencyName: '' }
  }

  handleChangeValue = (newValue: string) => {
    this.setState({
      currencyName: newValue,
    })
  }

  render() {
    const currenciesNames = getCurreenciesNames()
    const { handleChangeValue } = this
    return (
      <ElasticSearch
        options={currenciesNames}
        title="Enter currency"
        changeValue={handleChangeValue}
      />
    )
  }
}

export default BankCard
