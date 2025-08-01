import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from '@/lib/utils'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

export default function Hero() {
    return (
        <div className="pb-20 pt-30">
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white" />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            </div>
            <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black">
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:40px_40px]",
                        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                    )}
                />
            </div>
            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60v] flex flex-col items-center justify-center'>
                    <h1 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Dynamic Web Magic With Nextjs</h1>
                    <TextGenerateEffect className='text-center text-[40px] md:text-3xl lg:text-6xl' words='Transforing Concepts into Seamless User Experiences' />
                    <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>Hi, I&apos;m Rahul, Full Stack Developer based in Bengaluru</p>
                    <a href="#about">
                        <MagicButton
                         title="Show My Work"
                         icon={<FaLocationArrow/>}
                         position="right" />
                    </a>
                </div>

            </div>
        </div>
    )
}
