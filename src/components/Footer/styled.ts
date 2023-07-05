import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  width: ${(props): number => props.theme.FOOTER_WIDTH}px;
  aligt-item: center;
  background-color: ${(props): string => props.theme.MAIN_COLOR};
`

const TitleContainer = styled.div`
  display: flex;
`

const Title = styled.h1`
  margin-top: ${(props): number => props.theme.FOOTER_MARGIN / 2}px;
  font-family: PoppinsSemiBold;
  font-size: ${(props): number => props.theme.FOOTER_TITLE_FONT_SIZE}px;
  font-weight: ${(props): number => props.theme.FONT_WEIGHT_SEMI_BOLD};
  line-height: ${(props): number => props.theme.FOOTER_TITLE_LINE_HEIGHT}px;
  background-image: linear-gradient(
    90.18deg,
    ${(props): string => props.theme.TITLE_LEFT_COLOR} 0.18%,
    ${(props): string => props.theme.TITLE_CENTER_COLOR} 49.3%,
    ${(props): string => props.theme.TITLE_RIGHT_COLOR} 99.88%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const Info = styled.div``

const Description = styled.p`
  width: ${(props): number => props.theme.FOOTER_DECRIPTION_WIDTH}px;
  margin-top: ${(props): number => props.theme.FOOTER_MARGIN * 3}px;
  font-family: PoppinsLight;
  font-size: ${(props): number => props.theme.FOOTER_DECRIPTION_FONT_SIZE}px;
  font-weight: ${(props): number => props.theme.FONT_WEIGHT_LIGHT};
  line-height: ${(props): number =>
    props.theme.FOOTER_DESCRIPTION_LINE_HEIGHT}px;
  color: ${(props): string => props.theme.NAVIGATION_COLOR};
`

const MenuOption = styled.div`
  margin-left: ${(props): number => props.theme.FOOTER_MARGIN * 10}px;
`

const OptionTitle = styled.h6`
  margin-bottom: ${(props): number => props.theme.FOOTER_MARGIN * 3}px;
  color: ${(props): string => props.theme.NAVIGATION_COLOR};
  font-family: InterRegular;
  font-size: ${(props): number => props.theme.FOOTER_OPTION_FONT_SIZE}px;
  font-weight: ${(props): number => props.theme.FONT_WEIGHT_REGULAR};
  line-height: ${(props): number => props.theme.FOOTER_OPTION_LINE_HEIGHT}px;
`

const SubOption = styled.p`
  margin-bottom: ${(props): number => props.theme.FOOTER_MARGIN * 3}px;
  color: ${(props): string => props.theme.LIGHTER_TEXT_COLOR};
  font-family: InterRegular;
  font-size: ${(props): number => props.theme.FOOTER_TEXT_FONT_SIZE}px;
  font-weight: ${(props): number => props.theme.FONT_WEIGHT_REGULAR};
  line-height: ${(props): number => props.theme.FOOTER_OPTION_LINE_HEIGHT}px;
`

const Menu = styled.div`
  display: flex;
`
const Policy = styled.p`
  margin-top: ${(props): number => props.theme.FOOTER_MARGIN * 5}px;
  margin-bottom: ${(props): number => props.theme.FOOTER_MARGIN * 3}px;
  text-align: center;
  color: ${(props): string => props.theme.LIGHTER_TEXT_COLOR};
  font-family: InterRegular;
  font-size: ${(props): number => props.theme.FOOTER_TEXT_FONT_SIZE}px;
  font-weight: ${(props): number => props.theme.FONT_WEIGHT_REGULAR};
  line-height: ${(props): number => props.theme.FOOTER_OPTION_LINE_HEIGHT}px;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
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
