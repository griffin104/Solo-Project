import React from 'react'
import PropTypes from 'prop-types'

import Champion from '../Champion/Champion.jsx'
import './SelectedList.css'

/**
 * List of the currently selected champions.
 */
export default function SelectedList({
  champs,
  toggleChamp
}) {
  return (
    <div className='selectedList'>
      <h2>Selected Champs ({champs.length})</h2>
      <div className='champs'>
        {champs.map((champ, i) => {
          return (
            <Champion key={`champ${i}`} handleClick={() => {toggleChamp(champ)}} name={champ.name} cost={champ.cost} origin={champ.origin} classes={champ.classes}/>
          )
        })}
      </div>
      <button>Save Team</button>
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
