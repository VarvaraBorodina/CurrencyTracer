import 'jest-styled-components'

import {
  act,
  fireEvent,
  render as RTLrender,
  screen,
} from '@testing-library/react'

import { mockIcons } from '@/constants/__mocks__/icons'
import { QUOTES } from '@/constants/currencies'

import MockWrapper from '../MockWrapper'
import CurrencyModal from '.'

const render = (component: React.ReactElement) =>
  RTLrender(<MockWrapper>{component}</MockWrapper>)

jest.mock('@/constants/currencies', () => ({
  QUOTES: mockIcons,
}))

jest.mock('@/api', () => ({
  getCurrencyValue: () => {
    return Promise.resolve(1.234)
  },
}))

describe('Check Currency Modal', () => {
  it('Check All currencies appear', () => {
    render(<CurrencyModal code="USD" />)
    QUOTES.forEach(({ name }) =>
      expect(screen.queryAllByText(name)[0]).toBeInTheDocument()
    )
  })
  it('Check enter message', async () => {
    render(<CurrencyModal code="USD" />)
    expect(screen.getByText('Choose Currency...')).toBeInTheDocument()
  })

  QUOTES.forEach(({ name, code }) => {
    if (code !== 'USD') {
      it(`Check enter loading on ${name}`, async () => {
        await act(async () => render(<CurrencyModal code="USD" />))
        await act(async () => fireEvent.click(screen.queryAllByText(name)[0]))
        expect(
          screen.getByText(`1 ${name} = 1.234 Commercial Dollar`)
        ).toBeInTheDocument()
      })
    }
  })
})
