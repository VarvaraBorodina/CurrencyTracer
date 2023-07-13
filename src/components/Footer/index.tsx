import Logo from '../Logo'
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

const options = [
  {
    name: 'Product',
    subOptions: ['Sparks', 'Snaps'],
  },
  {
    name: 'General',
    subOptions: ['IMarket', 'Service'],
  },
  {
    name: 'Community',
    subOptions: ['Ideas', 'Streams'],
  },
]

const Footer = () => {
  return (
    <Container data-cy="footer">
      <Content>
        <Info>
          <TitleContainer>
            <Logo width={40} height={43} />
            <Title>Modsen Currency Tracker</Title>
          </TitleContainer>
          <Description data-testid="description">
            {`Since then, the company has grown organically to. Starsup is the
          world's largest trading platform, with $12 billion worth of currency
          trading and 500,000 tickets sold daily to tens of thousands of traders
          worldwide.`}
          </Description>
        </Info>
        <Menu>
          {options.map(({ subOptions, name }) => (
            <MenuOption key={name}>
              <OptionTitle>{name}</OptionTitle>
              {subOptions.map((subOption) => (
                <SubOption key={subOption}>{subOption}</SubOption>
              ))}
            </MenuOption>
          ))}
        </Menu>
      </Content>
      <Policy>Startsup © 2023-2024, All Rights Reserved</Policy>
    </Container>
  )
}

export default Footer
