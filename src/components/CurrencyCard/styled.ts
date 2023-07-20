import styled from 'styled-components'

import { RESPONSIVE_SIZE } from '@/constants/breakpoints'

const Container = styled.div`
  display: flex;
  width: ${({ theme: { SIZES } }) => SIZES.CARD_WIDTH}px;
  padding: ${({ theme: { SPACES } }) => SPACES.M};
  margin-top: ${({ theme: { SPACES } }) => SPACES.M};
  background-color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.CARD_COLOR};
  border: ${({ theme: { SIZES } }) => SIZES.TOGGLE_BORDER_SIZE}px solid
    ${({ theme: { COLOR_THEME } }) => COLOR_THEME.CARD_BORDER_COLOR};
  border-radius: 8px;
  cursor: pointer;
  @media (max-width: ${RESPONSIVE_SIZE}px) {
    width: 90vw;
    padding: ${({ theme: { SPACES } }) => SPACES.S};
  }
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: ${({ theme: { SPACES } }) => SPACES.M};
`

const Title = styled.h3`
  font-family: ${({ theme: { FONTS } }) => FONTS.MAIN_LIGHT};
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.L};
  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
  @media (max-width: ${RESPONSIVE_SIZE}px) {
    font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.M};
  }
`

const Value = styled.p`
  font-family: ${({ theme: { FONTS } }) => FONTS.MAIN_LIGHT};
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.L};
  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.LIGHTER_TEXT_COLOR};
  @media (max-width: ${RESPONSIVE_SIZE}px) {
    font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.M};
  }
`

export { Container, Info, Title, Value }
