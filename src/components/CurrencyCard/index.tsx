import { Container, Info, Title, Value } from './styled'
import { Currency } from './types'

const CurrencyCard = ({ name, value, svg }: Currency) => {
  return (
    <Container>
      {svg}
      <Info>
        <Title>{name}</Title>
        <Value>{value}</Value>
      </Info>
    </Container>
  )
}

export default CurrencyCard
