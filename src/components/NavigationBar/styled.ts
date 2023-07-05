import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ theme: { SIZES } }) => SIZES.NAVIGATION_HEIGHT}px;
`

const Navigator = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${({ theme: { SIZES } }) => SIZES.NAVIGATOR_WIDTH}px;
  margin-left: ${({ theme: { SPACES } }) => SPACES.XL}px;
  margin-right: ${({ theme: { SPACES } }) => SPACES.XL}px;
`

const Route = styled(Link)`
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.NAVIGATION_COLOR};
  font-family: PoppinsLight;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.S}px;
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    color: ${({ theme: { COLORS } }) => COLORS.LOGO_TOP};
  }
`

export { Container, Navigator, Route }
