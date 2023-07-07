import { styled } from 'styled-components'

const Dropdowns = styled.div`
  display: flex;
  justify-content: space-between;
`

const ChosenOptions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.M};
`

export { ChosenOptions, Dropdowns }
