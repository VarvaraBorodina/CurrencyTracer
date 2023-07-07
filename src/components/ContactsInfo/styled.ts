import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
  padding: ${({ theme: { SPACES } }) => SPACES.M};
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.L};
`

const Title = styled.h1`
  padding-bottom: ${({ theme: { SPACES } }) => SPACES.M};
  font-family: 'PoppinsSemiBold';
  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.L};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
`

const ListItem = styled.li`
  font-family: 'PoppinsLight';
  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
`

export { Container, ListItem, Title }
