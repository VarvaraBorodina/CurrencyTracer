import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: ${({ theme: { SPACES } }) => SPACES.L};
  @media (max-width: 1024px) {
    width: 100vw;
    margin: 0;
  }
`
export default Container
