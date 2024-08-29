/* eslint-disable no-unused-vars */
import React from 'react'
import rightimg from '../../assets/images/Landingpage/Talentshine/rightimg.svg'
import AllInOneBg from '../../assets/images/FeaturesPage/HowItWork/AllInOneBg.png'



const OneStopSolution = ({handelClick}) => {
  return (
    <section className="px-[5.5vw] py-[60px] md:py-[120px] h-full bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(${AllInOneBg})`}}>
       <div 
                className='h-full w-full bg-contain bg-center bg-no-repeat ' 
            >
                <div className='flex flex-col items-center justify-center gap-10 md:px-8'>
                <div className='text-[#5B61FA] text-[2rem] md:text-[1.7rem] font-semibold'>ALL IN ONE APP</div>
                    <div className='text-[2.4rem] md:text-[3.2rem] font-semibold text-center'> One-Stop Talent Solution </div>
                    <div className='text-[1.5rem] w-full  mx-auto text-center text-pretty -mt-5'>
                    Streamline your event planning and talent booking in one seamless experience.
                    </div>
                    <div className='w-full md:w-1/2 '>

                        <img loading='lazy' src={rightimg} alt="" className='mx-auto'/>
                    </div>
                    <div className='flex justify-center '>
                <button className='bg-[#EFAA76] text-black w-fit text-2xl md:text-lg px-5 py-2 rounded-md flex items-center justify-between gap-3' onClick={handelClick}>
                    Explore Now
                </button>
            </div>
                </div>
            </div>
    </section>
  )
}

export default OneStopSolution
