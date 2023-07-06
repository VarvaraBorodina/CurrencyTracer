import { createSlice } from '@reduxjs/toolkit'

const initialState = null

const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    setQuotes(state, action) {
      return action.payload
    },
  },
})

export default quotesSlice.reducer
export const { setQuotes } = quotesSlice.actions
