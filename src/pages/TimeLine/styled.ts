import { styled } from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  width: ${({ theme: { SIZES } }) => SIZES.FOOTER_WIDTH}px;
`
const Dropdowns = styled.div`
  display: flex;
  justify-content: space-between;
`

const ChosenOptions = styled.div`
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.M};
`

export { ChosenOptions, Container, Dropdowns }
