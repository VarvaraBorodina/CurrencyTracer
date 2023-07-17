import styled from 'styled-components'

import { RESPONSIVE_SIZE } from '@/constants/breakpoints'

const Ellipse = styled.div<{ $isLeft: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${(props): string => (props.$isLeft ? 'left' : 'right')};
  height: ${({ theme: { SIZES } }) => SIZES.TOGGLE_HEIGHT}px;
  width: ${({ theme: { SIZES } }) => SIZES.TOGGLE_WIDHT}px;
  border-radius: ${({ theme: { SIZES } }) => SIZES.TOGGLE_HEIGHT / 2}px;
  border: ${({ theme: { SIZES } }) => SIZES.TOGGLE_BORDER_SIZE}px solid
    ${({ theme: { COLOR_THEME } }) => COLOR_THEME.NAVIGATION_COLOR};
  background-color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};
  transition: 0.3s ease-out;
  @media (max-width: ${RESPONSIVE_SIZE}px) {
    width: ${({ theme: { SIZES } }) => SIZES.TOGGLE_WIDHT / 2}px;
    height: ${({ theme: { SIZES } }) => SIZES.TOGGLE_HEIGHT / 2}px;
  }
`
const Round = styled.div`
  height: ${({ theme: { SIZES } }) => SIZES.TOGGLE_HEIGHT}px;
  width: ${({ theme: { SIZES } }) => SIZES.TOGGLE_HEIGHT}px;
  border-radius: ${({ theme: { SIZES } }) => SIZES.TOGGLE_HEIGHT / 2}px;
  border: ${({ theme: { SIZES } }) => SIZES.TOGGLE_BORDER_SIZE}px solid
    ${({ theme: { COLOR_THEME } }) => COLOR_THEME.NAVIGATION_COLOR};
  cursor: pointer;
  @media (max-width: ${RESPONSIVE_SIZE}px) {
    width: ${({ theme: { SIZES } }) => SIZES.TOGGLE_HEIGHT / 2}px;
    height: ${({ theme: { SIZES } }) => SIZES.TOGGLE_HEIGHT / 2}px;
  }
`
export { Ellipse, Round }
