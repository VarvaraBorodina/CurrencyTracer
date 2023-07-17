import { styled } from 'styled-components'

const Route = styled.button<{ $isCurrent: boolean }>`
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.NAVIGATION_COLOR};
  background-color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};
  font-family: ${({ theme: { FONTS } }) => FONTS.MAIN_LIGHT};
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.S}px;
  cursor: pointer;
  text-decoration: ${({ $isCurrent }) => ($isCurrent ? 'underline' : 'none')};
  border: none;
  display: none;
  @media (max-width: 1024px) {
    display: block;
    margin-left: ${({ theme: { SPACES } }) => SPACES.M}px;
    margin-right: ${({ theme: { SPACES } }) => SPACES.M}px;
  }
`
export { Route }
