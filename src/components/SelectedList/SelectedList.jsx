import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Champion from '../Champion/Champion.jsx'
import SavedTeamsModal from '../SavedTeamsModal/SavedTeamsModal.jsx'

/**
 * List of the currently selected champions.
 */
export default function SelectedList({
  addTeam,
  champs,
  deleteTeam,
  loadTeam,
  savedTeams,
  toggleChamp
}) {
  const [teamName, setTeamName] = useState('')
  const [openSavedTeamsModal, setOpenSavedTeamsModal] = useState(false)

  function toggleSavedTeamsModal() {
    setOpenSavedTeamsModal(!openSavedTeamsModal)
  }

  async function saveTeam() {
    const team = {name: teamName, team: champs}
    try {
      await fetch('/api/teams', {
        method: 'POST',
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
          <input className='input' placeholder='Team Name:' type='text' onChange={(e) => setTeamName(e.target.value)}/>
          <button className='button is-success' onClick={saveTeam}>Save Team</button>
        </div>
      </div>
      {openSavedTeamsModal ? <SavedTeamsModal loadTeam={loadTeam} deleteTeam={deleteTeam} savedTeams={savedTeams} close={toggleSavedTeamsModal}/> : null}
    </div>
  )
}

SelectedList.propTypes = {
  /** The list of champions to be displayed */
  champs: PropTypes.arrayOf(PropTypes.object),
  /** Toggles the selected value of the champion */
  toggleChamp: PropTypes.func.isRequired
}

SelectedList.defaultProps = {
  champs: []
}
