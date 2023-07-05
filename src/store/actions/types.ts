import { Theme } from '@/constants/themes'

export enum ThemeActionTypes {
  CHANGE_THEME = 'CHANGE_THEME',
}

export interface ChangeThemeAction {
  type: ThemeActionTypes.CHANGE_THEME
  payload: Theme | undefined
}

export type ThemeActions = ChangeThemeAction
