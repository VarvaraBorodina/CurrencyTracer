import 'jest-styled-components'

import { render as RTLrender, screen } from '@testing-library/react'

import MockWrapper from '../MockWrapper'
import Footer from '.'

const render = (component: React.ReactElement) =>
  RTLrender(<MockWrapper>{component}</MockWrapper>)

const options = [
  {
    name: 'Product',
    subOptions: ['Sparks', 'Snaps'],
  },
  {
    name: 'General',
    subOptions: ['IMarket', 'Service'],
  },
  {
    name: 'Community',
    subOptions: ['Ideas', 'Streams'],
  },
]

describe('Check Footer', () => {
  it('Check footer title', async () => {
    render(<Footer />)
    expect(screen.getByText('Modsen Currency Tracker')).toBeInTheDocument()
  })

  it('Check footer description', async () => {
    render(<Footer />)
    expect(screen.getByTestId('description')).toBeInTheDocument()
  })

  it('Check menu options', async () => {
    render(<Footer />)

    options.forEach(({ name, subOptions }) => {
      expect(screen.getByText(name)).toBeInTheDocument()
      subOptions.forEach((subOption) => {
        expect(screen.getByText(subOption)).toBeInTheDocument()
      })
    })
  })
})
