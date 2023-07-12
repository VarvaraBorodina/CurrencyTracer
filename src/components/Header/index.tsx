import NavigationBar from '@/components/NavigationBar'
import useTypedSelector from '@/hooks/useTypedSelector'
import { timestampToHoursMinutes } from '@/utils/formatDate'

import Logo from '../Logo'
import UpdateTime from '../UpdateTime'
import {
  Container,
  LogoContainer,
  SubTitle,
  Title,
  TitleContainer,
} from './styled'

const Header = () => {
  const lastUpdateTime: number = useTypedSelector((state) => {
    return state.time
  })
  return (
    <>
      <NavigationBar />
      <Container data-cy="header">
        <TitleContainer>
          <Title>Modsen Currency Tracker</Title>
          <SubTitle>
            Quotes for the dollar and other international currencies.
          </SubTitle>
        </TitleContainer>
        <LogoContainer>
          <Logo width={300} height={312} />
        </LogoContainer>
      </Container>
      <UpdateTime time={timestampToHoursMinutes(lastUpdateTime)} />
    </>
  )
}

export default Header
