import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  alight-items: center;
  position: fixed;
  left: 0;
  top: 0;
`

const Content = styled.div`
  height: 100;
  width: ${({ theme: { SIZES } }) => SIZES.FOOTER_WIDTH}px;
  padding: ${({ theme: { SPACES } }) => SPACES.M}px;
  margin-top: ${({ theme: { SPACES } }) => SPACES.M}px;
  font-family: 'PoppinsSemiBold';
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.XL}px;
  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.L};
  border-radius: 12px;
  background: linear-gradient(
    90.18deg,
    ${({ theme: { COLORS } }) => COLORS.TITLE_LEFT} 0.18%,
    ${({ theme: { COLORS } }) => COLORS.TITLE_CENTER} 49.3%,
    ${({ theme: { COLORS } }) => COLORS.TITLE_RIGHT} 99.88%
  );
  color: #fff;
  text-align: center;
  cursor: auto;
  @media (max-width: 1024px) {
    width: 95vw;
  }
`

export { Container, Content }
