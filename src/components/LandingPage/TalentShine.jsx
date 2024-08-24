import React from 'react'
import leftbg from '../../assets/images/Landingpage/Talentshine/leftbg.svg'
import rightimg from '../../assets/images/Landingpage/Talentshine/rightimg.svg'

const TalentShine = () => {
    return (
        <div className=' px-[4.5vw] my-[60px] md:my-[60px] mt-[0px] md:h-screen flex items-center md:items-end justify-center '>
            <div className='bg-[#2C2C2C] relative h-3/4 w-full px-10 rounded-3xl '>
                <div className='flex flex-col-reverse md:flex-row w-full h-full py-20 '>
                    <div className='left md:w-1/2 h-full flex flex-col gap-[2rem] justify-center '>
                        <h2 className='font-semibold text-[4rem] leading-tight'>
                            Ready to Let Your Talent Shine?
                        </h2>
                        <p className='text-[1.25rem] '>
                            Join TalentBuzzz and become part of a thriving community of talented individuals.
                        </p>
                        <button className='bg-[#EFAA76] text-black w-fit mt-[16px] px-3 py-2 rounded-md flex items-center justify-between gap-3'>Download Now</button>
                    </div>


                    <div className='right md:w-1/2  '>
                        <img src={rightimg} alt="" className=' -translate-y-48 translate-x-10' />
                    </div>
                </div>



                <div className='absolute bottom-0 left-1'>
                    <img src={leftbg} alt="" className='w-3/4' />
                </div>
            </div>
        </div>
    )
}

export default TalentShine