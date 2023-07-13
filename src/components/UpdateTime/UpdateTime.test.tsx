import 'jest-styled-components'

import { fireEvent, render as RTLrender, screen } from '@testing-library/react'

import UpdateTime from '.'
import MockWrapper from '../MockWrapper'

const render = (component: React.ReactElement) =>
  RTLrender(<MockWrapper>{component}</MockWrapper>)

describe('Check update time', () => {
  it('Check update time', async () => {
    const time = '12:13'
    render(<UpdateTime time={time} />)
    expect(screen.getByText(`Last updated at ${time}`)).toBeInTheDocument()
  })
})
