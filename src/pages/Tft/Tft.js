import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import 'bulma/css/bulma.min.css'

import { toggleChampActionCreator, deleteTeamActionCreator, addTeamActionCreator, loadTeamActionCreator } from '../../actions/actions.js'
import ListContainer from '../../components/ListContainer/ListContainer.jsx'
import TraitContainer from '../../components/TraitContainer/TraitContainer.jsx'
import SelectedList from '../../components/SelectedList/SelectedList.jsx'



const mapStateToProps = (state) => ({
  champs: state.champs.champs,
  savedTeams: state.champs.savedTeams
})

const mapDispatchToProps = (dispatch) => ({
  toggleChamp: (champName) => dispatch(toggleChampActionCreator(champName)),
  deleteTeam: (teamName) => dispatch(deleteTeamActionCreator(teamName)),
  addTeam: (team) => dispatch(addTeamActionCreator(team)),
  loadTeam: (team) => dispatch(loadTeamActionCreator(team))
})

function Tft({
  addTeam,
  champs,
  deleteTeam,
  loadTeam,
  savedTeams,
  toggleChamp
}) {
  const selectedChamps = champs.filter(champ => {
    return champ.selected
  })
  const unselectedChamps = champs.filter(champ => {
    return !champ.selected
  })
  return (
    <div className='columns'>
      <div className='column is-1'>
        <TraitContainer champs={champs} />
      </div>
      <div className='is-flex-direction-column column is-11'>
        <SelectedList loadTeam={loadTeam} addTeam={addTeam} deleteTeam={deleteTeam} savedTeams={savedTeams} champs={selectedChamps} toggleChamp={toggleChamp}/>
        <ListContainer champs={unselectedChamps} toggleChamp={toggleChamp} />
      </div>
    </div>
  )
}

Tft.propTypes = {
  /** List of champions */
  champs: PropTypes.array.isRequired,
  /** Toggles the selected value of the champion */
  toggleChamp: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Tft)
