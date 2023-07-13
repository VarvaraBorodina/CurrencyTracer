import 'jest-styled-components'

import { render as RTLrender, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import MockWrapper from '../MockWrapper'
import Header from '.'

const mockUseAppDispatch = jest.fn()

jest.mock('@/hooks/useTypedDispatch', () => () => mockUseAppDispatch())

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

describe('Should display Header on screen', () => {
  it('Should display header title', async () => {
    render(<Header />)

    expect(screen.getByText('Modsen Currency Tracker')).toBeInTheDocument()
    expect(
      screen.getByText(
        'Quotes for the dollar and other international currencies.'
      )
    ).toBeInTheDocument()
  })
  it('Should display header subtitle', () => {
    render(<Header />)
    expect(
      screen.getByText(
        'Quotes for the dollar and other international currencies.'
      )
    ).toBeInTheDocument()
  })
})
