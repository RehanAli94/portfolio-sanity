import React from 'react'
import NavBar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Project from '../../components/Project'
import Motion from '../../components/motion'
import { getProjects, getSocials } from '../../utills/sanity-utills'
import { ProjectType } from '../../types/Projects'
type Props = {}

const ProjectsPage = async (props: Props) => {
  const socialData=await getSocials();
  const projectData = await getProjects();

  return (
    <section className='w-full bg-[#f1f6f9]'>
      <NavBar props={socialData}/>
      <div className='max-w-7xl min-h-screen mx-auto '>
        <Motion delay={0.5} direction=''>
          <div className='w-full p-5 my-4 md:my-16 grid md:grid-cols-3 grid-cols-1 gap-12'>
            {projectData.map((p:ProjectType,index:number) => (
              <Project key={index} props={p} />
            ))}
          </div>
        </Motion>
      </div>
      <Footer props={socialData}/>
    </section>
  )
}

export default ProjectsPage