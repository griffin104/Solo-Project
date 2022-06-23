import actionTypes from '../utils/actionTypes.js'

export const toggleChampActionCreator = (champ) => ({
  type: actionTypes.TOGGLE_CHAMP,
  payload: champ
})

export const deleteTeamActionCreator = (teamName) => ({
  type: actionTypes.DELETE_TEAM,
  payload: teamName
})

export const addTeamActionCreator = (team) => ({
  type: actionTypes.ADD_TEAM,
  payload: team
})

export const loadTeamActionCreator = (team) => ({
  type: actionTypes.LOAD_TEAM,
  payload: team
})

export const updateCurrentTeamActionCreator = (teamName) => ({
  type: actionTypes.UPDATE_CURRENT_TEAM,
  payload: teamName
})