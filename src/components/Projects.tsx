import React from 'react'
import Project from './Project'
import Link from 'next/link'
import Motion from './motion'
import { ProjectType } from '../types/Projects'
import { getProjects, getSocials } from '../utills/sanity-utills'
import { Social } from '../types/Social'

type Props ={
  props:Social[]
}

export default async function Projects({props}:Props) {

  const projectDta:ProjectType[] = await getProjects();
  const socialData:Social[] = await getSocials();

  return (
    <section className='h-screen max-w-7xl mx-auto flex flex-col justify-center items-center space-y-20'>
      <Motion delay={0.5} direction='down'>
        <h1 className='text-3xl top-24 md:text-5xl font-bold uppercase tracking-[20px] text-violet-500'>
          Projects
        </h1></Motion>
      <Motion delay={1} direction=''>
        <div className='hidden md:grid sm:grid-cols-2 md:grid-cols-3 gap-8' >
         {projectDta.slice(2,5).map((p:ProjectType,index:number) => (
           <Project key={index} props={p} />
         ))}
        </div>
      </Motion>
      <Motion delay={1} direction=''>
        <div className='md:hidden grid md:grid sm:grid-cols-2 md:grid-cols-3 gap-8' >
         {projectDta.slice(3,5).map((p:ProjectType,index:number) => (
           <Project key={index} props={p} />
         ))}
        </div>
      </Motion>
      <Link href='/projects' className='text-center text-sm text-violet-500 cursor-pointer hover:text-accent'>See More...</Link>
    </section>
  )
}