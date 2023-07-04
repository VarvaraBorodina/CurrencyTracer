import { Route, Routes } from 'react-router-dom'

import ROUTES_NAMES from '@/constants/routesNames'
import BankCard from '@/pages/BankCard'
import Contacts from '@/pages/Contacts'
import Home from '@/pages/Home'
import TimeLine from '@/pages/TimeLine'

const { CONTACTS, TIMELINE, BANKCARD, HOME } = ROUTES_NAMES

export const routes = [
  {
    path: HOME,
    component: <Home />,
  },
  {
    path: BANKCARD,
    component: <BankCard />,
  },
  {
    path: TIMELINE,
    component: <TimeLine />,
  },
  {
    path: CONTACTS,
    component: <Contacts />,
  },
]

const Router = () => (
  <Routes>
    {routes.map(({ path, component }) => (
      <Route key={path} path={path} element={component} />
    ))}
  </Routes>
)
export default Router
