import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { getBlogPosts } from '../utills/sanity-utills'
import { BlogPosts } from '../types/BlogPosts'
type Props = {
  props: BlogPosts
}

export default async function Post({ props }: Props) {
const blogData: BlogPosts[] = await getBlogPosts()
  return (
    <section className='w-full bg-[#f1f6f9]'>
      <Link href={"/posts/"} className='flex items-center border-2 border-violet-400 hover:scale-105 duration-500 space-x-4 bg-violet-100 rounded-lg shadow-lg shadow-accent/75 p-3'>
        <div className='w-[40%]'>

          <Image src={props.mainImage} alt='bloging' height={200} width={200} className='w-full object-cover rounded-lg' />
        </div>
        <div className='w-[60%] flex flex-col items-start'>
          <h1 className='font-bold text-xl'></h1>
          <div className='flex items-center space-x-1'>
            <p className='text-sm  text-violet-500'>Author:</p>
            <p className='text-sm font-bold text-violet-500'>{props.arthor.name}</p>
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