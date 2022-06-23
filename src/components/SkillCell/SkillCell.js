import React from 'react'
import './SkillCell.scss'

function SkillCell({ label }) {
  return (
    <div className='skill-cell'>
      <label>{label}</label>
      <div className='skill-bar'>
        <div className='skill-value'></div>
      </div>
    </div>
  )
}

export default SkillCell