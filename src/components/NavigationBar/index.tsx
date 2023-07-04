import Logo from '../Logo'
import Toggle from '../Toggle'
import { Container, Navigator, Route } from './styled'

const NavigationBar = () => {
  return (
    <Container>
      <Logo width={40} height={43} />
      <Navigator>
        <Route>Home</Route>
        <Route>Timeline</Route>
        <Route>Bank card</Route>
        <Route>Contato</Route>
      </Navigator>
      <Toggle />
    </Container>
  )
}

export default NavigationBar
