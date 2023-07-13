import { Theme } from '@/constants/themes'
import useTypedDispatch from '@/hooks/useTypedDispatch'
import useTypedSelector from '@/hooks/useTypedSelector'
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
