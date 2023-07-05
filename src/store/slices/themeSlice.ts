import { createSlice } from '@reduxjs/toolkit'

const initialState = { theme: 'DARK' }

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      // eslint-disable-next-line no-param-reassign
      state.theme = state.theme === 'LIGHT' ? 'DARK' : 'LIGHT'
    },
  },
})

export default themeSlice.reducer
export const { toggleTheme } = themeSlice.actions
