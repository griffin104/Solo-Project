import React from 'react'
import PropTypes from 'prop-types'

import SavedTeam from '../SavedTeam/SavedTeam.jsx'

export default function SavedTeamsModal({
  close,
  deleteTeam,
  loadTeam,
  savedTeams
}) {

  const teams = savedTeams.map((team, i) => {
    return <SavedTeam key={`savedTeam${i}`} teamName={team.name} team={team.team} loadTeam={loadTeam} deleteTeam={deleteTeam}/>
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
  close: PropTypes.func,
  /** Deletes the selected team */
  deleteTeam: PropTypes.func.isRequired,
  /** Loads the selected team */
  loadTeam: PropTypes.func.isRequired,
  /** Array of the saved teams */
  savedTeams: PropTypes.array
}

SavedTeamsModal.defaultProps = {
  savedTeams: []
}
