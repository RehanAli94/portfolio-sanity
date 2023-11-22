import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProjectType } from '../types/Projects'

type props ={
  props:ProjectType
}
export default function Project({props}:props) {
  return (

    <div className='h-[200px] w-[200px] m-10 md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] relative rounded-3xl group cursor-pointer shadow-lg shadow-violet-400 hover:shadow-accent hover:scale-110 duration-300'>

      <Image src={props.image} alt='project' width={200} height={200} className='h-[200px] md:h-[300px] md:w-[300px] lg:w-[400px] lg:h-[400px] w-[200px] rounded-3xl' />
      <Link href={"/projects/" + props._id} className='bg-violet-500 absolute top-0 left-0 h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:w-[400px] lg:h-[400px] flex justify-center items-center text-white p-4 text-xs lg:text-xl text-center rounded-3xl opacity-0 group-hover:opacity-100 transition-all ease-in duration-300'>
        {props.description}
      </Link>

    </div>

  )
}