import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import img1 from '../../assets/images/Landingpage/Yourtalent/img1.svg'

const Yourtalent = () => {
    const targetRef = useRef(null)
    const {scrollYProgress} =useScroll({
        target : targetRef
    })

    const opacity = useTransform(scrollYProgress, [0,1] , [1 , 0])
    const translateY = useTransform(scrollYProgress , [0,1] , ["30vh" , "50vh"])
  return (
    <div className='bg-[#181818] px-[5.5vw] py-20 my-[120px] min-h-screen w-full'>
        <div className='flex items-end '>
            <div className='left w-[41%] '>
                <h2 className='text-[4rem] font-semibold leading-tight'>Your Talent Searching Hub</h2>
            </div>

            <div className='right w-[55%] pb-5 text-[#EFAA76] '>
                <div className='text-[1.5rem] border-b border-[#EFAA76]'>Discover, Connect, Shine</div>
            </div>
        </div>

        <div className='w-full relative h-[600vh] mt-40'>
            <div className='flex items-start px-5 mt-10 h-[220vh] '>

            <div className='h-full w-1/2 flex items-center'>
                <motion.div ref={targetRef}
                
                style={{ opacity, translateY}}
                    className='carddiv w-full flex flex-col gap-5 '
                >
                    <h4 className='text-[3rem]'>Watch Short Videos</h4>
                    <div>
                        <p className='text-[0.857rem] w-1/2'>
                            Browse and watch artist showcase videos and get the quality entertainment you wished for.
                        </p>
                    </div>
                    <div>
                        <button className='border border-[#EFAA76] px-5 py-2 rounded-md'>Watch Now</button>
                    </div>
                </motion.div>
                </div>
                <div className='imagediv w-1/2  sticky top-0 flex justify-end'>
                    
                        <img src={img1} alt="img1" className='w-[60%] ' />
                </div>
            </div>


            
        </div>
    </div>
  )
}

export default Yourtalent