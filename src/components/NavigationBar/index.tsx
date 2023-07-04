import ROUTES_NAMES from '@/constants/routesNames'

import Logo from '../Logo'
import Toggle from '../Toggle'
import { Container, Navigator, Route } from './styled'

const { CONTACTS, TIMELINE, BANKCARD, HOME } = ROUTES_NAMES

export const routes = [
  {
    path: HOME,
    name: 'Home',
  },
  {
    path: TIMELINE,
    name: 'Timeline',
  },
  {
    path: BANKCARD,
    name: 'Bank card',
  },
  {
    path: CONTACTS,
    name: 'Contato',
  },
]

const NavigationBar = () => {
  return (
    <Container>
      <Logo width={40} height={43} />
      <Navigator>
        {routes.map(({ name, path }) => (
          <Route key={path} to={path}>
            {name}
          </Route>
        ))}
      </Navigator>
      <Toggle />
    </Container>
  )
}

export default NavigationBar
