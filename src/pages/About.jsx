import React from 'react'
import { skills, experiences } from '../constants';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import famPic from '../assets/images/famPic.jpg'


const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>Hello, I'm Daniel</h1>
      
      <div >
        <img className="h-auto max-w-lg rounded-lg "src={famPic} alt="" />
      </div>
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
              <div className='btn-back rounded-xl'/>
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
        </div>
        
        <div className='mt-12 flex' >
          <VerticalTimeline>
            {experiences.map((experience)=>(
              <VerticalTimelineElement
              key={experience.company_name}
              date={experience.date}
              icon={<div className='flex justify-center items-center w-full h-full'>
                <img src={experience.icon}
                alt={experience.company_name}
                className='w-[60%] h-[60%] object-contain'
                 />
              </div>}
              iconStyle={{background:experience.iconBg}}
              contentStyle={{
                borderBottom:'8px',
                borderStyle:'solid',
                borderBottomColor:experience.iconBG,
                boxShadow:'none',
              }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {[experience.title, experience.education]}
                  </h3>
                  <p className='text-black-500 font-medium font-base'
                  style={{margin:0}}>
                    {[experience.company_name,experience.school]}
                  </p>
                  <p>
                  {experience.certs}
                  </p>
                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point, index)=>(
                      <li key={'experience-point-${index}'} className='text-black-500/50 font-normal pl-1 text-sm'>
                        {point}
                      </li>
                    ))}

                  </ul>
                </div>
              </VerticalTimelineElement>

            ))}
          </VerticalTimeline>
          

        </div>
       
      </div>

      <hr className='border-slate-200' />
    </section>
  )
}

export default About