import styled from 'styled-components'

const Container = styled.section`
  width: ${({ theme: { SIZES } }) => SIZES.FOOTER_WIDTH}px;
  margin: 0 auto;
`

const Line = styled.div`
  width: ${({ theme: { SIZES } }) => SIZES.CARD_WIDTH}px;
  height: 2px;
  margin-top: ${({ theme: { SPACES } }) => SPACES.S};
  background-color: ${({ theme: { COLOR_THEME } }) =>
    COLOR_THEME.CARD_BORDER_COLOR};
`
const Title = styled.h3`
  font-family: PoppinsLight;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.L};
  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.NAVIGATION_COLOR};
`

const CurrencyContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.L};
`

export { Container, CurrencyContainer, Line, Title }
