import { createSlice } from '@reduxjs/toolkit'

import { StateType } from './types'

const initialState: StateType = { theme: 'DARK' }

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'LIGHT' ? 'DARK' : 'LIGHT'
    },
  },
})

export default themeSlice.reducer
export const { toggleTheme } = themeSlice.actions
