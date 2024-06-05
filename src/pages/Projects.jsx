import React from 'react'
import { projects } from '../constants'

const Projects = () => {
  return (
    <section className='max-container'> 
    <h1 className='head-text'>My Projects</h1>
    <div className='mt-5 flex flex-col gap-3 text-slate-600'>
        <p>These are some of the projects I have been working on during my bootcamp course.
          You'll be able to see the evolution of my coding journey, and I am so excited to add newer and more ellaborate projects for you to enjoy and even collaborate on in the future! </p>
    </div>

    <div className='flex flex-wrap my-20 gap-16'>
      {projects.map((project)=>(
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img className="rounded-t-lg" src={project.image} alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
            <a href={project.live} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Live Site
                 <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <a href={project.githublink} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Github
                 <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>


      ))}

    </div>

    </section>
  )
}

export default Projects