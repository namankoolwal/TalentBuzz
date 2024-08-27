/* eslint-disable no-unused-vars */
import React from 'react'
import HowItWorkImg from '../../assets/images/FeaturesPage/HowItWork/HowItWorkImg.png'

const HowItWork = () => {
  return (
    <section className="px-[5.5vw] mt-[60px] md:mt-[120px] h-full">
       <div 
                className='h-full w-full bg-contain bg-center bg-no-repeat ' 
            >
                <div className='flex flex-col items-center justify-center gap-10 md:px-8'>
                <div className='text-[#5B61FA] text-[2rem] md:text-[1.7rem] font-semibold'>HOW IT WORKS</div>
                    <div className='text-[2.4rem] md:text-[3.2rem] font-semibold text-center'> How It Works for Artists </div>
                    <div className='text-[1.5rem] w-full text-center text-pretty'>
                        <img loading='lazy' src={HowItWorkImg} alt="" />
                    </div>
                </div>
            </div>
    </section>
  )
}

export default HowItWork
