import { Currency } from '@/components/CurrencyCard/types'
import { QUOTES, QUOTES_WITH_CHART } from '@/constants/currencies'

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

const getCurreencyByCode = (code: string): Currency | null => {
  const currencyInfo = QUOTES.find((quote) => quote.code === code)
  if (!currencyInfo) return null
  return {
    value: 1,
    name: currencyInfo?.name,
    code: currencyInfo?.code,
    svg: currencyInfo?.svg,
  }
}

const getCurreenciesWithChartNames = (): string[] => {
  return QUOTES_WITH_CHART.map((quote: string) => {
    const currencyName = getCurreencyByCode(quote)
    return currencyName ? currencyName.name : ''
    return ''
  })
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

export { getCurreenciesWithChartNames, getCurreencyByName, parseCurrency }
