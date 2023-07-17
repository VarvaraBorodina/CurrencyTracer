import { useCallback, useState } from 'react'

import CurrencyModal from '@/components/CurrencyModal'
import CurrencySection from '@/components/CurrencySection'
import Modal from '@/components/ui/Modal'
import { BASE_CURRENCY, QUOTES } from '@/constants/currencies'
import TEXT from '@/constants/text'
import { CONFIG } from '@/constants/api'

const Home = () => {
  console.log(CONFIG)
  const [isModalActive, setIsModalActive] = useState(false)
  const [activeCurrencyCode, setActiveCurrencyCode] = useState('')

  const handleOnCurrencyCardClick = useCallback((currencyCode: string) => {
    setIsModalActive(true)
    setActiveCurrencyCode(currencyCode)
  }, [])

  return (
    <>
      <CurrencySection
        title={`${TEXT.PRICE_INFO}${
          QUOTES.find((quote) => quote.code === BASE_CURRENCY)?.name
        }`}
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
