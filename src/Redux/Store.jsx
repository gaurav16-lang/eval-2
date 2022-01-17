import { combineReducers, createStore } from 'redux'
import { AuthReducer } from './Auth/reducer'
import { ShowReducer } from './Show/reducer'

const rootReducer = combineReducers({
  auth: AuthReducer,
  shows: ShowReducer,
})

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
