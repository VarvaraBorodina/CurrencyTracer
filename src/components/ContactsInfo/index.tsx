import React from 'react'

import { Container, ListItem, Title } from './styled'

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

const ContactsInfo = () => {
  return (
    <Container>
      <Title>Contacts</Title>
      <ul>
        {contacts.map((contact) => (
          <ListItem
            key={contact.name}
          >{`${contact.name} : ${contact.value}`}</ListItem>
        ))}
      </ul>
    </Container>
  )
}
export default ContactsInfo
