import Logo from '@/components/icons/Logo'
import TEXT from '@/constants/text'

import {
  Container,
  Content,
  Description,
  Info,
  Menu,
  MenuOption,
  OptionTitle,
  Policy,
  SubOption,
  Title,
  TitleContainer,
} from './styled'

const Footer = () => {
  return (
    <Container data-cy="footer">
      <Content>
        <Info>
          <TitleContainer>
            <Logo width={40} height={43} />
            <Title>{TEXT.TITLE}</Title>
          </TitleContainer>
          <Description data-testid="description">
            {TEXT.DESCRIPTION}
          </Description>
        </Info>
        <Menu>
          {TEXT.FOOTER_OPTIONS.map(({ subOptions, name }) => (
            <MenuOption key={name}>
              <OptionTitle>{name}</OptionTitle>
              {subOptions.map((subOption) => (
                <SubOption key={subOption}>{subOption}</SubOption>
              ))}
            </MenuOption>
          ))}
        </Menu>
      </Content>
      <Policy>{TEXT.POLICY}</Policy>
    </Container>
  )
}

export default Footer
