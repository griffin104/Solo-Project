import React from 'react'
import PropTypes from 'prop-types'

import './TraitContainer.css'

/**
 * Container used for displaying the traits for the currently active team.
 */
export default function TraitContainer({
  champs
}) {
  const traits = {}

  champs.forEach(champ => {
    if (champ.selected) {
      champ.origin.forEach(trait => {
        if (traits[trait]) {
          traits[trait]++
        } else {
          traits[trait] = 1
        }
      })

      champ.classes.forEach(trait => {
        if (traits[trait]) {
          traits[trait]++
        } else {
          traits[trait] = 1
        }
      })
    }
  })

  const traitsAsArray = []
  for (let trait in traits) {
    traitsAsArray.push([trait, traits[trait]])
  }

  traitsAsArray.sort((a, b) => {
    return b[1] - a[1]
  })

  return (
    <div className='traits'>
      <h2>Current Traits</h2>
      {traitsAsArray.map((trait, i) => (
        <p key={`trait${i}`}>{trait[0]}: {trait[1]}</p>
      ))}
  
    </div>
  )
}

TraitContainer.propTypes = {
  /** List of champions */
  champs: PropTypes.array
}

TraitContainer.defaultProps = {
  champs: []
}
