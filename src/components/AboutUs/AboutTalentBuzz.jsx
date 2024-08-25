/* eslint-disable no-unused-vars */
import React from 'react'

const AboutTalentBuzz = () => {
  return (
    <div className='px-[5.5vw] my-[60px] md:my-[120px] h-full '>
        <div 
            className='h-full w-full py-10 pt-0 bg-contain bg-center bg-no-repeat' 
            
        >
            <div className='flex flex-col items-center justify-center gap-10 md:p-8 pt-0'>
                <div className='font-bold text-[3.5rem] md:text-[4rem] leading-tight'> About <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#A3219C] from-[0%] via-[#2B3DE1] via-[81%] to-[#F6577E]/50 to-[98%]'>Talentbuzzz</span></div>
                <div className='text-[1.2rem] md:text-[1.5rem] w-[100%] text-center text-pretty'>Talentbuzzz bridges the gap between artists and opportunities, empowering creatives to showcase their skills and connect directly with clients. Our platform simplifies the hiring process, making it easy for both artists and event organizers to find the perfect match. Join us in transforming the way talent is discovered and hired.</div>
            </div>
        </div>
    </div>
  )
}

export default AboutTalentBuzz
