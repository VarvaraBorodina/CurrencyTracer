import NavigationBar from '@/components/NavigationBar'

import Logo from '../Logo'
import { Container, SubTitle, Title, TitleContainer } from './styled'

const Header = () => {
  return (
    <>
      <NavigationBar />
      <Container>
        <TitleContainer>
          <Title>Modsen Currency Tracker</Title>
          <SubTitle>
            Quotes for the dollar and other international currencies.
          </SubTitle>
        </TitleContainer>
        <Logo width={300} height={312} />
      </Container>
    </>
  )
}

export default Header
