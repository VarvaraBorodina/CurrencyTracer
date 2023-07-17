import styled from 'styled-components'

import { RESPONSIVE_SIZE } from '@/constants/breakpoints'

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: ${({ theme: { SPACES } }) => SPACES.L};
  @media (max-width: ${RESPONSIVE_SIZE}px) {
    width: 100vw;
    margin: 0;
  }
`
export default Container
