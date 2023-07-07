import { styled } from 'styled-components'

const Container = styled.div`
  position: relative;
`

const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: ${({ theme: { SIZES } }) => SIZES.CARD_WIDTH}px;
  height: ${({ theme: { SIZES } }) => SIZES.NAVIGATION_HEIGHT * 0.6}px;

  border: ${({ theme: { SIZES } }) => SIZES.TOGGLE_BORDER_SIZE}px solid
    ${({ theme: { COLOR_THEME } }) => COLOR_THEME.CARD_BORDER_COLOR};
  border-radius: 8px;
  cursor: pointer;
`

const Option = styled.option`
  font-family: PoppinsLight;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.L};
  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
  cursor: pointer;
  &:hover {
    color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.CARD_BORDER_COLOR};
  
`
const OptionContainer = styled.div`
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
`
const Title = styled.div`
  font-family: PoppinsLight;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.L};
  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
`
export { Container, Input, Option, OptionContainer, Title }
