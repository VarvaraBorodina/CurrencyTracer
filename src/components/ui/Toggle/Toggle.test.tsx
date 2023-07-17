import 'jest-styled-components'

import { fireEvent, render as RTLrender, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import MockWrapper from '@/components/MockWrapper'

import Toggle from '.'

const mockUseAppDispatch = jest.fn()

jest.mock('@/hooks/useTypedDispatch', () => () => () => mockUseAppDispatch())
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

describe('Check toggle', () => {
  it('Toggle should change theme', async () => {
    render(<Toggle />)
    fireEvent.click(screen.getByTestId('toggle'))
    expect(mockUseAppDispatch).toHaveBeenCalled()
  })

  it('Double toggle get theme back', async () => {
    render(<Toggle />)
    const prevState = store.getState()
    fireEvent.click(screen.getByTestId('toggle'))
    fireEvent.click(screen.getByTestId('toggle'))
    expect(store.getState()).toEqual(prevState)
  })
})
