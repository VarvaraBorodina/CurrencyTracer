import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  height: ${(props): number => props.theme.HEADER_HEIGHT}px;
  align-items: center;
  margin-left: ${(props): number => props.theme.HEADER_MARGIN}px;
  margin-right: ${(props): number => props.theme.HEADER_MARGIN}px;
  background: linear-gradient(
    252deg,
    ${(props): string => props.theme.GRADIENT_MAIN_COLOR} 0%,
    ${(props): string => props.theme.GRADIENT_CENTER_COLOR} 50%,
    ${(props): string => props.theme.GRADIENT_MAIN_COLOR} 100%
  );
`

const TitleContainer = styled.div`
  width: ${(props): number => props.theme.HEADER_TITLE_WIDTH}px;
  margin-right: ${(props): number => props.theme.HEADER_TITLE_MARGIN_RIGHT}px;
  margin-left: ${(props): number => props.theme.HEADER_TITLE_MARGIN_LEFT}px;
`

const Title = styled.h1`
  font-family: 'PoppinsSemiBold';
  font-size: ${(props): number => props.theme.HEADER_TITLE_FONT_SIZE}px;
  font-weight: ${(props): number => props.theme.FONT_WEIGHT_SEMI_BOLD};
  line-height: ${(props): number => props.theme.HEADER_TITLE_LINE_HEIGHT}px;
  text-align: right;
  background-image: linear-gradient(
    90.18deg,
    ${(props): string => props.theme.TITLE_LEFT_COLOR} 0.18%,
    ${(props): string => props.theme.TITLE_CENTER_COLOR} 49.3%,
    ${(props): string => props.theme.TITLE_RIGHT_COLOR} 99.88%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const SubTitle = styled.p`
  width: ${(props): number => props.theme.HEADER_SUBTITLE_WIDTH}px;
  margin-left: ${(props): number => props.theme.HEADER_SUBTITLE_WIDTH}px;
  color: ${(props): string => props.theme.TEXT_COLOR};
  font-family: PoppinsLight;
  font-size: ${(props): number => props.theme.HEADER_SUBTITLE_FONT_SIZE}px;
  font-weight: ${(props): number => props.theme.FONT_WEIGHT_LIGHT};
  line-height: ${(props): number => props.theme.HEADER_SUBTITLE_LINE_HEIGHT}px;
  text-align: center;
`

export { Container, SubTitle, Title, TitleContainer }
