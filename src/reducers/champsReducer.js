import actionTypes from '../utils/actionTypes.js'
import champs from '../utils/champs.js'

const initialState = {
  champs,
  savedTeams: await getSavedTeams()
}

async function getSavedTeams() {
  const savedTeams = await fetch('/api/teams')
  return await savedTeams.json()
}

export default function champsReducer(state = initialState, action) {
  console.log('in reducer '+action.type)
  let newState
  switch (action.type) {

  case actionTypes.TOGGLE_CHAMP: {
    newState = JSON.parse(JSON.stringify(state))
    newState['champs'][action.payload.id].selected = !newState['champs'][action.payload.id].selected
    return newState
  }

  case actionTypes.ADD_TEAM: {
    newState = JSON.parse(JSON.stringify(state))
    for (let i = 0; i < newState.savedTeams.length; i++) {
      if (newState.savedTeams[i].name === action.payload.name) {
        newState.savedTeams[i].team = action.payload.team
        return newState
      }
    }
    newState.savedTeams.push(action.payload)
    return newState
  }

  case actionTypes.LOAD_TEAM: {
    newState = JSON.parse(JSON.stringify(state))
    for (let i = 0; i < newState.champs.length; i++) {
      newState.champs[i].selected = false
    }
    for (let i = 0; i < action.payload.length; i++) {
      newState.champs[action.payload[i].id].selected = true
    }
    return newState
  }
  
  case actionTypes.DELETE_TEAM: {
    console.log('in correct action '+action.payload)
    newState = JSON.parse(JSON.stringify(state))
    for (let i = 0; i < newState.savedTeams.length; i++) {
      if (newState.savedTeams[i].name === action.payload) {
        console.log('found team to delete')
        newState.savedTeams.splice(i, 1)
        i = newState.savedTeams.length
      } 
      console.log(newState.savedTeams)
    }
    return newState
  }

  default: {
    return state
  }
  }
}