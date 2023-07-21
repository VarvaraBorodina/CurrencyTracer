import { BrowserRouter } from 'react-router-dom'
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

import { MockWrapperType } from './types'

function MockWrapper({ children }: MockWrapperType) {
  const theme = {
    COLORS,
    COLOR_THEME: COLOR_THEMES.DARK,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    SIZES,
    SPACES,
    FONTS,
    Z_INDEX,
  }
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </BrowserRouter>
  )
}

export default MockWrapper
