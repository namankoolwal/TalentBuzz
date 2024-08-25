/* eslint-disable no-unused-vars */
import React from 'react'
import card2 from '../../assets/images/AboutUs/CardSection/card2.png'


const ImageSection = () => {
  return (
    <div className='px-[5.5vw] my-[60px] md:my-[120px] h-full'>
    <div className='flex h-[70vmin] w-full '>

    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className='bg-[#D9D9D9] w-full rounded-full h-full text-yellow-400 overflow-hidden'>
        <img src={card2} alt="" className='w-full h-full object-cover object-center' />
      </div>
    ))}
        
    </div>
    </div>
  )
}

export default ImageSection
