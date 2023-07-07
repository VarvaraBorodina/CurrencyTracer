import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #00000070;
  position: fixed;
  left: 0;
  top: 0;
  cursor: pointer;
`

const Content = styled.div`
  padding: ${({ theme: { SPACES } }) => SPACES.M}px;
  border-radius: 12px;
  background-color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};
  cursor: auto;
`

export { Container, Content }
