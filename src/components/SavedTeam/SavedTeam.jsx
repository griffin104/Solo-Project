import React from 'react'
import PropTypes from 'prop-types'

export default function SavedTeam({
  deleteTeam,
  loadTeam,
  team,
  teamName
}) {
  const firstRow = []
  const secondRow = []

  for (let i = 0; i < team.length; i++) {
    if (i < 5) {
      firstRow.push(<p className='mx-2'>{team[i].name}</p>)
    } else {
      secondRow.push(<p className='mx-2'>{team[i].name}</p>)
    }
  }

  async function deleteTeamOnClick() {
    try {
      await fetch('/api/teams', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: teamName})
      })
      deleteTeam(teamName)
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <React.Fragment>
      <div className='is-flex is-justify-content-space-between is-align-items-center'>
        <h5>{teamName}</h5>
        <div className='is-flex is-flex-wrap-wrap'>
          {firstRow}
          {secondRow}
        </div>
        <div className='is-flex is-flex-direction-column'>
          <button onClick={() => {loadTeam({team, teamName})}} className='button is-small is-success px-0'>Load Team</button>
          <button onClick={deleteTeamOnClick} className='button is-small is-danger px-0'>Delete Team</button>
        </div>
      </div>
      <hr />
    </React.Fragment>
  )
}

SavedTeam.propTypes = {
  /** Deletes the selected team */
  deleteTeam: PropTypes.func.isRequired,
  /** Loads the selected team */
  loadTeam: PropTypes.func.isRequired,
  /** Array of the champions on the team */
  team: PropTypes.array,
  /** Name of the team */
  teamName: PropTypes.string
}