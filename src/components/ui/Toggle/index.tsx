import { Theme } from '@/components/GlobalThemeProvider/types'
import { useTypedDispatch, useTypedSelector } from '@/hooks'
import { toggleTheme } from '@/store/slices/themeSlice'

import { Ellipse, Round } from './styled'

const Toggle = () => {
  const dispatch = useTypedDispatch()
  const theme: Theme = useTypedSelector((state) => {
    return state.theme.theme
  })
  return (
    <Ellipse
      onClick={() => dispatch(toggleTheme())}
      $isLeft={theme === 'LIGHT'}
      data-testid="toggle"
    >
      <Round data-cy="toggle">0</Round>
    </Ellipse>
  )
}

export default Toggle
