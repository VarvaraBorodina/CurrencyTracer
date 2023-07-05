import { Theme } from '@/constants/themes'

import { ThemeActions, ThemeActionTypes } from './types'

const changeTheme = (theme: Theme): ThemeActions => {
  return {
    type: ThemeActionTypes.CHANGE_THEME,
    payload: theme,
  }
}

export default changeTheme
