import { styled } from 'styled-components'

import { RESPONSIVE_SIZE } from '@/constants/breakpoints'

const Container = styled.div`
  position: relative;
  width: ${({ theme: { SIZES } }) => SIZES.FOOTER_WIDTH}px;
  margin: 0 auto;
  @media (max-width: ${RESPONSIVE_SIZE}px) {
    width: 95vw;
  }
`

const SearchLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${({ theme: { SIZES } }) => SIZES.SEARCH_WIDTH}px;
  height: ${({ theme: { SIZES } }) => SIZES.SEARCH_HEIGHT}px;
  margin: 0 auto;
  padding: ${({ theme: { SPACES } }) => SPACES.M};
  background-color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.SEARCH_COLOR};
  border-radius: 8px;
  @media (max-width: ${RESPONSIVE_SIZE}px) {
    width: 90vw;
  }
`

const Input = styled.input`
  width: ${({ theme: { SIZES } }) => SIZES.SEARCH_WIDTH * 0.7}px;
  background-color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.SEARCH_COLOR};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.LIGHTER_TEXT_COLOR};
  border: none;
  font-family: ${({ theme: { FONTS } }) => FONTS.MAIN_LIGHT};
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S};
  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.S};
  &:focus {
    outline: none;
  }
  @media (max-width: ${RESPONSIVE_SIZE}px) {
    width: 60vw;
    font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S * 0.75};
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
  top: ${({ theme: { SIZES } }) => SIZES.SEARCH_HEIGHT + 1}px;
  left: ${({ theme: { SIZES } }) =>
    SIZES.FOOTER_WIDTH / 2 - SIZES.SEARCH_WIDTH / 2}px;
  width: ${({ theme: { SIZES } }) => SIZES.SEARCH_WIDTH}px;
  margin: 0 auto;
  margin-top: ${({ theme: { SPACES } }) => SPACES.S};
  max-height: ${({ theme: { SIZES } }) => SIZES.CARD_WIDTH / 2}px;
  padding: ${({ theme: { SPACES } }) => SPACES.M};
  z-index: 3;

  background-color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.SEARCH_COLOR};
  border-radius: 8px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    opacity: 0;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme: { COLOR_THEME } }) =>
      COLOR_THEME.LIGHTER_TEXT_COLOR};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme: { COLOR_THEME } }) =>
      COLOR_THEME.LIGHTER_TEXT_COLOR};
  }
  @media (max-width: ${RESPONSIVE_SIZE}px) {
    left: 2vw;
    width: 90vw;
  }
`

const Title = styled.div`
  font-family: ${({ theme: { FONTS } }) => FONTS.MAIN_LIGHT};
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.L};
  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
`
const SearchButton = styled.button`
  background-color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.SEARCH_COLOR};
  border: none;
  cursor: pointer;
`

export {
  Container,
  Input,
  Option,
  OptionContainer,
  SearchButton,
  SearchLine,
  Title,
}
