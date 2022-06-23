import React from 'react'
import PropTypes from 'prop-types'

import { Champion } from '../../utils/champs.js'
import SavedTeam from '../SavedTeam/SavedTeam.jsx'

export default function SavedTeamsModal({
  close,
  deleteTeam,
  loadTeam,
  savedTeams
}) {

  const teams = savedTeams.map(team => {
    return <SavedTeam teamName={team.name} team={team.team} loadTeam={loadTeam} deleteTeam={deleteTeam}/>
  })

  return (
    <div className='modal is-active'>
      <div className='modal-background' onClick={close}></div>
      <div className='modal-card'>
        <header className='modal-card-head'>
          <p className='modal-card-title'>Saved Teams:</p>
        </header>
        <section className='modal-card-body'>
          <div className='content'>
            {teams}
          </div>
        </section>
      </div>
    </div>
  )
}

SavedTeamsModal.propTypes = {
  /** Function used to close the modal */
  close: PropTypes.func
}