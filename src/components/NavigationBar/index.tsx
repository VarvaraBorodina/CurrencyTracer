import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import ROUTES_NAMES from '@/constants/routesNames'
import TEXT from '@/constants/text'

import Logo from '../icons/Logo'
import NavigationModal from '../NavigationModal'
import Toggle from '../ui/Toggle'
import { Button, Container, Navigator, Route } from './styled'

const { CONTACTS, TIMELINE, BANKCARD, HOME } = ROUTES_NAMES

export const routes = [
  {
    path: HOME,
    name: TEXT.ROUTES.HOME,
  },
  {
    path: TIMELINE,
    name: TEXT.ROUTES.TIMELINE,
  },
  {
    path: BANKCARD,
    name: TEXT.ROUTES.BANKCARD,
  },
  {
    path: CONTACTS,
    name: TEXT.ROUTES.CONTACTS,
  },
]

const NavigationBar = () => {
  const currentPath = useLocation().pathname
  const [isModal, setIsModal] = useState(false)
  return (
    <Container data-cy="navigation">
      <Logo width={40} height={43} />
      <Navigator>
        {routes.map(({ name, path }) => (
          <Route
            $isCurrent={currentPath === path}
            key={path}
            to={path}
            data-cy={`${path.slice(1, path.length)}path`}
          >
            {name}
          </Route>
        ))}
      </Navigator>
      <Button onClick={() => setIsModal(true)}>Change Page</Button>
      {isModal && <NavigationModal routes={routes} setIsActive={setIsModal} />}
      <Toggle />
    </Container>
  )
}

export default NavigationBar
