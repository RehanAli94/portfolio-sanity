import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import Link from 'next/link'
import React from 'react'
import { LuExternalLink } from 'react-icons/lu'
import Image from 'next/image'
import Motion from '../../../components/motion'
import { getProject, getSocials } from '../../../utills/sanity-utills'
import { Skill } from '../../../types/skills'
import { ProjectType } from '../../../types/Projects'

type Props = {
    params: {_id: string}
}
const ProjectsPage = async ({params}:Props) => {
    const _id=params._id
    const socialData=await getSocials();
    const projectData:ProjectType = await getProject(_id);
    return (
        <section className='w-full bg-[#f1f6f9]'>
            <Navbar props={socialData} />
            <div className='min-h-screen flex flex-col max-w-7xl mx-auto py-4 md:my-8 p-5 space-y-4'>
                <h1 className='font-extrabold text-3xl text-accent'>{projectData.title}</h1>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-2 text-sm text-violet-500'>
                        <p>Created at:</p>
                        <p className='font-bold'>{projectData._createdAt.toString().slice(0, 10)}</p>
                    </div>
                    <button className='bg-gradient-to-r from-violet-500 w-max h-[40px]  to-accent rounded-2xl text-md font-bold px-6 tracking-widest hover:opacity-80 text-violet-700 hover:text-accent/100'><Link className='flex items-center gap-2 mx-2 my-2' href={projectData.url}>Link<LuExternalLink /></Link></button>
                </div>
                <Motion delay={0.5} direction='left'>
                    <Image priority={true} src={projectData.image} alt='project' width={500} height={500} className='lg:h-1/2 lg:w-1/2 sm:w-full sm:h-full border-2 border-accent/90 rounded-3xl mx-auto object-cover' />
                    <p className='text-center lg:text-2xl text-md text-accent mx-auto'>{projectData.description}</p>
                </Motion>
                <div className='flex items-center space-x-2 text-violet-400'>
                    <h3 className=''>Tech Used</h3>
                    <div className='flex items-center justify-center space-x-2 text-sm font-bold'>
                        {projectData.tech.map((t:Skill, index: number) => (
                            <p key={index}>{t.title}</p>
                        ))}
                    </div>
                </div>
            </div>
            <Footer props={socialData}/>
        </section>
    )
}

export default ProjectsPage