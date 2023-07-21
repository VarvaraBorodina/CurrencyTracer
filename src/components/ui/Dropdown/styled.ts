import { styled } from 'styled-components'

import { RESPONSIVE_SIZE } from '@/constants/breakpoints'

const Container = styled.div`
  position: relative;
`

const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: ${({ theme: { SIZES } }) => SIZES.CARD_WIDTH}px;
  height: ${({ theme: { SIZES } }) => SIZES.SEARCH_HEIGHT}px;

  border: ${({ theme: { SIZES } }) => SIZES.TOGGLE_BORDER_SIZE}px solid
    ${({ theme: { COLOR_THEME } }) => COLOR_THEME.CARD_BORDER_COLOR};
  border-radius: 8px;
  cursor: pointer;
  @media (max-width: ${RESPONSIVE_SIZE}px) {
    width: 90vw;
    max-width: ${({ theme: { SIZES } }) => SIZES.CARD_WIDTH}px;
    margin-top: ${({ theme: { SPACES } }) => SPACES.S};
  }
`

const Option = styled.ul`
  font-family: ${({ theme: { FONTS } }) => FONTS.MAIN_LIGHT};
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.L};
  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
  cursor: pointer;
  &:hover {
    color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.CARD_BORDER_COLOR};
  
`
const OptionContainer = styled.li`
  position: absolute;
  top: ${({ theme: { SIZES } }) => SIZES.NAVIGATION_HEIGHT * 0.7}px;
  left: 0;
  width: ${({ theme: { SIZES } }) => SIZES.CARD_WIDTH}px;
  max-height: ${({ theme: { SIZES } }) => SIZES.CARD_WIDTH * 1.5}px;
  padding: ${({ theme: { SPACES } }) => SPACES.S};

  background-color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};

  border: ${({ theme: { SIZES } }) => SIZES.TOGGLE_BORDER_SIZE}px solid
    ${({ theme: { COLOR_THEME } }) => COLOR_THEME.CARD_BORDER_COLOR};
  border-radius: 8px;
  overflow-y: auto;
  z-index: 1;

  @media (max-width: ${RESPONSIVE_SIZE}px) {
    width: 90vw;
    max-width: ${({ theme: { SIZES } }) => SIZES.CARD_WIDTH}px;
    margin-top: ${({ theme: { SPACES } }) => SPACES.XS};
  }
`
const Title = styled.h6`
  font-family: ${({ theme: { FONTS } }) => FONTS.MAIN_LIGHT};
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.L};
  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
  @media (max-width: ${RESPONSIVE_SIZE}px) {
    font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.M};
  }
`
export { Container, Input, Option, OptionContainer, Title }
