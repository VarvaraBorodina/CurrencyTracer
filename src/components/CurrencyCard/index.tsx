import { Container, Info, Title, Value } from './styled'
import { Currency } from './types'

type CurrencyCardType = {
  currency: Currency
  handleOnClick: (currencyCode: string, currencyName: string) => void
}

const CurrencyCard = ({ currency, handleOnClick }: CurrencyCardType) => {
  const { svg, code, name, value } = currency
  return (
    <Container onClick={() => handleOnClick(code, name)}>
      {svg}
      <Info>
        <Title>{name}</Title>
        <Value>{value !== 1 && `$${value.toFixed(5)}`}</Value>
      </Info>
    </Container>
  )
}

export default CurrencyCard
