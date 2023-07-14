import React from 'react'
import './SubTitle.scss'

function SubTitle({ label, value }) {
  return (
    <h4 className='sub-title'>
    {label}
    <br />
    {value}
  </h4>
  )
}

export default SubTitle