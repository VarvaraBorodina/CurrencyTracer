import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props): number => props.theme.NAVIGATION_HEIGHT}px;
`

const Navigator = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${(props): number => props.theme.NAVIGATOR_WIDTH}px;
  margin-left: ${(props): number => props.theme.NAVIGATOR_MARGIN}px;
  margin-right: ${(props): number => props.theme.NAVIGATOR_MARGIN}px;
`

const Route = styled(Link)`
  color: ${(props): string => props.theme.NAVIGATION_COLOR};
  font-family: PoppinsLight;
  font-size: ${(props): number => props.theme.NAVIGATOR_FONT_SIZE}px;
  font-weight: ${(props): number => props.theme.FONT_WEIGHT_LIGHT}px;
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    color: ${(props): string => props.theme.LOGO_TOP_COLOR};
  }
`

export { Container, Navigator, Route }
