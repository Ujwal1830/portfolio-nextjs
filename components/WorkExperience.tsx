import React from 'react'


interface WorkExperience {
    title: string,
    company: string,
    startDate: string,
    endDate: string,
    description: string[],
}

const WorkExperience = () => {

    const workExperience: WorkExperience[] = [
        {
            title: 'Software Development Engineer',
            company: 'Decimal Point Analytics, Pvt. Ltd.',
            startDate: 'December 2022',
            endDate: 'Present',
            description: [
                'Led the development and enhancement of stock market chart applications using TypeScript, React.js, and SCSS.',
                'Contributed to application migration and architecture redesign for a Canadian stock market client.',
                'Developed server-side logic for asset management applications and created dashboards for data visualization.',
                'Automated internal processes using Python and Node.js to optimize efficiency and improve user experience.'
            ]
        }

    ]

    return (
        <div className='flex flex-col gap-4 drop-shadow-2xl'>
            <h1 className='text-2xl font-bold drop-shadow-2xl'>
                WorkExperience
            </h1>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {workExperience.map((item, index) => (
                    <li className="mb-10 ms-4" key={index}>
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400  dark:text-gray-300">{item.startDate} - {item.endDate}</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                        <h4 className="text-base font-semibold text-gray-900 dark:text-white">{item.company}</h4>
                        <ol>
                            {item.description.map((description, index) => (
                                <li key={index} className="text-sm text-gray-700 dark:text-gray-300">
                                    {description}
                                </li>
                            ))}
                        </ol>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default WorkExperience
