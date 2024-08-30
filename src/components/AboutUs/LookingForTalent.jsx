/* eslint-disable no-unused-vars */
import React from 'react'

const LookingForTalent = ({handelClick}) => {
  return (
    <section className='px-[5.5vw] my-[60px] md:my-[120px] h-full '>
    <div 
        className='h-full w-full py-12 rounded-2xl' 
        
    >
        <div className='flex flex-col md:items-center justify-center gap-10 md:px-8'>
            <div className='font-bold text-[2.5rem] md:text-[2.5rem]  md:text-center'> 
            If You’re Looking for Talent, Get in Touch with Us
            </div>
            <div className='text-[1.5rem] md:text-[1.5rem] md:w-[90%] md:text-center text-pretty'>
            Are you in need of exceptional talent for your next project or event? Talentbuzzz offers a streamlined solution to discover, connect, and book the perfect artists. Whether you’re seeking a performer, a creative collaborator, or anything in between, our platform makes the process simple and efficient.
            </div>
            <button className='bg-[#EFAA76] text-black w-fit text-2xl md:text-lg px-5 py-2 rounded-md flex items-center justify-center gap-3' onClick={handelClick}>Contact Us</button>
        </div>
    </div>
</section>
  )
}

export default LookingForTalent
