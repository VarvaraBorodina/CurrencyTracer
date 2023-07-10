import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  width: ${({ theme: { SIZES } }) => SIZES.FOOTER_WIDTH}px;
  background-color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.MAIN_COLOR};
  @media (max-width: 1024px) {
    width: 90vw;
    flex-direction: column;
  }
`

const TitleContainer = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    justify-content: center;
    width: 90vw;
  }
`

const Title = styled.h1`
  margin-top: ${({ theme: { SPACES } }) => SPACES.S / 2}px;
  margin-left: ${({ theme: { SPACES } }) => SPACES.XS}px;
  font-family: PoppinsSemiBold;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.M}px;
  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.L};
  line-height: ${({ theme: { LINE_HEIGHT } }) => LINE_HEIGHT.M}px;
  background-image: linear-gradient(
    90.18deg,
    ${({ theme: { COLORS } }) => COLORS.TITLE_LEFT} 0.18%,
    ${({ theme: { COLORS } }) => COLORS.TITLE_CENTER} 49.3%,
    ${({ theme: { COLORS } }) => COLORS.TITLE_RIGHT} 99.88%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 1024px) {
    font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
    margin-left: ${({ theme: { SPACES } }) => SPACES.XS}px;
    margin-bottom: ${({ theme: { SPACES } }) => SPACES.S}px;
  }
`
const Info = styled.div``

const Description = styled.p`
  width: ${({ theme: { SIZES } }) => SIZES.FOOTER_DECRIPTION_WIDTH}px;
  margin-top: ${({ theme: { SPACES } }) => SPACES.S * 3}px;
  font-family: PoppinsLight;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.M}px;
  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.NAVIGATION_COLOR};
  @media (max-width: 1024px) {
    display: none;
  }
`

const MenuOption = styled.div`
  margin-left: ${({ theme: { SPACES } }) => SPACES.S * 10}px;
  @media (max-width: 1024px) {
    margin-left: ${({ theme: { SPACES } }) => SPACES.M}px;
  }
`

const OptionTitle = styled.h6`
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.S * 3}px;
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.NAVIGATION_COLOR};
  font-family: InterRegular;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.L}px;
  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.M};
  line-height: ${({ theme: { LINE_HEIGHT } }) => LINE_HEIGHT.L}px;
  @media (max-width: 1024px) {
    margin-bottom: ${({ theme: { SPACES } }) => SPACES.S}px;
    font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  }
`

const SubOption = styled.p`
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.S * 3}px;
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.LIGHTER_TEXT_COLOR};
  font-family: InterRegular;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.M}px;
  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.M};
  line-height: ${({ theme: { LINE_HEIGHT } }) => LINE_HEIGHT.S}px;
  @media (max-width: 1024px) {
    display: none;
  }
`

const Menu = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`
const Policy = styled.p`
  margin-top: ${({ theme: { SPACES } }) => SPACES.S * 5}px;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.S * 3}px;
  text-align: center;
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.LIGHTER_TEXT_COLOR};
  font-family: InterRegular;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.M}px;
  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.M};
  line-height: ${({ theme: { LINE_HEIGHT } }) => LINE_HEIGHT.S}px;
  @media (max-width: 1024px) {
    font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S}px;
  }
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    width: 90vw;
  }
`

export {
  Container,
  Content,
  Description,
  Info,
  Menu,
  MenuOption,
  OptionTitle,
  Policy,
  SubOption,
  Title,
  TitleContainer,
}
