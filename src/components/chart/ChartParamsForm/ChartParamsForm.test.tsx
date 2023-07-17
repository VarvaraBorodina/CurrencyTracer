import 'jest-styled-components'

import { fireEvent, render as RTLrender, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import MockWrapper from '@/components/MockWrapper'
import { mockIcons } from '@/constants/__mocks__/icons'
import { QUOTES } from '@/constants/currencies'
import { getCurreenciesWithChartNames } from '@/utils/currencyParser'

import ChartParamsForm from '.'

const mockNotify = jest.fn()
const mockchartParamsChanged = jest.fn()

jest.mock('@/utils/ChartParamsObserver', () => ({
  ...jest.requireActual('@/utils/ChartParamsObserver'),
  chartParamsChanged: () => mockchartParamsChanged(),
}))

jest.mock('@/constants/currencies', () => ({
  QUOTES_WITH_CHART: ['EUR', 'CAD', 'JPY', 'AUD', 'GBP', 'USD'],
  BASE_CURRENCY: 'USD',
  QUOTES: mockIcons,
}))

jest.mock('@/hooks/useTypedSelector', () => () => 'DARK')

const store = configureStore()({
  theme: {
    theme: 'DARK',
  },
})

const render = (component: React.ReactElement) =>
  RTLrender(
    <MockWrapper>
      <Provider store={store}>{component}</Provider>
    </MockWrapper>
  )

describe('Check Chart Params Form', () => {
  it('Currency Cards not on screen firstly', async () => {
    render(<ChartParamsForm />)
    QUOTES.forEach(({ name }) => {
      expect(screen.queryByText(name)).toBeNull()
    })
  })

  const currencies = getCurreenciesWithChartNames()
  currencies.forEach((name) => {
    it('Same currency in dropdown & card for the base currency', async () => {
      render(<ChartParamsForm />)

      fireEvent.click(screen.getByTestId('dropdown-input-1'))
      expect(screen.getByText(name)).toBeInTheDocument()

      fireEvent.click(screen.getByText(name))
      expect(screen.queryAllByText(name)).toHaveLength(2)
    })
  })

  currencies.forEach((name) => {
    it('Same currency in dropdown & card for the currency', async () => {
      render(<ChartParamsForm />)

      fireEvent.click(screen.getByTestId('dropdown-input-2'))
      expect(screen.getByText(name)).toBeInTheDocument()

      fireEvent.click(screen.getByText(name))
      expect(screen.queryAllByText(name)).toHaveLength(2)
    })
  })

  currencies.forEach((name) => {
    it('Check observer is not called with same currencies', async () => {
      render(<ChartParamsForm />)

      fireEvent.click(screen.getByTestId('dropdown-input-2'))
      fireEvent.click(screen.getByTestId('dropdown-input-1'))

      const options = screen.getAllByText(name)
      fireEvent.click(options[0])
      fireEvent.click(options[1])

      expect(mockNotify).not.toBeCalled()
      expect(mockchartParamsChanged).toBeCalled()
    })
  })

  currencies.forEach((currency) => {
    currencies.forEach((baseCurrency) => {
      it('Check observer is called with the same currency', async () => {
        render(<ChartParamsForm />)
        if (currency !== baseCurrency) {
          fireEvent.click(screen.getByTestId('dropdown-input-1'))
          fireEvent.click(screen.getByText(currency))

          fireEvent.click(screen.getByTestId('dropdown-input-2'))
          fireEvent.click(screen.getByText(baseCurrency))

          expect(mockchartParamsChanged).toBeCalled()
        }
      })
    })
  })
})
