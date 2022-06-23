import React from 'react'
import ProfileImg from '../ProfileImg/ProfileImg'
import ProfileSection from './compose/ProfileSection/ProfileSection'
import SkillSection from './compose/SkillSection/Skill.Section'
import './SideBar.scss'

function SideBar() {
  return (
    <div className='side-bar'>
      <ProfileImg />
      <ProfileSection />
      <SkillSection />
    </div>
  )
}

export default SideBar