import CurrencySection from '@/components/CurrencySection'
import UpdateTime from '@/components/UpdateTime'
import useTypedSelector from '@/hooks/useTypedSelector'
import { timestampToHoursMinutes } from '@/utils/formatDate'

const Home = () => {
  const lastUpdateTime: number = useTypedSelector((state) => {
    return state.time
  })
  return (
    <div>
      <UpdateTime time={timestampToHoursMinutes(lastUpdateTime)} />
      <CurrencySection title="Quotes" />
    </div>
  )
}

export default Home
