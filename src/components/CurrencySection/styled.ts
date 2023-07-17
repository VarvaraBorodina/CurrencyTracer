import styled from 'styled-components'

import { RESPONSIVE_SIZE } from '@/constants/breakpoints'

const Container = styled.section`
  width: ${({ theme: { SIZES } }) => SIZES.FOOTER_WIDTH}px;
  margin: 0 auto;
  @media (max-width: ${({ theme: { SIZES } }) => SIZES.FOOTER_WIDTH}px) {
    width: 95vw;
  }
`

const Line = styled.div`
  width: ${({ theme: { SIZES } }) => SIZES.CARD_WIDTH}px;
  height: 2px;
  margin-top: ${({ theme: { SPACES } }) => SPACES.S};
  background-color: ${({ theme: { COLOR_THEME } }) =>
    COLOR_THEME.CARD_BORDER_COLOR};
  @media (max-width: ${RESPONSIVE_SIZE}px) {
    width: 90vw;
    height: 1px;
    margin: 0 auto;
  }
`
const Title = styled.h3`
  font-family: ${({ theme: { FONTS } }) => FONTS.MAIN_LIGHT};
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.L};
  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.NAVIGATION_COLOR};
  @media (max-width: ${RESPONSIVE_SIZE}px) {
    margin: 0 auto;
    text-align: center;
    font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S};
  }
`

const CurrencyContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.L};
  @media (max-width: ${RESPONSIVE_SIZE}px) {
    display: flex;
    flex-direction: column;
    grid-template-columns: auto;
    align-items: center;
  }
`

export { Container, CurrencyContainer, Line, Title }
