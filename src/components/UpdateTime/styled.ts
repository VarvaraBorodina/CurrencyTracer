import styled, { keyframes } from 'styled-components'

import { COLORS as COMMON_COLORS } from '@/constants/themes'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme: { SPACES } }) => SPACES.L};
  margin-bottom: ${({ theme: { SPACES } }) => SPACES.L};
  @media (max-width: 1024px) {
    width: 90wv;
  }
`

const Text = styled.h3`
  margin-left: ${({ theme: { SPACES } }) => SPACES.M};
  font-family: PoppinsLight;
  font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.L};
  font-weight: ${({ theme: { FONT_WEIGHT } }) => FONT_WEIGHT.S};
  color: ${({ theme: { COLOR_THEME } }) => COLOR_THEME.NAVIGATION_COLOR};
  @media (max-width: 1024px) {
    font-size: ${({ theme: { FONT_SIZE } }) => FONT_SIZE.S};
  }
`

const rotate = keyframes`
  0% {
    box-shadow:0 0 0 0px ${COMMON_COLORS.DOT}00;
  }
  50% {
    box-shadow:0 0 0 10px ${COMMON_COLORS.DOT}80;
  }
  100% {
    box-shadow:0 0 0 0px ${COMMON_COLORS.DOT}00;
  }
`

const Dot = styled.div`
  width: ${({ theme: { SIZES } }) => SIZES.TOGGLE_HEIGHT / 2};
  height: ${({ theme: { SIZES } }) => SIZES.TOGGLE_HEIGHT / 2};
  border-radius: 50%;
  color: ${({ theme: { COLORS } }) => COLORS.DOT};
  background-color: ${({ theme: { COLORS } }) => COLORS.DOT};
  animation: ${rotate} 2s linear infinite;
`

export { Container, Dot, Text }
