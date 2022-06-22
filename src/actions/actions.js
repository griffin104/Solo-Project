import actionTypes from '../utils/actionTypes.js'

export const toggleChampActionCreator = (champ) => ({
  type: actionTypes.TOGGLE_CHAMP,
  payload: champ
})