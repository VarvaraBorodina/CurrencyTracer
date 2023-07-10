import styled from 'styled-components'

const Chart = styled.div`
  margin-top: ${({ theme: { SPACES } }) => SPACES.S};
  position: relative;
  font-size: 12px;
  @media (max-width: 1024px) {
    width: 90%;
    height: 70%;
  }
`

export default Chart
