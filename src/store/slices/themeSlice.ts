import { createSlice } from '@reduxjs/toolkit'

import { Theme } from '@/components/GlobalThemeProvider/types'

type StateType = {
  theme: Theme
}
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
