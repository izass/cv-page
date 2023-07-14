import React from 'react'
import HeaderSection from './compose/HeaderSection/HeaderSection'
import OtherInformationSection from './compose/OtherInformationSection/OtherInformationSection'
import ProfessionalExperienceSection from './compose/ProfessionalExperienceSection/ProfessionalExperienceSection'
import './MainContent.scss'

function MainContent() {
  return (
    <div className='main-content'>
      <HeaderSection />
      <ProfessionalExperienceSection />
      <OtherInformationSection />
    </div>
  )
}

export default MainContent