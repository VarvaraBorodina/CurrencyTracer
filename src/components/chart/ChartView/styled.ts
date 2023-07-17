import styled from 'styled-components'

import { RESPONSIVE_SIZE } from '@/constants/breakpoints'

const Chart = styled.figure`
  margin-top: ${({ theme: { SPACES } }) => SPACES.S};
  position: relative;
  font-size: 12px;
  @media (max-width: ${RESPONSIVE_SIZE}px) {
    width: 90vw;
  }
`

export default Chart
