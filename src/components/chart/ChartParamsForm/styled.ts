import { styled } from 'styled-components'

import { RESPONSIVE_SIZE } from '@/constants/breakpoints'

const Dropdowns = styled.section`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${RESPONSIVE_SIZE}px) {
    width: 100vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const ChosenOptions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.M};
  @media (max-width: ${RESPONSIVE_SIZE}px) {
    width: 100vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export { ChosenOptions, Dropdowns }
