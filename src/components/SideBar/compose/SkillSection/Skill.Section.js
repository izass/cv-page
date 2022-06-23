import React from 'react'
import SectionTitle from '../../../SectionTitle/SectionTitle'
import SkillCell from '../../../SkillCell/SkillCell'

function SkillSection() {
  return (
    <div>
      <SectionTitle title='skills:' />
      <SkillCell label='portuguese' />
      <SkillCell label='english' />
    </div>
  )
}

export default SkillSection