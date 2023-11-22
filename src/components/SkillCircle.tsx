import React from 'react'
import Image from 'next/image'
import Motion from './motion'
import { getSkills } from '../utills/sanity-utills'
import { Skill } from '../types/skills'
import { PortableText } from '@portabletext/react'

type Props = {
  props: Skill,
  directionleft: boolean
}
export default async function SkillCircle({props}: Props,directionleft:Props ) {
const text = props.progress
  return (<>
    <Motion delay={0.5} direction={props.directionleft ? 'left' : 'right'}>
      <div className='h-[88px] w-[88px] overflow-hidden flex justify-center items-center p-1 shadow-lg shadow-accent/60 hover:shadow-violet-500 bg-violet-500 hover:bg-accent rounded-full hover:scale-150 duration-300'>
        <div className='flex justify-center items-center bg-[#f1f6f9] rounded-full h-full w-full'>
          <Image style={{height: '50px', width: '50px'}} src={props.image} alt='skill' width={50} height={50} className='' />
        </div>
        </div>
    </Motion>
  </>)
}
