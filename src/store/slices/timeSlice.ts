import { createSlice } from '@reduxjs/toolkit'

const initialState = new Date().getTime()

const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    setUpdateTime() {
      return new Date().getTime()
    },
  },
})

export default timeSlice.reducer
export const { setUpdateTime } = timeSlice.actions
