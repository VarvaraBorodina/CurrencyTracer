import styled from 'styled-components'

const Container = styled.div`
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
`

const TitleContainer = styled.div`
  width: ${({ theme: { SIZES } }) => SIZES.HEADER_TITLE_WIDTH}px;
  margin-right: ${({ theme: { SPACES } }) => SPACES.L}px;
  margin-left: ${({ theme: { SPACES } }) => SPACES.L}px;
`

const Title = styled.h1`
  font-family: 'PoppinsSemiBold';
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.XL}px;
  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.L};
  line-height: ${({ theme: { LINE_HEIGHT } }) => LINE_HEIGHT.XL}px;
  text-align: right;
  background-image: linear-gradient(
    90.18deg,
    ${({ theme: { COLORS } }) => COLORS.TITLE_LEFT} 0.18%,
    ${({ theme: { COLORS } }) => COLORS.TITLE_CENTER} 49.3%,
    ${({ theme: { COLORS } }) => COLORS.TITLE_RIGHT} 99.88%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const SubTitle = styled.p`
  width: ${({ theme: { SIZES } }) => SIZES.HEADER_SUBTITLE_WIDTH}px;
  margin-left: ${({ theme: { SIZES } }) => SIZES.HEADER_SUBTITLE_WIDTH}px;
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.TEXT_COLOR};
  font-family: PoppinsLight;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.M}px;
  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.S};
  text-align: center;
`

export { Container, SubTitle, Title, TitleContainer }
