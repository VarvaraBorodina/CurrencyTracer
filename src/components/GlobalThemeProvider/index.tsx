import { ThemeProvider } from 'styled-components'

import {
  COLOR_THEMES,
  COLORS,
  FONT_SIZE,
  FONT_WEIGHT,
  FONTS,
  LINE_HEIGHT,
  SIZES,
  SPACES,
  Z_INDEX,
} from '@/constants/themes'
import { useTypedSelector } from '@/hooks'

import { Theme } from './types'

const GlobalThemProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const colorTheme: Theme = useTypedSelector((state) => {
    return state.theme.theme
  })

  const theme = {
    COLORS,
    COLOR_THEME: COLOR_THEMES[colorTheme],
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    SIZES,
    SPACES,
    FONTS,
    Z_INDEX,
  }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default GlobalThemProvider
