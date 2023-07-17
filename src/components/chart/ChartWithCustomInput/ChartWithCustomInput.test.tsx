import 'jest-styled-components'

import { act, render as RTLrender, screen } from '@testing-library/react'

import MockWrapper from '@/components/MockWrapper'
import { mockIcons } from '@/constants/__mocks__/icons'
import ChartCustomInputObserver from '@/utils/chartCustomInputObserver'

import ChartWithCustomInput from '.'

const render = (component: React.ReactElement) =>
  RTLrender(<MockWrapper>{component}</MockWrapper>)

const notify = () => ChartCustomInputObserver.notify({ values: [], time: [] })

jest.mock('@/constants/currencies', () => ({
  QUOTES_WITH_CHART: ['EUR', 'CAD', 'JPY', 'AUD', 'GBP', 'USD'],
  BASE_CURRENCY: 'USD',
  QUOTES: mockIcons,
}))

describe('check chart with custom input', () => {
  it('Chart is not on screen', async () => {
    render(<ChartWithCustomInput />)
    expect(screen.queryByTestId('chart')).toBeNull()
  })

  it('Chart appear after user entered data', async () => {
    render(<ChartWithCustomInput />)
    act(() => notify())
    setTimeout(() => {
      expect(screen.getByTestId('chart')).toBeInTheDocument()
    }, 1000)
  })
})
