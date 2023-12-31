import { Currency } from '@/components/CurrencyCard/types'
import { QUOTES, QUOTES_WITH_CHART } from '@/constants/currencies'

const parseCurrency = (currenciesValues: string): Currency[] => {
  if (!currenciesValues) {
    return []
  }
  const currenciesValuesObj = JSON.parse(currenciesValues)
  return QUOTES.map(({ name, svg, code }) => {
    return {
      name,
      svg,
      value: currenciesValuesObj[code].value,
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
  })
}

const getCurreenciesNames = (): string[] => {
  const currensiesNames: string[] = []
  QUOTES.forEach(({ name }) => {
    currensiesNames.push(name)
  })
  return currensiesNames
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

export {
  getCurreenciesNames,
  getCurreenciesWithChartNames,
  getCurreencyByName,
  parseCurrency,
}
