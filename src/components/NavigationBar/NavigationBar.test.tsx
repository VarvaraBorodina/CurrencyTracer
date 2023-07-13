import 'jest-styled-components'

import { render as RTLrender, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import MockWrapper from '../MockWrapper'
import NavigationBar from '.'
import { routes } from './'

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

describe('Check Navigation Bar', () => {
  it('Check routes', async () => {
    render(<NavigationBar />)
    routes.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument()
    })
  })
})
