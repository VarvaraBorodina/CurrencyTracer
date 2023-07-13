import 'jest-styled-components'

import {
  act,
  render as RTLrender,
  screen,
  waitFor,
} from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { mockIcons } from '@/constants/__mocks__/icons'
import { QUOTES } from '@/constants/currencies'

import MockWrapper from '../MockWrapper'
import CurrencySection from '.'

const render = (component: React.ReactElement) =>
  RTLrender(<MockWrapper>{component}</MockWrapper>)

jest.mock('@/constants/currencies', () => ({
  QUOTES: mockIcons,
}))

jest.mock('@/api', () => ({
  getCurrenciesValues: () => {
    return {
      ARS: {
        code: 'ARS',
        value: 259.57197,
      },
      AUD: {
        code: 'AUD',
        value: 1.5026523802,
      },
      BTC: {
        code: 'BTC',
        value: 0.0000327352,
      },
      CAD: {
        code: 'CAD',
        value: 3456,
      },
      CNY: {
        code: 'CNY',
        value: 2345,
      },
      EUR: {
        code: 'EUR',
        value: 1234,
      },
      GBP: {
        code: 'GBP',
        value: 0.7871509464,
      },
      JPY: {
        code: 'JPY',
        value: 144.4902824067,
      },
      USD: {
        code: 'USD',
        value: 1,
      },
    }
  },
}))

const mockOnClick = jest.fn()

describe('Check Currency Section', () => {
  it('Show loader first', () => {
    const store = configureStore()({
      theme: { theme: 'DARK' },
      time: '1689276698410',
      quotes: JSON.stringify({
        ARS: { code: 'ARS', value: 259.57197 },
        AUD: { code: 'AUD', value: 1.5026523802 },
        BTC: { code: 'BTC', value: 0.0000327352 },
        CAD: { code: 'CAD', value: 1.3286572624 },
        CNY: { code: 'CNY', value: 7.2475108128 },
        EUR: { code: 'EUR', value: 0.9212010246 },
        GBP: { code: 'GBP', value: 0.7871509464 },
        JPY: { code: 'JPY', value: 144.4902824067 },
        USD: { code: 'USD', value: 1 },
      }),
    })
    render(
      <Provider store={store}>
        <CurrencySection
          title="Quotes"
          handleOnCurrencyCardClick={mockOnClick}
        />
      </Provider>
    )
    expect(screen.queryByTestId('loader')).toBeInTheDocument()
  })

  it('All currencies appear', async () => {
    const store = configureStore()({
      theme: { theme: 'DARK' },
      time: '1689276698410',
      quotes: JSON.stringify({
        ARS: { code: 'ARS', value: 259.57197 },
        AUD: { code: 'AUD', value: 1.5026523802 },
        BTC: { code: 'BTC', value: 0.0000327352 },
        CAD: { code: 'CAD', value: 1.3286572624 },
        CNY: { code: 'CNY', value: 7.2475108128 },
        EUR: { code: 'EUR', value: 0.9212010246 },
        GBP: { code: 'GBP', value: 0.7871509464 },
        JPY: { code: 'JPY', value: 144.4902824067 },
        USD: { code: 'USD', value: 1 },
      }),
    })
    act(() => {
      render(
        <Provider store={store}>
          <CurrencySection
            title="Quotes"
            handleOnCurrencyCardClick={mockOnClick}
          />
        </Provider>
      )
    })
    await act(async () => {
      await waitFor(() => {
        QUOTES.forEach(({ name }) => {
          screen.queryByText(name)
        })
      })
    })
  })

  it('run with Empty storage', async () => {
    const store = configureStore()({})
    act(() => {
      render(
        <Provider store={store}>
          <CurrencySection
            title="Quotes"
            handleOnCurrencyCardClick={mockOnClick}
          />
        </Provider>
      )
    })
    await act(async () => {
      await waitFor(() => {
        QUOTES.forEach(({ name }) => {
          screen.queryByText(name)
        })
        screen.queryByText('1234')
        screen.queryByText('2345')
        screen.queryByText('3456')
      })
    })
  })

  it('run with cache', async () => {
    console.log(Date.now().toString())
    const store = configureStore()({
      theme: { theme: 'DARK' },
      time: Date.now().toString(),
      quotes: JSON.stringify({
        ARS: { code: 'ARS', value: 20 },
        AUD: { code: 'AUD', value: 30 },
        BTC: { code: 'BTC', value: 40 },
        CAD: { code: 'CAD', value: 50 },
        CNY: { code: 'CNY', value: 50 },
        EUR: { code: 'EUR', value: 60 },
        GBP: { code: 'GBP', value: 70 },
        JPY: { code: 'JPY', value: 80 },
        USD: { code: 'USD', value: 1 },
      }),
    })
    act(() => {
      render(
        <Provider store={store}>
          <CurrencySection
            title="Quotes"
            handleOnCurrencyCardClick={mockOnClick}
          />
        </Provider>
      )
    })
    await act(async () => {
      await waitFor(() => {
        QUOTES.forEach(({ name }) => {
          screen.queryByText(name)
        })
        screen.queryByText('10')
        screen.queryByText('20')
        screen.queryByText('30')
      })
    })
  })
})
