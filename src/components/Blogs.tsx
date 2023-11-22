import React from 'react'
import Blog from './Blog'
import Link from 'next/link'
import Motion from './motion'
import { getBlogPosts } from '../utills/sanity-utills';
import { BlogPosts } from '../types/BlogPosts';

type Props={
  props:BlogPosts
}

export default async function Blogs(props:Props) {
  const blogData:BlogPosts[] = await getBlogPosts();


  return (
    <section className='h-screen p-5 max-w-7xl mx-auto flex flex-col justify-center items-center space-y-24'>
      <Motion delay={0.5} direction='down'>
        <h1 className='text-3xl md:text-5xl font-bold uppercase tracking-[20px] text-violet-500'>
          Blogs
        </h1>
      </Motion>
      <Motion delay={1} direction='left'>
        <div className='flex flex-col items-start space-y-3 w-full'>
         {blogData.map((b:BlogPosts,index:number) => (
           <Blog key={index} props={b} />
         ))}
        </div>
      </Motion>
      <Link href='/posts' className='text-center text-sm text-violet-500 cursor-pointer hover:text-accent'>See More...</Link>
    </section>
  )
}

