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
export default parseCurrency
