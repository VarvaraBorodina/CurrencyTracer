import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: ${({ theme: { SPACES } }) => SPACES.L};
`
export default Container
