'use client'

import React, { useEffect, useState } from 'react'
import { IconCloudDemo } from './IconCloud'
import RippleButton from './ui/ripple-button'

import { FaJava, FaPython, FaReact, FaNodeJs, FaBootstrap, FaGit, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs, SiTypescript, SiTailwindcss, SiMysql, SiMongodb, SiPostman, SiFlask, SiExpo, SiExpress } from 'react-icons/si';

const Skills = () => {
  const allSkills = [
    { skill: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { skill: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
    { skill: 'React', icon: <FaReact className="text-blue-300" /> },
    { skill: 'Next.js', icon: <SiNextdotjs className="text-gray-600" /> },
    { skill: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { skill: 'Express.js', icon: <SiExpress className="text-gray-500" /> },
    { skill: 'Expo', icon: <SiExpo className="text-black" /> },
    { skill: 'Java', icon: <FaJava className="text-red-600" /> },
    { skill: 'Git', icon: <FaGit className="text-orange-600" /> },
    { skill: 'Postman', icon: <SiPostman className="text-orange-500" /> },
    { skill: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
    { skill: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    { skill: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-400" /> },
    { skill: 'Bootstrap', icon: <FaBootstrap className="text-purple-500" /> },
    { skill: 'Python', icon: <FaPython className="text-blue-400" /> },
    { skill: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
    { skill: 'Flask', icon: <SiFlask className="text-gray-700" /> },
  ];

      const [mounted,setMounted] = useState(false);
      
          useEffect(() => {
              setMounted(true);
          }, []);

    return (
        mounted && (
            <div className='w-full flex lg:flex-row-reverse flex-col gap-4'>
                <div className='w-full flex justify-center'>
                    <div className='w-72'>
                        <IconCloudDemo />
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-2xl font-bold'>
                        Skills
                    </h1>
                    <div className='flex flex-wrap gap-2'>
                        {allSkills.map((skill, index) => (
                            <RippleButton 
                                className="border border-zinc-200 dark:border-zinc-800 rounded shadow-lg dark:shadow-zinc-700 dark:shadow-md"
                                key={index} rippleColor="#1E1E1E"
                            >
                                <div className='flex flex-row justify-center items-center gap-2 p-2'>
                                    <span className="text-sm font-medium">{skill.icon}</span>
                                        <span className="font-medium">{skill.skill}</span>
                                </div>
                            </RippleButton>
                        ))}
                    </div>
                </div>
            </div>
        )
    )
}

export default Skills
