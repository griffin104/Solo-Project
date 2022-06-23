import React from 'react'
import PropTypes from 'prop-types'

import './Champion.css'
import ivern from '../../images/ivern.png'

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
    <div onClick={handleClick} className='card mr-2 my-2'>
      <div className='card-content'>
        <div className='media'>
          <div className='media-left'>
            <figure className='image is-48x48'>
              <img src={ivern} />
            </figure>
          </div>
          <div className='mediacontent'>
            <p className='has-text-weight-bold'>{name}</p>
          </div>
        </div>
        <div className='content'>
          <p><strong>Cost:</strong> {cost}</p>
          <p><strong>Origin:</strong> {origin}</p>
          <p><strong>Class:</strong> {classes}</p>
        </div>
      </div>
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