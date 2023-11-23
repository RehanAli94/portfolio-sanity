import React from 'react'
import NavBar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Motion from '../../components/motion'
import { getBlogPosts, getSocials } from '../../utills/sanity-utills'
import { BlogPosts } from '../../types/BlogPosts'
import Blog from '../../components/Blog'
import { Social } from '../../types/Social'

type Props = {
  props:BlogPosts,
  socialData:Social[]
  }

  export default async function PostsPage({props}: Props) {
  const socialData:Social[]=await getSocials();
  const blogData:BlogPosts[] = await getBlogPosts();
  return (
    <section className='w-full bg-[#f1f6f9]'>
      <NavBar props={socialData}/>
      <div className='max-w-7xl min-h-screen mx-auto '>
        <Motion delay={0.5} direction=''>
          <div className='w-full p-5 my-4 md:my-16 grid md:grid-cols-2 grid-cols-1 gap-12 '>
          {blogData.map((b:BlogPosts,index:number) => (
           <Blog key={index} props={b} />
         ))}
          </div>
        </Motion>
      </div>
      <Footer props={socialData}/>
    </section>
  )
}