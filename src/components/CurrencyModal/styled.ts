import styled from 'styled-components'

import { RESPONSIVE_SIZE } from '@/constants/breakpoints'

const Text = styled.h3`
  margin: ${({ theme: { SPACES } }) => SPACES.S};
  font-family: ${({ theme: { FONTS } }) => FONTS.MAIN_LIGHT};
  color: red;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.L};
  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
  @media (max-width: ${RESPONSIVE_SIZE}px) {
    font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S};
  }
`

const OptionContainer = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  @media (max-width: ${RESPONSIVE_SIZE}px) {
    grid-template-columns: 1fr 1fr;
  }
`

const Option = styled.ul<{ $selected: boolean }>`
  margin: ${({ theme: { SPACES } }) => SPACES.S};
  padding: ${({ theme: { SPACES } }) => SPACES.S};
  font-family: ${({ theme: { FONTS } }) => FONTS.MAIN_LIGHT};
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.L};
  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
  background-color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.CARD_COLOR};
  border-radius: 8px;
  border: ${(props) =>
      props.$selected
        ? ({ theme: { SIZES } }) => SIZES.TOGGLE_BORDER_SIZE * 3
        : 0}px
    solid ${({ theme: { COLOR_THEME } }) => COLOR_THEME.CARD_BORDER_COLOR};
  cursor: pointer;
  @media (max-width: ${RESPONSIVE_SIZE}px) {
    font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.XS};
  }
`

export { Option, OptionContainer, Text }
