/* eslint-disable no-unused-vars */
import React from 'react'
import HowItWorkImg from '../../assets/images/FeaturesPage/HowItWork/HowItWorkImg.png'
import ConnectDot from '../../assets/images/FeaturesPage/HowItWork/ConnectDot.png'

const HowItWork = () => {
  return (
    <section className="px-[5.5vw] mt-[60px] md:mt-[120px] h-full">
       <div 
                className='h-full w-full bg-contain bg-center bg-no-repeat ' 
            >
                <div className='flex flex-col items-center justify-center gap-10 '>
                <div className='text-[#5B61FA] text-[2rem] md:text-[1.7rem] font-semibold'>HOW IT WORKS</div>
                    <div className='text-[2.4rem] md:text-[3.2rem] font-semibold text-center'> How It Works for Artists </div>
                    <div className='text-[1rem] w-full h-full rounded-xl bg-[#191A1F]'>
                        {/* <img loading='lazy' src={HowItWorkImg} alt="" /> */}
                        <div className='flex relative flex-col gap-24 w-full h-full py-32'>
                          <div className='top top-0 absolute md:relative flex flex-col md:flex-row items-center justify-evenly w-full h-full'>
                            <div><img src={ConnectDot} alt="ConnectDot" className='w-1/2 rotate-90 md:rotate-0 mx-auto md:w-full' /></div>
                            <div><img src={ConnectDot} alt="ConnectDot" className='w-1/2 rotate-90 md:rotate-0 mx-auto md:w-full' /></div>
                            <div><img src={ConnectDot} alt="ConnectDot" className='w-1/2 rotate-90 md:rotate-0 mx-auto md:w-full' /></div>
                          </div>
                          <div className='bottom flex gap-56 md:gap-0 flex-col md:flex-row items-center justify-around w-full h-full text-2xl md:text-base'>
                            <div className='flex flex-col gap-4 items-center justify-center'>
                              <span className=' bg-black rounded-full flex items-center justify-center w-6 h-6 text-2xl md:text-sm p-7 font-semibold md:p-4'><span className='-mb-1'>1</span></span>
                              <span>Download The app</span>
                            </div>

                            <div className='flex flex-col gap-4 items-center justify-center'>
                              <span className=' bg-black rounded-full flex items-center justify-center w-6 h-6 text-2xl md:text-sm p-7 font-semibold md:p-4'><span className='-mb-1'>2</span></span>
                              <span>Create a Profile</span>
                            </div>

                            <div className='flex flex-col gap-4 items-center justify-center'>
                              <span className=' bg-black rounded-full flex items-center justify-center w-6 h-6 text-2xl md:text-sm p-7 font-semibold md:p-4'><span className='-mb-1'>3</span></span>
                              <span>Upload Your Work</span>
                            </div>

                            <div className='flex flex-col gap-4 items-center justify-center'>
                              <span className=' bg-black rounded-full flex items-center justify-center w-6 h-6 text-2xl md:text-sm p-7 font-semibold md:p-4'><span className='-mb-1'>4</span></span>
                              <span>Get Hired and connect</span>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default HowItWork
