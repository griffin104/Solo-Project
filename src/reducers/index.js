import { combineReducers } from 'redux'

import champsReducer from './champsReducer.js'

export default combineReducers({
  champs: champsReducer
})