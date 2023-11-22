import React from 'react'
import Image from 'next/image'
import { SocialIcon } from 'react-social-icons'
import Motion from './motion'
import { getProfile } from '../utills/sanity-utills'
import Typewriter from '../components/Typewriter'
import { Profile } from '../types/Profile'
import { Social } from '../types/Social' 


type Props = {}

const Header = async (props: Props) => {
    const profileData: Profile = await getProfile()

    return (

        <section className='h-[calc(100vh-56px)] relative z-0 w-full flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center space-y-4'>
                <Motion delay={1} direction='down'>
                    <div className='bg-white rounded-full h-40 w-40 flex items-center justify-center shadow-md shadow-gray-500 hover:scale-150 duration-1000'>
                        <Image src={profileData.image} alt="logo" className='' width={150} height={150} />
                    </div>
                </Motion>
                <Motion delay={0.5} direction=''>
                    <div className='flex text-center justify-center space-x-2 items-center'>
                        <p className=' mx-[25px] font-bold text-2xl text-accent'>{profileData.smallbio} <span className='underline text-violet-600 decoration-accent text-3xl '>React.js</span></p>
                    </div>

                </Motion>
                <Motion delay={0.5} direction=''>
                    <div className='flex justify-center space-x-2 items-center'>
                        <Typewriter professions={profileData.profession}/>
                    </div>
                </Motion>
                <Motion delay={0.5} direction=''>
                    <div className='flex items-center p-1 space-x-5 border rounded-2xl border-[#ee31ff]'>
                        {profileData.socials.map((s: Social, index: number) => (
                            <SocialIcon key={index} className='h-10 w-10 hover:scale-150 duration-200' url={s.url} fgColor="white" bgColor="violet" />
                        ))}
                    </div>
                </Motion>
            </div>

            <div className='absolute mb-14 -z-10 w-[45%] h-[25%] md:w-[45%] md:h-[25%] opacity-50 blur-[150px] filter bg-gradient-to-r from-fuchsia-500 to-indigo-500 mix-blend-multiply' />
        </section>

    )
}

export default Header