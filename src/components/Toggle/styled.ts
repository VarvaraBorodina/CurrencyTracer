import styled from 'styled-components'

import THEME from '@/constants/themes'

const Ellipse = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  height: ${THEME.TOGGLE_HEIGHT}px;
  width: ${THEME.TOGGLE_WIDHT}px;
  border-radius: 13px;
  border: ${THEME.TOGGLE_BORDER_SIZE}px solid ${THEME.NAVIGATION_COLOR};
  background-color: ${THEME.MAIN_COLOR};
`
const Round = styled.div`
  height: ${THEME.TOGGLE_HEIGHT}px;
  width: ${THEME.TOGGLE_HEIGHT}px;
  border-radius: ${THEME.TOGGLE_HEIGHT / 2}px;
  border: ${THEME.TOGGLE_BORDER_SIZE}px solid ${THEME.NAVIGATION_COLOR};
`
export { Ellipse, Round }
