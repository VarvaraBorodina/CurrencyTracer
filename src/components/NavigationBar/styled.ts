import styled from 'styled-components'

import THEME from '@/constants/themes'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${THEME.NAVIGATION_HEIGHT}px;
  background-color: ${THEME.MAIN_COLOR};
`

const Navigator = styled.div`
  display: flex;
  justify-content: space-between;
  width: 657;
  margin-left: 186;
  margin-right: 186;
`

const Route = styled.p`
  color: ${THEME.NAVIGATION_COLOR};
  font-family: PoppinsLight, sans-serif;
  font-size: 20px;
  font-weight: 300;
  line-height: 41px;
  cursor: pointer;
`

export { Container, Navigator, Route }
