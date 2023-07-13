import 'jest-styled-components'

import { fireEvent, render as RTLrender, screen } from '@testing-library/react'

import MockWrapper from '../MockWrapper'
import ChartCustomDataForm from '.'

const render = (component: React.ReactElement) =>
  RTLrender(<MockWrapper>{component}</MockWrapper>)

describe('Check custom input form', () => {
  it('Check input is empty first', async () => {
    render(<ChartCustomDataForm />)
    const input = screen.getByPlaceholderText('Enter your data')
    expect(input).toBeInTheDocument()
    expect(input).toBeEmptyDOMElement()
  })

  it('Check input get number', async () => {
    render(<ChartCustomDataForm />)
    const input = screen.getByTestId('custom-data-input')
    fireEvent.change(input, {
      target: {
        value: 12,
      },
    })
    expect(input).toHaveValue(12)
  })

  it('Check input get string leads to empty string', async () => {
    render(<ChartCustomDataForm />)
    const input = screen.getByTestId('custom-data-input') as HTMLInputElement
    fireEvent.change(input, {
      target: {
        value: 'asdfgh',
      },
    })
    expect(input.value).toEqual('')
  })

  it('Check input get string leads to empty string', async () => {
    render(<ChartCustomDataForm />)
    const input = screen.getByTestId('custom-data-input') as HTMLInputElement
    fireEvent.change(input, {
      target: {
        value: '1234',
      },
    })
    fireEvent.click(screen.getByText('Add data'))
    expect(input.value).toEqual('1234')
  })
})
