import Logo from '@/components/icons/Logo'
import NavigationBar from '@/components/NavigationBar'
import UpdateTime from '@/components/UpdateTime'
import TEXT from '@/constants/text'
import { useTypedSelector } from '@/hooks'
import { timestampToHoursMinutes } from '@/utils/formatDate'

import {
  Container,
  LogoContainer,
  SubTitle,
  Title,
  TitleContainer,
} from './styled'

const Header = () => {
  const lastUpdateTime: number = useTypedSelector((state) => state.time)
  return (
    <>
      <NavigationBar />
      <Container data-cy="header">
        <TitleContainer>
          <Title>{TEXT.TITLE}</Title>
          <SubTitle>{TEXT.SUB_TITLE}</SubTitle>
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
