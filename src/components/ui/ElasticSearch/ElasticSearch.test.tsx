import 'jest-styled-components'

import { fireEvent, render as RTLrender, screen } from '@testing-library/react'

import MockWrapper from '@/components/MockWrapper'

import ElasticSearch from '.'

const render = (component: React.ReactElement) =>
  RTLrender(<MockWrapper>{component}</MockWrapper>)

const options = [
  'qwert',
  'qweuio',
  'qwedfg',
  'qwsdfg',
  'qwppp',
  'qghhj',
  'qkkaa',
]
const setValueMock = jest.fn()

describe('Check ElasticSearch', () => {
  it('Check ElasticSearch is close', async () => {
    render(
      <ElasticSearch
        title="Test"
        options={options}
        changeValue={setValueMock}
      />
    )

    expect(screen.queryByPlaceholderText('Test')).toBeInTheDocument()
    options.forEach((option) => {
      expect(screen.queryByText(option)).toBeNull()
    })
  })

  it('Check ElasticSearch shows options on focus', async () => {
    render(
      <ElasticSearch
        title="Test"
        options={options}
        changeValue={setValueMock}
      />
    )

    fireEvent.focus(screen.queryByPlaceholderText('Test') as HTMLInputElement)

    options.forEach((option) => {
      expect(screen.queryByText(option)).toBeInTheDocument()
    })
  })

  it('Check ElasticSearch filter "qw"', async () => {
    render(
      <ElasticSearch
        title="Test"
        options={options}
        changeValue={setValueMock}
      />
    )
    const input = screen.queryByPlaceholderText('Test') as HTMLInputElement
    fireEvent.focus(input)
    fireEvent.change(input, {
      target: {
        value: 'qw',
      },
    })

    options
      .filter((option) => option.includes('qw'))
      .forEach((option) => {
        expect(screen.queryByText(option)).toBeInTheDocument()
      })

    options
      .filter((option) => !option.includes('qw'))
      .forEach((option) => {
        expect(screen.queryByText(option)).toBeNull()
      })
  })
})
