import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import List from '../List/List.jsx'
import './ListContainer.css'

/**
 * Container for displaying the unselected champions as well as filtering options.
 */
export default function ListContainer({
  champs,
  toggleChamp
}) {
  const [filteredChamps, setFilteredChamps] = useState(champs)

  useEffect(() => {
    setFilteredChamps(champs)
  }, [champs])

  function filterChamps(e) {
    return champs.filter(champ => {
      return JSON.stringify(champ).toLowerCase().includes(e.target.value.toLowerCase())
    })
  }
  console.log(filteredChamps)
  return (
    <div className='listContainer'>
      <h2>Unselected Champs</h2>
      <div className='search'>
        <label htmlFor='search'>Search: </label>
        <input onChange={(e) => {setFilteredChamps(filterChamps(e))}} type='text' name='search' />
      </div>
      <List list={filteredChamps} toggleChamp={toggleChamp}/>
    </div>
  )
}

ListContainer.propTypes = {
  /** List of champions */
  champs: PropTypes.array.isRequired,
  /** Toggles the selected value of the champion */
  toggleChamp: PropTypes.func.isRequired
}

