import 'jest-styled-components'

import { render as RTLrender, screen } from '@testing-library/react'

import { MOUNTH_VALUES } from '@/constants/__mocks__/currencyValuesOnMounth'
import { mockIcons } from '@/constants/__mocks__/icons'

import MockWrapper from '../MockWrapper'
import ChartWithAPI from '.'

const render = (component: React.ReactElement) =>
  RTLrender(<MockWrapper>{component}</MockWrapper>)

jest.mock('@/constants/currencies', () => ({
  QUOTES_WITH_CHART: ['EUR', 'CAD', 'JPY', 'AUD', 'GBP', 'USD'],
  BASE_CURRENCY: 'USD',
  QUOTES: mockIcons,
}))

jest.mock('@/api', () => ({
  ...jest.requireActual('@/api'),
  getMonthInfo: () => Promise.resolve(MOUNTH_VALUES),
}))

describe('Check chart with API', () => {
  it('No chart first', async () => {
    render(<ChartWithAPI />)
    expect(screen.queryByTestId('chart-with-api')).toBeNull()
  })
})
