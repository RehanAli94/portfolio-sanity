import Navbar from '../../../components/Navbar'
import React from 'react'
import Image from 'next/image'
import Footer from '../../../components/Footer'
import Motion from '../../../components/motion'
import { getBlogPost, getSocials } from '../../../utills/sanity-utills'
import { BlogPosts } from '../../../types/BlogPosts'
import { PortableText } from '@portabletext/react'
import { Category } from '../../../types/Category'
import { Slug } from 'sanity'

type Props = {
    params: { slug: string }
}

export default async function PostPage({ params }: Props) {

    const slug = params.slug;
    const socialData = await getSocials();
    const postData: BlogPosts = await getBlogPost(slug);
    // console.log(postData)
    return (
        <section className='w-full bg-[#f1f6f9]'>
            <Navbar props={socialData} />
            <div className='min-h-screen flex flex-col max-w-7xl mx-auto py-4 md:my-8 p-5 space-y-4'>
                <h1 className='font-extrabold text-3xl text-accent'>{postData?.title}</h1>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-2 text-sm text-violet-500'>
                        <p>Created at:</p>
                        <p className='font-bold'>{postData?.publishedAt.toString().slice(0, 10)}</p>
                    </div>
                    <div className='flex items-center space-x-2 text-sm text-violet-500'>
                        <p>Author:</p>
                        <p className='font-bold'>Rehan Ali</p>
                    </div>
                </div>
                <Motion delay={0.5} direction='down'>
                    <Image src={postData?.mainImage} alt='project' width={500} height={500} className='h-full w-full border-2 border-accent/90 rounded-3xl mx-auto object-cover' /></Motion>
                <PortableText value={postData?.body} />
                <div className='flex items-center space-x-2 text-violet-400'>
                    <h3 className=''
                    >Tech Used</h3>
                    <div className='flex items-center space-x-2 text-sm font-bold px-1 rounded-lg text-accent'>
                        {postData?.categories.map((c: Category, index: number) => (
                            <p key={index}>{c.title}</p>
                        ))}
                    </div>
                </div>
            </div>
            <Footer props={ socialData }/>
        </section>
    )
}