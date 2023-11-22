'use client'
import Link from 'next/link'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { usePathname } from 'next/navigation'
import Motion from './motion'
import { Social } from '../types/Social'

type Props = {
  props:Social[]
}

export default function Navbar({props }: Props) {
 
  const pathname = usePathname()
  return (
    <nav className='sticky top-0 bg-transparent backdrop-blur-sm z-50 max-w-7xl gap-y-2 mx-auto p-5 flex flex-col md:flex-row sm:flex-row items-center justify-between'>
      <Motion delay={0.5} direction='left'>
        <div className='flex items-center space-x-2'>
          {props?.map((s:Social,index:number) => (
          <SocialIcon key={index} className='h-10 w-10 hover:scale-150 duration-200' url={s.url} fgColor="white" bgColor="violet" />
        ))}
        </div>
      </Motion>
      <Motion delay={0.5} direction='right' >
        <div className='flex items-center space-x-4 md:space-x-8'>
          {pathname !== "/" && <Link className='text-violet-500 hover:text-violet-300 uppercase tracking-wide md:tracking-widest p-3 duration-500 transition-all text-sm md:text-base hover:bg-accent rounded-2xl' href="/">home</Link>}
          {pathname !== "/projects" && <Link className='text-violet-500 hover:text-violet-300 uppercase tracking-wide md:tracking-widest p-3 hover:bg-accent rounded-2xl duration-500 text-sm md:text-base transition-all' href="/projects">Projects</Link>}
          {pathname !== "/posts" && <Link className='text-violet-500 hover:text-violet-300 uppercase tracking-wide md:tracking-widest p-3 duration-500 transition-all text-sm md:text-base hover:bg-accent rounded-2xl' href="/posts">Blogs</Link>}
        </div>
      </Motion>
    </nav>
  )
}
