import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import testimonials from '../../assets/images/Landingpage/Testimonials/testimonials.svg'

const Testimonials = () => {
  return (
    <div className='px-[3.5vw] mt-[120px] mb-[120px] md:mb-[0px] md:min-h-screen w-full '>
        <div className='flex flex-col justify-center items-center gap-10 '>
            <div className='flex flex-col justify-center items-center gap-[1rem]'>
                <h2 className='font-semibold text-[4rem]'>Testimonials</h2>
                <p className='text-[1.5rem] w-[60%] text-center'>Where Artistry Meets Innovation: Hear What Our Artists and Creators Have to Say!</p>
            </div>
            <div className='w-fit '>
                <img src={testimonials} className='w-fit h-fit object-contain ' alt="" />
            </div>
            <div>
            <button className='bg-[#DB4469] text-white w-fit mt-[16px] px-3 py-2 rounded-md flex items-center justify-between gap-3'>Book Now <FaArrowRightLong /></button>

            </div>
        </div>
    </div>
  )
}

export default Testimonials