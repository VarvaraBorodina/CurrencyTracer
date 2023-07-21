import React from 'react'

import { Container, Info, Title, Value } from './styled'
import { CurrencyCardType } from './types'

const CurrencyCard = ({
  currency,
  handleOnClick = () => {},
}: CurrencyCardType) => {
  const { svg, code, name, value } = currency
  return (
    <Container onClick={() => handleOnClick(code, name)} data-cy={code}>
      {svg}
      <Info>
        <Title>{name}</Title>
        <Value role="value">{value !== 1 && `${value.toFixed(5)}`}</Value>
      </Info>
    </Container>
  )
}

CurrencyCard.defaultProps = {
  handleOnClick: () => {},
}

export default React.memo(CurrencyCard)
