import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { toggleChampActionCreator } from '../../actions/actions.js'
import ListContainer from '../../components/ListContainer/ListContainer.jsx'
import TraitContainer from '../../components/TraitContainer/TraitContainer.jsx'
import SelectedList from '../../components/SelectedList/SelectedList.jsx'
import './Tft.css'



const mapStateToProps = (state) => ({
  champs: state.champs.champs
})

const mapDispatchToProps = (dispatch) => ({
  toggleChamp: (champName) => dispatch(toggleChampActionCreator(champName))
})

function Tft({
  champs,
  toggleChamp
}) {
  const selectedChamps = champs.filter(champ => {
    return champ.selected
  })
  const unselectedChamps = champs.filter(champ => {
    return !champ.selected
  })
  return (
    <div className='wrapper'>
      <div className='left-bar'>
        <TraitContainer champs={champs} />
      </div>
      <div className='content'>
        <SelectedList champs={selectedChamps} toggleChamp={toggleChamp}/>
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
