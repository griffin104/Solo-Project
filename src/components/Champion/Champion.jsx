import React from 'react'
import PropTypes from 'prop-types'

import './Champion.css'

/**
 * Card for displaying information about the champion.
 */
export default function Champion({
  classes,
  cost,
  handleClick,
  name,
  origin,
}) {
  return (
    <div onClick={handleClick} className='champion'>
      <h3>{name}</h3>
      <p>{cost}</p>
      <p>{origin}</p>
      <p>{classes}</p>
    </div>
  )
}

Champion.propTypes = {
  /** The class traits of the unit */
  classes: PropTypes.arrayOf(PropTypes.string),
  /** The cost of the unit */
  cost: PropTypes.number.isRequired,
  /** The click event for when a unit's box is clicked */
  handleClick: PropTypes.func.isRequired,
  /** The name of the unit */
  name: PropTypes.string.isRequired,
  /** The origin traits of the unit */
  origin: PropTypes.arrayOf(PropTypes.string),
}