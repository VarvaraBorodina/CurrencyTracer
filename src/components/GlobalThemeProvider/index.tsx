import { ThemeProvider } from 'styled-components'

import { COLOR_THEMES, STYLES_THEME, Theme } from '@/constants/themes'
import useTypedSelector from '@/hooks/useTypedSelector'

const GlobalThemProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const theme: Theme = useTypedSelector((state) => {
    return state.theme.theme
  })

  return (
    <ThemeProvider theme={{ ...STYLES_THEME, ...COLOR_THEMES[theme] }}>
      {children}
    </ThemeProvider>
  )
}

export default GlobalThemProvider
