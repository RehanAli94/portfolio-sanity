'use client'

import React from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

type Props = {
    children: React.ReactNode
    delay?: number
    direction?: string
}
export default function Motion({ children, delay, direction }: Props) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const animation = useAnimation()
    useEffect(() => {
        if (isInView) {
            animation.start('visible')
        }
    }, [isInView, animation])
    return (
        <div ref={ref} className='flex items-center justify-center'>
            <motion.div
                variants={{
                    hidden: {
                        opacity: 0,
                        x: direction === 'left' ? -80 : direction === 'right' ? 80 : 0,
                        y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0
                    },
                    visible: {
                        opacity: 1,
                        x: 0,
                        y: 0,
                    }
                }}
                initial='hidden'
                animate={animation}
                transition={{
                    duration: 0.75,
                    type: 'tween',
                    delay: delay,
                    ease: [0.25, 0.25, 0.25, 0.75],

                }}
            >
                {children}
            </motion.div>
        </div>
    )
}