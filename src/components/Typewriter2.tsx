'use client'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';

type Props = {
    biotitle: string[],
}

const Typewriter2 = ({biotitle}: Props) => {
    const [text] = useTypewriter({
        words: biotitle,
        loop: Infinity,
        delaySpeed: 2000,
    });
    return (
        <h1 className='text-3xl md:text-4xl font-extrabold text-violet-500'>{text}
        <Cursor cursorColor='#ee31ff' />
        </h1>
    )
}
export default Typewriter2