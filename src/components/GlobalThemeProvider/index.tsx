import { ThemeProvider } from 'styled-components'

import {
  COLOR_THEMES,
  COLORS,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  SIZES,
  SPACES,
  Theme,
} from '@/constants/themes'
import useTypedSelector from '@/hooks/useTypedSelector'

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
  }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default GlobalThemProvider
