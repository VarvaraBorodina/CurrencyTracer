import { Currency } from '@/components/CurrencyCard/types'

import CurrencyCard from '../CurrencyCard'
import { Container, CurrencyContainer, Line, Title } from './styled'

type CurrencySectionProps = {
  currencies: Currency[]
  title: string
}

const CurrencySection = ({ currencies, title }: CurrencySectionProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Line />
      <CurrencyContainer>
        {currencies.map(({ name, value, svg }) => (
          <CurrencyCard name={name} value={value} svg={svg} key={name} />
        ))}
      </CurrencyContainer>
    </Container>
  )
}

export default CurrencySection
