import styled from 'styled-components'

import { RESPONSIVE_SIZE } from '@/constants/breakpoints'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme: { COLORS } }) => COLORS.MODAL_BACKGROUND};
  position: fixed;
  left: 0;
  top: 0;
  cursor: pointer;
  @media (max-width: ${RESPONSIVE_SIZE}px) {
    height: 100%;
  }
`

const Content = styled.div`
  padding: ${({ theme: { SPACES } }) => SPACES.M}px;
  border-radius: 12px;
  background-color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};
  cursor: auto;
`

export { Container, Content }
