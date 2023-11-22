import React from 'react'
import SkillCircle from './SkillCircle'
import Motion from './motion'
import { getSkills } from '../utills/sanity-utills'
import { Skill } from '../types/skills'


type Props = {
  props: Skill
}

export default async function Skills(props:Props) {
  const skillData:Skill[] = await getSkills()

  return (
    <section className='h-screen p-5 max-w-7xl mx-auto flex flex-col justify-center items-center space-y-24'>
      <Motion delay={0.5} direction='down'>
        <h1 className='text-3xl md:text-5xl font-bold uppercase tracking-[20px] text-violet-500'>
          Skills
        </h1>
      </Motion>
      <Motion delay={1}>
        <div className='grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-8'>
          {skillData.map((s:Skill,index:number) => (
            <SkillCircle
              props={s}
              key={index}
              directionleft={index % 2 === 0 ? true : false}/>
          ))}
        </div>
      </Motion>
    </section>
  )
}
