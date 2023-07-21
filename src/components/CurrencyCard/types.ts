export type Currency = {
  name: string
  value: number
  svg: JSX.Element | null
  code: string
}

export type CurrencyCardType = {
  currency: Currency
  handleOnClick?: (currencyCode: string, currencyName: string) => void
}
