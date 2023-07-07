import { useState } from 'react'

import CurrencyModal from '@/components/CurrencyModal'
import CurrencySection from '@/components/CurrencySection'
import Modal from '@/components/Modal/indes'
import UpdateTime from '@/components/UpdateTime'
import useTypedSelector from '@/hooks/useTypedSelector'
import { timestampToHoursMinutes } from '@/utils/formatDate'

const Home = () => {
  const lastUpdateTime: number = useTypedSelector((state) => {
    return state.time
  })

  const [isModalActive, setIsModalActive] = useState(false)
  const [activeCurrencyCode, setActiveCurrencyCode] = useState('')

  const handleOnCurrencyCardClick = (currencyCode: string) => {
    setIsModalActive(true)
    setActiveCurrencyCode(currencyCode)
  }

  return (
    <div>
      <UpdateTime time={timestampToHoursMinutes(lastUpdateTime)} />
      <CurrencySection
        title="Quotes"
        handleOnCurrencyCardClick={handleOnCurrencyCardClick}
      />
      {isModalActive && (
        <Modal setIsActive={setIsModalActive}>
          <CurrencyModal code={activeCurrencyCode} />
        </Modal>
      )}
    </div>
  )
}

export default Home
