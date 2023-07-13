import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import {
  COLOR_THEMES,
  COLORS,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  SIZES,
  SPACES,
} from '@/constants/themes'

function MockWrapper({ children }: any) {
  const theme = {
    COLORS,
    COLOR_THEME: COLOR_THEMES.DARK,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    SIZES,
    SPACES,
  }
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </BrowserRouter>
  )
}

export default MockWrapper
