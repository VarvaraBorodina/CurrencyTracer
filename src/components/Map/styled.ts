import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: ${({ theme: { SPACES } }) => SPACES.L}px;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.L}px;
`

export const MapBlock = styled.div`
  height: ${({ theme: { SIZES } }) => SIZES.MAP_HEIGHT}px;
  width: ${({ theme: { SIZES } }) => SIZES.FOOTER_WIDTH}px;
  z-index: 1;
`
