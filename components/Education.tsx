import React from 'react';

interface IEducation {
    degree: string;
    institute: string; 
    specialization?: string;
    graduationDate: string;
    percentage?: string;
    CGPA?: string;
}


const Education = () => {

    const education: IEducation[] =[
        {
            degree: 'PG-DAC (Post Graduate Diploma in Advanced Computing)',
            institute: 'Centre for Development of Advanced Computing (CDAC)',
            specialization: 'Web Development & Full-Stack Development',
            graduationDate: 'October 2022',
            percentage: '66.75%'
        },
        {
            degree: 'B.E. in Mechanical Engineering',
            institute: 'Kavikulguru Institute of Technology and Science, Nagpur',
            specialization: 'Mechanical Engineering',
            graduationDate: 'October 2020',
            CGPA: '8.36'
        },
        {
            degree: 'PCM (Physics, Chemistry, Mathematics)',
            institute: 'Sri Chaitanya Junior College, Hyderabad',
            specialization: 'Science',
            graduationDate: 'May 2015',
            percentage: '90.7%'
        }
    ]

  return (
    <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-bold'>
                Education
            </h1>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {education.map((item, index) => (
                    <li className="mb-10 ms-4" key={index}>
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-zinc-900 dark:bg-zinc-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-zinc-400 dark:text-zinc-500">{item.graduationDate}</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.degree}</h3>
                        <h4 className="text-base font-semibold text-gray-900 dark:text-white">{item.institute}</h4>
                        <div className="p-3 text-xs italic font-normal text-gray-500 border border-zinc-200 rounded-lg bg-zinc-50 dark:bg-zinc-800 dark:border-zinc-500 dark:text-zinc-300">
                            <p>
                                {item.specialization}
                            </p>
                            <p>
                                with {item.CGPA ? item.CGPA : item.percentage }
                            </p>
                        </div>
 
                    </li>
                ))}
            </ol>
        </div>
  )
}

export default Education
