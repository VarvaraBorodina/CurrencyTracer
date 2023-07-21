import styled from 'styled-components'

import { RESPONSIVE_SIZE } from '@/constants/breakpoints'

const Container = styled.header`
  display: flex;
  height: ${({ theme: { SIZES } }) => SIZES.HEADER_HEIGHT}px;
  align-items: center;
  margin-left: ${({ theme: { SPACES } }) => SPACES.XS};
  margin-right: ${({ theme: { SPACES } }) => SPACES.XS};
  background: linear-gradient(
    252deg,
    ${({ theme: { COLOR_THEME } }) => COLOR_THEME.GRADIENT_MAIN_COLOR} 0%,
    ${({ theme: { COLOR_THEME } }) => COLOR_THEME.GRADIENT_CENTER_COLOR} 50%,
    ${({ theme: { COLOR_THEME } }) => COLOR_THEME.GRADIENT_MAIN_COLOR} 100%
  );
  @media (max-width: ${RESPONSIVE_SIZE}px) {
    margin: 0 auto;
    width: 95hv;
  }
`

const TitleContainer = styled.div`
  width: ${({ theme: { SIZES } }) => SIZES.HEADER_TITLE_WIDTH}px;
  margin-right: ${({ theme: { SPACES } }) => SPACES.L}px;
  margin-left: ${({ theme: { SPACES } }) => SPACES.L}px;
  @media (max-width: ${RESPONSIVE_SIZE}px) {
    margin: 0 auto;
    width: 95hv;
  }
`

const Title = styled.h1`
  font-family: ${({ theme: { FONTS } }) => FONTS.MAIN_SEMI_BOLD};
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.XXL}px;
  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.L};
  line-height: ${({ theme: { LINE_HEIGHT } }) => LINE_HEIGHT.XXL}px;
  text-align: right;
  background-image: linear-gradient(
    90.18deg,
    ${({ theme: { COLORS } }) => COLORS.TITLE_LEFT} 0.18%,
    ${({ theme: { COLORS } }) => COLORS.TITLE_CENTER} 49.3%,
    ${({ theme: { COLORS } }) => COLORS.TITLE_RIGHT} 99.88%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: ${RESPONSIVE_SIZE}px) {
    font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.XL}px;
    text-align: center;
  }
`

const SubTitle = styled.p`
  width: ${({ theme: { SIZES } }) => SIZES.HEADER_SUBTITLE_WIDTH}px;
  margin-left: ${({ theme: { SIZES } }) => SIZES.HEADER_SUBTITLE_WIDTH}px;
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
  font-family: ${({ theme: { FONTS } }) => FONTS.MAIN_LIGHT};
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.M}px;
  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.S};
  text-align: center;
  @media (max-width: ${RESPONSIVE_SIZE}px) {
    margin: 0 auto;
    font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
    width: 95vw;
  }
`

const LogoContainer = styled.div`
  @media (max-width: ${RESPONSIVE_SIZE}px) {
    display: none;
  }
`

export { Container, LogoContainer, SubTitle, Title, TitleContainer }
