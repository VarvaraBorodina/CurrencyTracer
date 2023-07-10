import { useState } from 'react'

import CurrencyModal from '@/components/CurrencyModal'
import CurrencySection from '@/components/CurrencySection'
import Modal from '@/components/Modal/indes'
import { BASE_CURRENCY, QUOTES } from '@/constants/currencies'

const Home = () => {
  const [isModalActive, setIsModalActive] = useState(false)
  const [activeCurrencyCode, setActiveCurrencyCode] = useState('')

  const handleOnCurrencyCardClick = (currencyCode: string) => {
    setIsModalActive(true)
    setActiveCurrencyCode(currencyCode)
  }

  return (
    <>
      <CurrencySection
        title={`Quotes (against ${
          QUOTES.find((quote) => quote.code === BASE_CURRENCY)?.name
        })`}
        handleOnCurrencyCardClick={handleOnCurrencyCardClick}
      />
      {isModalActive && (
        <Modal setIsActive={setIsModalActive}>
          <CurrencyModal code={activeCurrencyCode} />
        </Modal>
      )}
    </>
  )
}

export default Home
