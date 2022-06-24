import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import List from '../List/List.jsx'

/**
 * Container for displaying the unselected champions as well as filtering options.
 */
export default function ListContainer({
  champs,
  toggleChamp
}) {
  const [filteredChamps, setFilteredChamps] = useState(champs)
  const [filterValue, setFilterValue] = useState('')

  useEffect(() => {
    setFilteredChamps(champs)
  }, [champs])

  useEffect(() => {
    setFilteredChamps(champs.filter(champ => {
      return JSON.stringify(champ).toLowerCase().includes(filterValue.toLowerCase())
    }))
  }, [filterValue, champs])

  function filterChamps(e) {
    setFilterValue(e.target.value)
  }

  return (
    <div className='is-flex is-flex-direction-column has-text-centered'>
      <h2 className='is-size-3'>Unselected Champs</h2>
      <div className='is-align-self-flex-start mb-2'>
        <input className='input is-info' autoComplete='off' onChange={(e) => {filterChamps(e)}} placeholder='Search: ' type='text' name='search' />
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

