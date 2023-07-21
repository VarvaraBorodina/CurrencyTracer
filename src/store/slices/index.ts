import { combineReducers } from 'redux'

import quotesReducer from './quotesSlice'
import themeReducer from './themeSlice'
import timeReducer from './timeSlice'

const rootReducer = combineReducers({
  theme: themeReducer,
  time: timeReducer,
  quotes: quotesReducer,
})

export default rootReducer
