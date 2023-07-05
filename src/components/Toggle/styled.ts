import styled from 'styled-components'

const Ellipse = styled.div<{ $isLeft: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${(props): string => (props.$isLeft ? 'left' : 'right')};
  height: ${(props): number => props.theme.TOGGLE_HEIGHT}px;
  width: ${(props): number => props.theme.TOGGLE_WIDHT}px;
  border-radius: ${(props): number => props.theme.TOGGLE_HEIGHT / 2}px;
  border: ${(props): number => props.theme.TOGGLE_BORDER_SIZE}px solid
    ${(props): string => props.theme.NAVIGATION_COLOR};
  background-color: ${(props): string => props.theme.MAIN_COLOR};
  color: ${(props): string => props.theme.MAIN_COLOR};
  transition: 0.3s ease-out;
`
const Round = styled.div`
  height: ${(props): number => props.theme.TOGGLE_HEIGHT}px;
  width: ${(props): number => props.theme.TOGGLE_HEIGHT}px;
  border-radius: ${(props): number => props.theme.TOGGLE_HEIGHT / 2}px;
  border: ${(props): number => props.theme.TOGGLE_BORDER_SIZE}px solid
    ${(props): string => props.theme.NAVIGATION_COLOR};
  cursor: pointer;
`
export { Ellipse, Round }
