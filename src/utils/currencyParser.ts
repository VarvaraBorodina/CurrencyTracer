import { Currency } from '@/components/CurrencyCard/types'
import { QUOTES } from '@/constants/currencies'

const parseCurrency = (currenciesValues): Currency[] => {
  if (!currenciesValues) {
    return []
  }
  return QUOTES.map(({ name, svg, code }) => {
    return {
      name,
      svg,
      value: currenciesValues[code].value,
      code,
    }
  })
}

const getCurreenciesNames = (): string[] => {
  return QUOTES.map((quote) => quote.name)
}

const getCurreencyByName = (name: string): Currency | null => {
  const currencyInfo = QUOTES.find((quote) => quote.name === name)
  if (!currencyInfo) return null
  return {
    value: 1,
    name: currencyInfo?.name,
    code: currencyInfo?.code,
    svg: currencyInfo?.svg,
  }
}

export { getCurreenciesNames, getCurreencyByName, parseCurrency }
