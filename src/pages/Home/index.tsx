import React from 'react'

import CurrencySection from '@/components/CurrencySection'
import UpdateTime from '@/components/UpdateTime'
import { QUOTES, STONKS } from '@/constants/currencies'

const Home = () => {
  const quotes = QUOTES.map((x) => ({ ...x, value: 0.35237 }))
  const stonks = STONKS.map((x) => ({ ...x, value: 0.35237 }))
  return (
    <div>
      <UpdateTime time="11:59pm" />
      <CurrencySection currencies={stonks} title="Stoks" />
      <CurrencySection currencies={quotes} title="Quotes" />
    </div>
  )
}

export default Home
