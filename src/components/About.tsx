
import React from 'react'
import Image from 'next/image'
import Motion from './motion';
import { Profile } from '../types/Profile';
import { getAbout, getProfile, getSocials } from '../utills/sanity-utills';
import Typewriter2 from '../components/Typewriter2';
import { PortableTextBlock } from 'sanity';
import { PortableText } from '@portabletext/react';
import { Social } from '../types/Social';

type Props = {}
export default async function About( props:Props) {
    const aboutData: Props = await getAbout()
    const profileData: Profile = await getProfile()
    return (
        <section className='max-w-7xl snap-center h-screen mx-auto flex flex-col items-center space-y-24 justify-center'>
            <Motion delay={0.5} direction='down'><h1 className='text-3xl md:text-5xl font-bold uppercase tracking-[20px] text-violet-500'>
                About
            </h1></Motion>
            <div className='flex flex-col-reverse md:flex-row items-center md:justify-between w-full'>
                <div className='md:w-[70%] w-full '>
                    <Motion delay={0.5} direction='left'>
                        <div className='p-4 text-center md:text-left font-semibold text-sm'>
                            <h1 className='text-[#ee31ff] text-3xl mb-5 md:text5xl font-extrabold text-center'>I am a <br /><span className='text-violet-600 underline decoration-[#ee31ff] text-3xl md:text5xl font-extrabold text-center'>
                                <Typewriter2 biotitle={profileData.biotitle} /></span></h1>
                            <h1 className='text-gray-500 text-sm md:text-lg lg:text-2xl  md:text-gray-700 '><PortableText value={profileData.bio} />
                            </h1>
                        </div>
                    </Motion>
                </div>
                <Motion delay={0.5} direction='right'>
                    <div className='w-[200px] md:w-auo'>
                        <div className='flex items-center justify-center shadow-2xl shadow-violet-400 rounded-lg bg-white h-[250px] p-2 w-full my-12'>
                            <div className='w-full h-full rounded-lg bg-accent hover:scale-150 duration-500'>
                                <Image src="/profile2.png" alt='' className='rounded-lg w-full scale-100 h-full mb-16 object-cover ' width={200} height={200} />
                            </div>
                        </div>
                    </div>
                </Motion>
            </div>
        </section>
    )
}