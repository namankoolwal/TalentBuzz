import React from 'react'
import leftbg from '../../assets/images/Landingpage/Talentshine/leftbg.svg'
import rightimg from '../../assets/images/Landingpage/Talentshine/rightimg.svg'

const TalentShine = ({handelClick}) => {
    return (
        <div className=' px-[4.5vw] my-[60px] md:my-[60px] mt-[0px] xl:h-screen flex items-center md:items-end justify-center '>
            <div className='bg-[#2C2C2C] relative  xl:h-3/4 w-full px-10 rounded-3xl '>
                <div className='flex flex-col-reverse md:flex-row w-full h-full py-20 relative z-10'>
                    <div className='left md:w-1/2 h-fit xl:h-full flex flex-col gap-[2rem] justify-center '>
                        <h2 className='font-semibold text-[4rem] leading-tight'>
                            Ready to Shine?
                        </h2>
                        <p className='text-[1.5rem] md:text-[1.3rem] '>
                        Join Talentbuzzz and connect with a thriving community of talented artists.
                        </p>
                        <button className='bg-[#EFAA76] text-black text-2xl md:text-lg w-fit mt-[16px] px-3 py-3 rounded-md flex items-center justify-between gap-3' onClick={handelClick}>Download Talentbuzzz Now</button>
                    </div>


                    <div className='right md:w-1/2 h-[28vh] md:h-0 xl:h-full'>
                        <img loading='lazy' src={rightimg} alt="" className=' -translate-y-48 translate-x-10 ' />
                    </div>
                </div>



                <div className='absolute bottom-0 left-1 z-0'>
                    <img loading='lazy' src={leftbg} alt="" className='w-3/4' />
                </div>
            </div>
        </div>
    )
}

export default TalentShine