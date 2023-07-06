import { Container, Info, Title, Value } from './styled'
import { Currency } from './types'

const CurrencyCard = ({ name, value, svg }: Currency) => {
  return (
    <Container>
      {svg}
      <Info>
        <Title>{name}</Title>
        <Value>{value !== 1 && `$${value.toFixed(5)}`}</Value>
      </Info>
    </Container>
  )
}

export default CurrencyCard
