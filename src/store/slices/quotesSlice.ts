import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'

import { parseCurrency } from '@/utils/currencyParser'

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

export const quotesSelector = createSelector(
  [(state) => state.quotes],
  (quotes) => parseCurrency(quotes)
)

export default quotesSlice.reducer
export const { setQuotes } = quotesSlice.actions
