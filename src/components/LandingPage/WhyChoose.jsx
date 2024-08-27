import React from 'react'
import card1 from '../../assets/images/Landingpage/whychoose/card1.svg'
import card2 from '../../assets/images/Landingpage/whychoose/card2.svg'
import card3 from '../../assets/images/Landingpage/whychoose/card3.svg'

const WhyChoose = () => {
  return (
    <div className='px-[5.5vw] my-[60px] lg:my-[120px] h-full'>
      <div className='flex flex-col items-center gap-[40px] lg:gap-[2.5rem] h-full'>
        <h2 className='text-[3rem] lg:text-[4rem]'>Why Choose <span className='text-[#EFAA76]'>Talentbuzzz</span></h2>
        <div className='cardContainer flex-row flex-wrap md:flex-nowrap flex items-center gap-20 lg:gap-10 '>
        {/* ********** */}
          <div className='card gradient-border p-8 h-full w-full'>
          <span></span>
          <div className='cardcontent relative flex flex-col justify-between gap-8 '>
              <img loading='lazy' src={card1} alt="" className='w-14'/>
              <h3 className='text-[2rem]'>Streamlined Booking Process</h3>
              <p className='text-[1.125rem]'>Easily search and book artists with our user-friendly platform</p>
              <button className='bg-[#EFAA76] p-2 rounded-md text-black w-fit'>Book Now</button>
          </div>
          </div>
        {/* ********** */}

          <div className='card h-full gradient-border p-8 w-full'>
          <span></span>
          <div className='cardcontent relative flex flex-col justify-between gap-8 '>
              <img loading='lazy' src={card2} alt="" className='w-20'/>
              <h3 className='text-[2rem]'>Discover Hidden Talents</h3>
              <p className='text-[1.125rem]'>Advanced search capabilities for finding artists by genre, location</p>
              <button className='bg-[#EFAA76] p-2 rounded-md text-black w-fit'>Book Now</button>
          </div>
          </div>
        {/* ********** */}

          <div className='card gradient-border p-8 h-full w-full'>
          <span></span>
          <div className='cardcontent relative flex flex-col justify-between gap-8'>
              <img loading='lazy' src={card3} alt="" className='w-20'/>
              <h3 className='text-[2rem]'>Comprehensive Artist Profiles</h3>
              <p className='text-[1.125rem]'>View detailed profiles, reviews, and performance videos of artists</p>
              <button className='bg-[#EFAA76] p-2 rounded-md text-black w-fit'>Book Now</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChoose
