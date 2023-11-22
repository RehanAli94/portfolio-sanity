import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Motion from './motion'
import { Social } from '../types/Social'
import { getSocials } from '../utills/sanity-utills'

type Props = {
  props:Social[]
}

export default async function Footer({props}:Props) {
  const socialData=await getSocials();
  return (
    <footer className='bg-violet-600 w-full py-5'>
      <div className='max-w-7xl mx-auto flex justify-between items-center p-5 '>
      <Motion delay={0.5} direction='left'>
        <div className='flex items-center space-x-2'>
          {props?.map((s:Social,index:number) => (
          <SocialIcon key={index} className='h-10 w-10 hover:scale-150 duration-200' url={s.url} fgColor="white" bgColor="violet" />
        ))}
        </div>
      </Motion>
        <Motion delay={0.5} direction='right'>
          <p className='text-accent/100 text-xs md:text-sm ml-2'>Made With ❤️ By FullStack RehanAli</p>
        </Motion>
      </div>
    </footer>
  )
}