'use client'

import Image from 'next/image';
import React from 'react'

import ShineBorder from "./ui/shine-border";

function Intro() {

    return (
        <div className='w-full flex justify-between items-center flex-col-reverse sm:flex-row gap-3'>
            <div className='flex flex-col gap-4 '>
                <h1 className='text-5xl font-bold text-center sm:text-left drop-shadow-2xl'>
                    Hi, I am Ujwal
                </h1>
                <p className='text-base text-gray-700 dark:text-gray-200 text-center sm:text-left'
                >
                    I am a passionate and skilled Software Development Engineer with 2 years of professional experience in full-stack development. Proficient in modern web technologies like React.js, TypeScript, and Node.js, Next.js, Express.js, Java, I specialize in building robust and responsive applications.
                    <br />
                    My expertise includes leading the revamp of critical components for a Canadian stock market client’s application, creating dynamic dashboards for efficient data visualization, and implementing backend features for seamless functionality.
                </p>
            </div>
            <div className=' flex justify-end items-center rounded-full drop-shadow-md'>
                <ShineBorder
                    className="text-center text-2xl font-bold capitalize flex justify-end items-center drop-shadow-xl"
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                    borderRadius={900}
                >
                    <Image
                        className='rounded-full border border-gray-100 w-[100%]'
                        src={'/images/high-res-image.png'}
                        alt='Ujwal'
                        width={10000}
                        height={10000}
                    />

                </ShineBorder>
            </div>

        </div>
    )
}

export default Intro;
