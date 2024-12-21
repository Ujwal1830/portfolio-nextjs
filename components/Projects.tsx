import Image from 'next/image';

import { FaCode, FaGit } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiOpenai } from 'react-icons/si';
import { MdOutlineToken, MdWebAsset } from "react-icons/md";
import { TbBrandGoogleMaps } from 'react-icons/tb';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';

interface IProject {
    title: string;
    description: string;
    link: string;
    code: string;
    image: string;
    technologies: {
        skill: string;
        icon: React.ReactNode;
    }[];
}

const Projects = () => {

    const projects: IProject[] = [
        {
  title: 'Discover Maps',
  description: 'Developed an application where users can find places using the Google Places API, offering location search and exploration functionality.',
  link: 'https://discover-maps.vercel.app/',
  code: 'https://github.com/Ujwal1830/nextjs-discover-app',
  image: '/images/discoverMapCover.png',
  technologies: [
    { skill: 'Next.js', icon: <SiNextdotjs className="text-zinc-600 dark:text-zinc-300" /> },
    { skill: 'TypeScript', icon: <SiTypescript className="text-blue-500 dark:text-blue-300" /> },
    { skill: 'Tailwind', icon: <SiTailwindcss className="text-blue-400 dark:text-blue-300" /> },
    { skill: 'Git', icon: <FaGit className="text-orange-600 dark:text-orange-400" /> },
    { skill: 'Places API', icon: <TbBrandGoogleMaps className="text-green-500 dark:text-green-300" /> }
  ],
},
{
  title: 'Amazon Web Scraper',
  description: 'Built a tool to scrape data from Amazon using the Amazon Products API, enabling the development of a custom e-commerce website.',
  link: 'https://amazon-w-scrapper.vercel.app/',
  code: 'https://github.com/Ujwal1830/amazon-web-scrapper',
  image: '/images/amazonWebScrapper.png',
  technologies: [
    { skill: 'Next.js', icon: <SiNextdotjs className="text-zinc-600 dark:text-zinc-300" /> },
    { skill: 'Next-Auth', icon: <SiNextdotjs className="text-zinc-600 dark:text-zinc-300" /> },
    { skill: 'JWT', icon: <MdOutlineToken className="text-orange-600 dark:text-orange-400" /> }
  ],
},
{
  title: 'Promptopia',
  description: 'Developed a user-friendly application enabling user login, creating/editing posts with customizable prompts and tags. Includes a dynamic feed showcasing diverse user posts and a chatbot interface powered by OpenAI.',
  link: 'https://project-promptopia-seven-kappa.vercel.app/',
  code: 'https://github.com/Ujwal1830/project_promptopia',
  image: '/images/promptopia.png',
  technologies: [
    { skill: 'Next.js', icon: <SiNextdotjs className="text-zinc-600 dark:text-zinc-300" /> },
    { skill: 'Next-Auth', icon: <SiNextdotjs className="text-zinc-600 dark:text-zinc-300" /> },
    { skill: 'OpenAI', icon: <SiOpenai className="text-green-600 dark:text-green-400" /> },
    { skill: 'Tailwind', icon: <SiTailwindcss className="text-blue-400 dark:text-blue-300" /> }
  ],
},
{
  title: 'Stock Management',
  description: 'Designed and developed an application to manage stocks with dynamic search functionality. Users can add, edit, and delete stocks efficiently.',
  link: 'https://stock-management-tan.vercel.app/',
  code: 'https://github.com/Ujwal1830/stock-management',
  image: '/images/stockManagement.png',
  technologies: [
    { skill: 'Next.js', icon: <SiNextdotjs className="text-zinc-600 dark:text-zinc-300" /> },
    { skill: 'TypeScript', icon: <SiTypescript className="text-blue-500 dark:text-blue-300" /> },
    { skill: 'Tailwind', icon: <SiTailwindcss className="text-blue-400 dark:text-blue-300" /> },
    { skill: 'Git', icon: <FaGit className="text-orange-600 dark:text-orange-400" /> },
    { skill: 'MongoDB', icon: <SiMongodb className="text-green-600 dark:text-green-400" /> }
  ],
},
{
  title: 'Bard API REST API',
  description: 'Created a REST API using Bard API to generate AI-powered responses. Useful for building chatbots or generating helpful prompts.',
  link: 'https://chatbot-eight-tau.vercel.app/',
  code: 'https://github.com/Ujwal1830/next-chatbot-bard',
  image: '/images/bardApi.png',
  technologies: [
    { skill: 'Bard API', icon: <FcGoogle className="text-blue-600 dark:text-blue-400" /> },
    { skill: 'Next.js', icon: <SiNextdotjs className="text-zinc-600 dark:text-zinc-300" /> },
    { skill: 'Next-Auth', icon: <SiNextdotjs className="text-zinc-600 dark:text-zinc-300" /> },
    { skill: 'JWT', icon: <MdOutlineToken className="text-orange-600 dark:text-orange-400" /> }
  ],
}

    ];


  return (
    <div className='w-full flex flex-col gap-4 justify-center '>
        <h1 className='text-2xl font-bold'>
            Projects
        </h1>
        <div className='grid sm:grid-cols-2 2xl:grid-cols-3 sm:gap-6 gap-4 place-items-center'>
            { projects?.map((project, index) =>(
                <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col dark:shadow-zinc-800" key={index}>
                    <Image className="w-full" src={project.image} alt={project.title} width={1000} height={1000} />
                    <div className="px-6 py-4 flex-1">
                        <div className="font-bold text-xl mb-2">{project.title}</div>
                        <p className="text-zinc-700 dark:text-zinc-300 text-sm">{project.description}</p>
                    </div>
                    <div className='flex flex-col'>
                        <div className="flex flex-wrap px-6 gap-2 pb-4 mt-auto">
                            {project.technologies?.map((tech, ind) =>(
                                <div className='flex flex-row justify-center items-center gap-2 shadow-realistic dark:shadow-zinc-800 px-3 py-1 text-sm font-semibold text-zinc-700 rounded-sm' key={ind}>
                                    <span className="text-sm font-medium">{tech.icon}</span>
                                        <span className="font-medium dark:text-zinc-300">{tech.skill}</span>
                                </div>
                            ))}
                        </div>
                        <div className='flex flex-row px-6 gap-4 pb-4 mt-auto'>
                            <Link href={project.link}>
                                <button className='px-4 py-1 bg-zinc-800 text-zinc-100 rounded-md flex items-center gap-2 hover:bg-zinc-500 border-0 shadow-xl dark:shadow-zinc-700'>
                                    Website
                                    <MdWebAsset />
                                </button>
                            </Link>
                            <Link href={project.code}>
                                <button className='px-4 py-1 bg-zinc-100 text-zinc-800 rounded-md flex items-center gap-2 hover:bg-zinc-500 border-0 shadow-xl dark:shadow-zinc-700'>
                                    Code
                                    <FaCode />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Projects
