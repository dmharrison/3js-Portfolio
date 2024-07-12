import React from 'react'
import {Link} from 'react-router-dom'
import {arrow} from "../assets/icons"

const InfoBox =({text,link, btnText})=>(
    <div className='info-box'>
         <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent ={
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-grey py-4 px-8 text-white mx-5'>
            Hey! I am <span className='font-bold'>Daniel Harrison</span><br/>
            I am so glad you are here. <br/> One of the reason I love software engineering is that your imagination can become your reality.  <br/>
            Feel free to use your mouse or keyboard to moved around the ship! </h1>
            
    ),
    2:(
        <InfoBox 
        text="Embarking on a new journey to become a software developer, my skills range all over from CPR to well 3d Models"
         link='/about'
         btnText="Learn more"
         />
    ),
    3:(
        <InfoBox 
        text="Check out some of things I have been able to build"
        link='/projects'
         btnText="Take a Look"
         />
    ),
    4:(
        <InfoBox 
        text="If you are interested in any of the things you saw let me know!"
         link='/contact'
         btnText="Let's Chat"
         />
    ),
}



const PopupInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
  
}

export default PopupInfo




      