import { ReactComponent as AustralianDollar } from '../assets/icons/AustralianDollar.svg'
import { ReactComponent as Bitcoin } from '../assets/icons/Bitcoin.svg'
import { ReactComponent as CanadianDollar } from '../assets/icons/CanadianDollar.svg'
import { ReactComponent as Dollar } from '../assets/icons/Dollar.svg'
import { ReactComponent as Euro } from '../assets/icons/Euro.svg'
import { ReactComponent as Libra } from '../assets/icons/Libra.svg'
import { ReactComponent as Peso } from '../assets/icons/Peso.svg'
import { ReactComponent as Yen } from '../assets/icons/Yen.svg'
import { ReactComponent as Yuan } from '../assets/icons/Yuan.svg'

export const QUOTES = [
  {
    name: 'Commercial Dollar',
    svg: <Dollar />,
    code: 'USD',
  },
  {
    name: 'Argentine Peso',
    svg: <Peso />,
    code: 'ARS',
  },
  {
    name: 'Libra',
    svg: <Libra />,
    code: 'GBP',
  },
  {
    name: 'Bitcoin',
    svg: <Bitcoin />,
    code: 'BTC',
  },
  {
    name: 'Australian Dollar',
    svg: <AustralianDollar />,
    code: 'AUD',
  },
  {
    name: 'Yuan',
    svg: <Yuan />,
    code: 'CNY',
  },
  {
    name: 'Yen',
    svg: <Yen />,
    code: 'JPY',
  },
  {
    name: 'Canadian Dollar',
    svg: <CanadianDollar />,
    code: 'CAD',
  },
  {
    name: 'Euro',
    svg: <Euro />,
    code: 'EUR',
  },
]

export const QUOTES_WITH_CHART = ['EUR', 'CAD', 'JPY', 'AUD', 'GBP', 'USD']

export const BASE_CURRENCY = QUOTES[0].code
