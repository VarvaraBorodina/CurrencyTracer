import 'jest-styled-components'

import { render as RTLrender, screen } from '@testing-library/react'

import MockWrapper from '../MockWrapper'
import ContactsInfo from '.'

const render = (component: React.ReactElement) =>
  RTLrender(<MockWrapper>{component}</MockWrapper>)

const contacts = [
  {
    name: 'Phone',
    value: '+375-29-000-00-00',
  },
  {
    name: 'Email',
    value: 'email@mail.ru',
  },
  {
    name: 'Address',
    value: 'Minsk, Belarus',
  },
]

describe('Check Contacts', () => {
  it('Check contacts info', async () => {
    render(<ContactsInfo />)

    contacts.forEach(({ name }) => {
      expect(screen.getByTestId(name)).toBeInTheDocument()
    })
  })
})
