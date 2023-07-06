import { createSlice } from '@reduxjs/toolkit'

const initialState = new Date().getTime()

const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    setUpdateTime() {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-param-reassign
      return new Date().getTime()
    },
  },
})

export default timeSlice.reducer
export const { setUpdateTime } = timeSlice.actions
