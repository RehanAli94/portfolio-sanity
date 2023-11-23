import React from 'react'
import { BlogPosts } from '../types/BlogPosts'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
    props: BlogPosts,
}

export default function Blog({ props }: Props) {
    return (
        <section className='w-full bg-[#f1f6f9] flex items-center justify-center'>
      <Link href={"/posts/" + props.slug.current} className='flex items-center border-2 border-violet-400 hover:scale-105 duration-500 space-x-4 bg-violet-100 rounded-lg shadow-lg shadow-accent/75 p-3'>
        <div className='w-[40%]'>

          <Image src={props.mainImage} alt='bloging' height={200} width={200} className='w-full h-full object-cover rounded-lg' />
        </div>
        <div className='w-[60%] flex flex-col items-start'>
          <h1 className='font-bold text-xl'></h1>
          <div className='flex items-center space-x-1'>
            <p className='text-sm  text-violet-500'>Author:</p>
            <p className='text-sm font-bold text-violet-500'>Rehan Ali</p>
          </div>
          <div className=' w-full justify-between flex items-center space-x-1'>
            <p className='text-sm text-violet-500'>{props.publishedAt.toString().slice(0, 10)} </p>
            <p className='underline font-bold text-xs text-violet-500'>Click to read more</p>
          </div>
        </div>
      </Link>
    </section>
    )
}
