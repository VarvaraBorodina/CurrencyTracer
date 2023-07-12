import { createSlice } from '@reduxjs/toolkit'

const initialState = 0

const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    setUpdateTime(state, action) {
      return action.payload
    },
  },
})

export default timeSlice.reducer
export const { setUpdateTime } = timeSlice.actions
