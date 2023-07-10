import { styled } from 'styled-components'

const Dropdowns = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1024px) {
    width: 100vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const ChosenOptions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.M};
  @media (max-width: 1024px) {
    width: 100vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export { ChosenOptions, Dropdowns }
