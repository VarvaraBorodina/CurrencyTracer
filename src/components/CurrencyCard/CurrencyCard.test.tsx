import 'jest-styled-components'

import { fireEvent, render as RTLrender, screen } from '@testing-library/react'

import MockWrapper from '../MockWrapper'
import CurrencyCard from '.'

const handleOnClickMock = jest.fn()

const render = (component: React.ReactElement) =>
  RTLrender(<MockWrapper>{component}</MockWrapper>)

describe('Check card', () => {
  it('Check currency name', async () => {
    const currency = {
      svg: null,
      code: 'CRN',
      name: 'Currency',
      value: 0.123,
    }
    render(
      <CurrencyCard currency={currency} handleOnClick={handleOnClickMock} />
    )
    expect(screen.getByText(currency.name))
  })

  it('Check currency value', async () => {
    const currency = {
      svg: null,
      code: 'CRN',
      name: 'Currency',
      value: 0.123,
    }
    render(
      <CurrencyCard currency={currency} handleOnClick={handleOnClickMock} />
    )
    expect(screen.getByText(currency.value.toFixed(5)))
  })

  it('Check no currency value if it is equal to 1', async () => {
    const currency = {
      svg: null,
      code: 'CRN',
      name: 'Currency',
      value: 1,
    }
    render(
      <CurrencyCard currency={currency} handleOnClick={handleOnClickMock} />
    )
    expect(screen.getByRole('value')).toBeEmptyDOMElement()
  })

  it('Check if handleOnClick function is called ', async () => {
    const currency = {
      svg: null,
      code: 'CRN',
      name: 'Currency',
      value: 0.1234,
    }
    render(
      <CurrencyCard currency={currency} handleOnClick={handleOnClickMock} />
    )
    fireEvent.click(screen.getByText(currency.name))
    expect(handleOnClickMock).toHaveBeenCalled()
  })
})
