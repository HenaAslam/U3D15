import { configureStore,combineReducers } from '@reduxjs/toolkit'
import selectReducer from '../reducer/selectReducer'

import songReducer from '../reducer/songReducer'
import favReducer from '../reducer/favReducer'
 

const store = configureStore({
  reducer:combineReducers({
  songDetails:songReducer,
  select:selectReducer,
  fav:favReducer
  
})
})

export default store