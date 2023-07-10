import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ theme: { SIZES } }) => SIZES.NAVIGATION_HEIGHT}px;
  @media (max-width: 1024px) {
    margin: 0 auto;
    width: 90wv;
    padding-left: ${({ theme: { SPACES } }) => SPACES.S}px;
    padding-right: ${({ theme: { SPACES } }) => SPACES.S}px;
  }
`

const Navigator = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${({ theme: { SIZES } }) => SIZES.NAVIGATOR_WIDTH}px;
  margin-left: ${({ theme: { SPACES } }) => SPACES.XL}px;
  margin-right: ${({ theme: { SPACES } }) => SPACES.XL}px;
  @media (max-width: 1024px) {
    width: ${({ theme: { SIZES } }) => SIZES.NAVIGATOR_WIDTH * 0.4}px;
    margin-left: ${({ theme: { SPACES } }) => SPACES.S}px;
    margin-right: ${({ theme: { SPACES } }) => SPACES.S}px;
  }
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
  @media (max-width: 1024px) {
    font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.XS}px;
  }
`

export { Container, Navigator, Route }
