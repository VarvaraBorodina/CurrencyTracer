import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import ROUTES_NAMES from '@/constants/routesNames'
import TEXT from '@/constants/text'
import Loader from '../icons/Loader'

const { CONTACTS, TIMELINE, BANKCARD, HOME } = ROUTES_NAMES

const BankCard = React.lazy(() => import('@/pages/BankCard'))
const Contacts = React.lazy(() => import('@/pages/Contacts'))
const Home = React.lazy(() => import('@/pages/Home'))
const TimeLine = React.lazy(() => import('@/pages/TimeLine'))

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
  <Suspense fallback={<Loader />}>
    <Routes>
      {routes.map(({ path, component }) => (
        <Route key={path} path={path} element={component} />
      ))}
    </Routes>
  </Suspense>
)
export default Router
