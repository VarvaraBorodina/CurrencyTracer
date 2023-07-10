import { styled } from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  width: ${({ theme: { SIZES } }) => SIZES.FOOTER_WIDTH}px;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.L * 3};
  @media (max-width: 1024px) {
    width: 100vw;
  }
`

export { Container }
