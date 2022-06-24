import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { deleteTeamActionCreator, addTeamActionCreator, loadTeamActionCreator } from '../../actions/actions.js'
import Champion from '../Champion/Champion.jsx'
import SavedTeamsModal from '../SavedTeamsModal/SavedTeamsModal.jsx'


const mapStateToProps = (state) => ({
  savedTeams: state.champs.savedTeams
})

const mapDispatchToProps = (dispatch) => ({
  deleteTeam: (teamName) => dispatch(deleteTeamActionCreator(teamName)),
  addTeam: (team) => dispatch(addTeamActionCreator(team)),
  loadTeam: (team) => dispatch(loadTeamActionCreator(team))
})

/**
 * List of the currently selected champions.
 */
function SelectedList({
  addTeam,
  champs,
  currentTeam,
  deleteTeam,
  loadTeam,
  savedTeams,
  toggleChamp,
  updateCurrentTeam
}) {
  const [openSavedTeamsModal, setOpenSavedTeamsModal] = useState(false)

  function toggleSavedTeamsModal() {
    setOpenSavedTeamsModal(!openSavedTeamsModal)
  }

  async function saveTeam() {
    const team = {name: currentTeam, team: champs}
    try {
      console.log('jhgsdf')
      await fetch('/api/teams', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(team) 
      })
      addTeam(team)
    } catch (err) {
      console.log(err)
    }  
  }

  return (
    <div className='is-flex-direction-column is-justify-content-center has-text-centered'>
      <h2 className='is-size-2'>Selected Champs ({champs.length})</h2>
      <button onClick={toggleSavedTeamsModal} className='button is-info'>View Saved Teams</button>
      <div className='is-flex is-flex-wrap-wrap is-justify-content-center my-1'>
        {champs.map((champ, i) => {
          return (
            <Champion key={`champ${i}`} handleClick={() => {toggleChamp(champ)}} name={champ.name} cost={champ.cost} origin={champ.origin} classes={champ.classes}/>
          )
        })}
      </div>
      <div className='columns mt-2'>
        <div className='is-flex columns column is-4 ml-0'>
          <input className='input' placeholder='Team Name:'  autoComplete='off' value={currentTeam} type='text' onChange={(e) => updateCurrentTeam(e.target.value)}/>
          <button className='button is-success' onClick={saveTeam}>Save Team</button>
        </div>
      </div>
      {openSavedTeamsModal ? <SavedTeamsModal loadTeam={loadTeam} deleteTeam={deleteTeam} savedTeams={savedTeams} close={toggleSavedTeamsModal}/> : null}
    </div>
  )
}

SelectedList.propTypes = {
  /** Saves the currently selected team */
  addTeam: PropTypes.func,
  /** The list of champions to be displayed */
  champs: PropTypes.arrayOf(PropTypes.object),
  /** The name of the current team */
  currentTeam: PropTypes.string,
  /** Deletes the selected team */
  deleteTeam: PropTypes.func,
  /** Loads the selected team */
  loadTeam: PropTypes.func,
  /** List of the currently saved teams */
  savedTeams: PropTypes.array,
  /** Toggles the selected value of the champion */
  toggleChamp: PropTypes.func.isRequired,
  /** Updates the current team name */
  updateCurrentTeam: PropTypes.func.isRequired
}

SelectedList.defaultProps = {
  champs: []
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedList)