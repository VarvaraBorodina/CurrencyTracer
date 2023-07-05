import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
  padding: ${(props): number => props.theme.CONTACTS_PADDING};
`

const Title = styled.h1`
  padding: ${(props): number => props.theme.CONTACTS_PADDING};
  font-family: 'PoppinsSemiBold';
  font-weight: ${(props): number => props.theme.FONT_WEIGHT_SEMI_BOLD};
  color: ${(props): string => props.theme.TEXT_COLOR};
`

const ListItem = styled.li`
  font-family: 'PoppinsLight';
  font-weight: ${(props): number => props.theme.FONT_WEIGHT_LIGHT};
  color: ${(props): string => props.theme.TEXT_COLOR};
`

export { Container, ListItem, Title }
