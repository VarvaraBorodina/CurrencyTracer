import styled from 'styled-components'

const Text = styled.h3`
  margin: ${({ theme: { SPACES } }) => SPACES.S};
  font-family: PoppinsLight;
  color: red;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.L};
  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
`

const OptionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
`

const Option = styled.div<{ $selected: boolean }>`
  margin: ${({ theme: { SPACES } }) => SPACES.S};
  padding: ${({ theme: { SPACES } }) => SPACES.S};
  font-family: PoppinsLight;
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
`

export { Option, OptionContainer, Text }
