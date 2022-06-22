import actionTypes from '../utils/actionTypes.js'
import champs from '../utils/champs.js'


const initialState = {
  champs
}


export default function champsReducer(state = initialState, action) {
  let newState
  switch (action.type) {
  case actionTypes.TOGGLE_CHAMP: {
    newState = JSON.parse(JSON.stringify(state))
    newState['champs'][action.payload.id].selected = !newState['champs'][action.payload.id].selected
    return newState
  }

  default: {
    return state
  }
  }
}