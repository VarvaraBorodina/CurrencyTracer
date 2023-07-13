import 'jest-styled-components'

import { act, render as RTLrender, screen } from '@testing-library/react'

import { mockIcons } from '@/constants/__mocks__/icons'
import ChartCustomInputObserver from '@/utils/ChartCustomInputObserver'

import MockWrapper from '../MockWrapper'
import ChartModal from '.'

const render = (component: React.ReactElement) =>
  RTLrender(<MockWrapper>{component}</MockWrapper>)

const notify = () => ChartCustomInputObserver.notify({ values: [], time: [] })

jest.mock('@/constants/currencies', () => ({
  QUOTES_WITH_CHART: ['EUR', 'CAD', 'JPY', 'AUD', 'GBP', 'USD'],
  BASE_CURRENCY: 'USD',
  QUOTES: mockIcons,
}))

describe('Check Chart Modal', () => {
  it('Modal is not on screen', async () => {
    render(<ChartModal />)
    expect(screen.queryByText('Chart can be created!')).toBeNull()
  })

  it('Modal is appear after notify on screen', async () => {
    render(<ChartModal />)
    act(() => notify())
    expect(screen.queryByText('Chart can be created!')).toBeInTheDocument()
  })

  it('Modal is disapear after 1 sec', async () => {
    render(<ChartModal />)
    act(() => notify())
    expect(screen.queryByText('Chart can be created!')).toBeInTheDocument()

    setTimeout(() => {
      expect(screen.queryByText('Chart can be created!')).toBeNull()
    }, 1000)
  })
})
