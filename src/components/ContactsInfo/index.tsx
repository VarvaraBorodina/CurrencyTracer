import TEXT from '@/constants/text'

import { Container, ListItem, Title } from './styled'

const ContactsInfo = () => {
  return (
    <Container data-cy="contacts">
      <Title>Contacts</Title>
      <ul>
        {TEXT.CONTACT_INFO.map(({ name, value }) => (
          <ListItem
            key={name}
            data-testid={name}
          >{`${name} : ${value}`}</ListItem>
        ))}
      </ul>
    </Container>
  )
}
export default ContactsInfo
