import styled from 'styled-components'

import { RESPONSIVE_SIZE } from '@/constants/breakpoints'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100;
  width: ${({ theme: { SIZES } }) => SIZES.FOOTER_WIDTH}px;
  padding: ${({ theme: { SPACES } }) => SPACES.M}px;
  margin-top: ${({ theme: { SPACES } }) => SPACES.L}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.MAIN_LIGHT};
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.L};
  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.S};
  border-radius: 12px;
  @media (max-width: ${RESPONSIVE_SIZE}px) {
    width: 100vw;
    margin: 0 auto;
    margin-top: ${({ theme: { SPACES } }) => SPACES.M}px;
  }
`

const Title = styled.h3`
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.M}px;
  font-family: ${({ theme: { FONTS } }) => FONTS.MAIN_LIGHT};
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.L};
  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.NAVIGATION_COLOR};
  @media (max-width: ${RESPONSIVE_SIZE}px) {
    margin: 0 auto;
    margin-top: ${({ theme: { SPACES } }) => SPACES.M}px;
    margin-bottom: ${({ theme: { SPACES } }) => SPACES.M}px;
    text-align: center;
    font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S};
  }
`
const Label = styled.label`
  margin-right: ${({ theme: { SPACES } }) => SPACES.S}px;
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

const Input = styled.input`
  width: ${({ theme: { SIZES } }) => SIZES.CARD_WIDTH * 0.5}px;
  padding: ${({ theme: { SPACES } }) => SPACES.M * 0.5};
  margin: ${({ theme: { SPACES } }) => SPACES.M * 0.5};
  background-color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};
  border: ${({ theme: { SIZES } }) => SIZES.TOGGLE_BORDER_SIZE}px solid
    ${({ theme: { COLOR_THEME } }) => COLOR_THEME.CARD_BORDER_COLOR};
  border-radius: 8px;
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.NAVIGATION_COLOR};
  @media (max-width: ${RESPONSIVE_SIZE}spx) {
    width: 60vw;
  }
`

const Button = styled.button`
  display: inline-block;
  padding: ${({ theme: { SPACES } }) => SPACES.S};
  margin-left: ${({ theme: { SPACES } }) => SPACES.S};
  background-color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.NAVIGATION_COLOR};
  border: ${({ theme: { SIZES } }) => SIZES.TOGGLE_BORDER_SIZE}px solid
    ${({ theme: { COLOR_THEME } }) => COLOR_THEME.CARD_BORDER_COLOR};
  border-radius: 8px;
  font-family: ${({ theme: { FONTS } }) => FONTS.MAIN_LIGHT};
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.M};
  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.S};
  cursor: pointer;
  @media (max-width: ${RESPONSIVE_SIZE}px) {
    margin-top: ${({ theme: { SPACES } }) => SPACES.S};
    margin-left: 0;
    width: 60vw;
    max-width: ${({ theme: { SIZES } }) => SIZES.CARD_WIDTH * 0.5}px;
    font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.XS};
  }
`

export { Button, Container, Input, Label, Title }
