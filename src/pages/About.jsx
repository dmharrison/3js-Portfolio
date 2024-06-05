import React from 'react'
import { skills } from '../constants';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>Hello, I'm Daniel</h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-600'>
        <p>Hey! Welcome to my page I am so glad you are here! My name is Daniel Harrison and I am in the middle
           of one my biggest adventures, transitioning from fire fighter to a developer. A little about me! I
           am a husband and a father. I enjoy a multitude of hobbies such as videos games, playing guitar, and
           trying our new food spots. Below are some skills I've used to build some of my projects.</p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill)=>(
            <div className='block-container w-20 h-20' >
              <div className='btn-back roundedxl'/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={skill.imageUrl}
                 alt={skill.name}
                 className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-600'>
        <p>I've worked with a wide variety of companies, trying to make a more lasting impression each time. One common theme among my resume is that I love to learn and hustle.</p>

        <div className='mt-12'>

        </div>
       </div>
      </div>
    </section>
  )
}

export default About