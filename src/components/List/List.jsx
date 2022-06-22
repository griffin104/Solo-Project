import React from 'react'
import PropTypes from 'prop-types'

import Champion from '../Champion/Champion.jsx'
import './List.css'

/**
 * Filtered list of unselected champions.
 */
export default function List({
  list,
  toggleChamp
}) {

  const displayedList = list.map((champ, i) => {
    return (
      <Champion key={`champ${i}`} handleClick={() => {toggleChamp(champ)}} name={champ.name} cost={champ.cost} origin={champ.origin} classes={champ.classes}/>
    )
  })
  return (
    <div className='championList'>
      {displayedList}
    </div>
  )
}


List.propTypes = {
  /** The list of champions to be displayed */
  list: PropTypes.arrayOf(PropTypes.object),
  /** Toggles the selected value of the champion */
  toggleChamp: PropTypes.func.isRequired
}

List.defaultProps = {
  list: []
}
