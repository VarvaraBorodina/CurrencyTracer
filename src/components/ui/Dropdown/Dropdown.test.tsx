import 'jest-styled-components'

import { fireEvent, render as RTLrender, screen } from '@testing-library/react'

import MockWrapper from '@/components/MockWrapper'

import Dropdown from '.'

const render = (component: React.ReactElement) =>
  RTLrender(<MockWrapper>{component}</MockWrapper>)
jest.mock('@/hooks/useTypedSelector', () => () => 'DARK')

const setTitleMock = jest.fn()
const options = ['qw', 'er', 'ty', 'ui']

describe('Check Dropdown', () => {
  it('Dropdown is not open', async () => {
    render(
      <Dropdown
        title="Dropdown"
        id={1}
        setTitle={setTitleMock}
        options={options}
      />
    )

    expect(screen.queryByText('Dropdown')).toBeInTheDocument()
    options.forEach((option) => {
      expect(screen.queryByText(option)).toBeNull()
    })
  })

  it('Dropdown open on click', async () => {
    render(
      <Dropdown
        title="Dropdown"
        id={1}
        setTitle={setTitleMock}
        options={options}
      />
    )

    fireEvent.click(screen.getByText('Dropdown'))
    options.forEach((option) => {
      expect(screen.queryByText(option)).toBeInTheDocument()
    })
  })

  options.forEach((chosenOption) => {
    it(`Dropdown close on click on ${chosenOption}`, async () => {
      render(
        <Dropdown
          title="Dropdown"
          id={1}
          setTitle={setTitleMock}
          options={options}
        />
      )
      fireEvent.click(screen.getByText('Dropdown'))
      fireEvent.click(screen.getByText(chosenOption))
      options.forEach((option) => {
        expect(screen.queryByText(option)).toBeNull()
      })
    })
  })
})
