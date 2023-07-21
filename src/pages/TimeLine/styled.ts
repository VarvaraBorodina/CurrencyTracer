import { styled } from 'styled-components'

import { RESPONSIVE_SIZE } from '@/constants/breakpoints'

const Container = styled.div`
  margin: 0 auto;
  width: ${({ theme: { SIZES } }) => SIZES.FOOTER_WIDTH}px;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.L * 3};
  @media (max-width: ${RESPONSIVE_SIZE}px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const Button = styled.button`
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.M}px;
  font-family: PoppinsLight;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.L};
  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.NAVIGATION_COLOR};
  padding: ${({ theme: { SPACES } }) => SPACES.M * 0.5};
  background-color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};
  border: ${({ theme: { SIZES } }) => SIZES.TOGGLE_BORDER_SIZE}px solid
    ${({ theme: { COLOR_THEME } }) => COLOR_THEME.CARD_BORDER_COLOR};
  border-radius: 8px;
  cursor: pointer;
  @media (max-width: ${RESPONSIVE_SIZE}px) {
    width: 90vw;
    max-width: ${({ theme: { SIZES } }) => SIZES.CARD_WIDTH}px;
    margin-bottom: ${({ theme: { SPACES } }) => SPACES.M}px;
    text-align: center;
    font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S};
  }
`

export { Button, Container }
