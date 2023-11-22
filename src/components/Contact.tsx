"use client"

import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Motion from './motion'

type Inputs = {
  name: string,
  subject: string,
  massage: string,
}
export default function Contacts() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (Data) => {
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=rehanalidev170@gmail.com&su=${Data.subject}&body=Hi, my name is ${Data.name}. ${Data.massage}`
  }

  return (
    <section className='h-screen mx-auto text-center max-w-7xl flex flex-col justify-center items-center space-y-24'>
      <Motion delay={0.5} direction='down'>
        <h1 className='text-3xl md:text-5xl font-bold uppercase tracking-[20px] text-violet-500'>
          Contact Me
        </h1></Motion>
      <form onSubmit={handleSubmit(onSubmit)} className='flex justify-center items-center space-y-3 flex-col lg:[100%] w-[80%] md:w-[30%]'>
        <input {...register('name', { required: true })} className='placeholder:via-violet-500 text-accent placeholder:text-violet-500 border border-accent focus:outline-none p-2 mx-auto bg-transparent rounded-lg min-w-full' placeholder='Your name:' type='text' />
        {errors.name && <span className='text-red-500'>Name is required</span>}
        <input {...register('subject', { required: true })} className='placeholder:via-violet-500 text-accent placeholder:text-violet-500 border border-accent focus:outline-none p-2 mx-auto bg-transparent rounded-lg min-w-full' placeholder='Subject:' type='text' />
        {errors.subject && <span className='text-red-500'>Subject is required</span>}
        <textarea {...register('massage', { required: true })} className='placeholder:via-violet-500 text-accent placeholder:text-violet-500 border border-accent focus:outline-none p-2 mx-auto bg-transparent rounded-lg min-w-full' rows={8} placeholder='Your massage:' />
        {errors.massage && <span className='text-red-500'>This field is required</span>}
        <button type='submit' className='bg-gradient-to-r from-violet-500 w-full to-accent p-3 rounded-2xl text-xl font-bold px-8 tracking-widest hover:opacity-80 text-violet-700 hover:text-accent/100'>
          Submit
        </button>
      </form>
    </section>
  )
}
