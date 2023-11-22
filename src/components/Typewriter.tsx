'use client'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';

type Props = {
    professions: string[],
}

const Typewriter = ({professions}: Props) => {
    const [text] = useTypewriter({
        words: professions,
        loop: Infinity,
        delaySpeed: 2000,
    });
    return (
        <h1 className='text-2xl md:text-4xl lg:text-5xl font-extrabold text-violet-500'>{text}
        <Cursor cursorColor='#ee31ff' />
        </h1>
    )
}
export default Typewriter