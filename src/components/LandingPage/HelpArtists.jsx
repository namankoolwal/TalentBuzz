import React from 'react'
import backgroundImg from '../../assets/images/Landingpage/helpArtists/backgroundImg.png'

const HelpArtists = () => {
  return (
    <div className='px-[5.5vw] my-[60px] md:my-[120px] h-full'>
        <div 
            className='h-full w-full py-10 bg-contain bg-center bg-no-repeat ' 
            style={{ backgroundImage: `url(${backgroundImg})` }}
        >
            <div className='flex flex-col items-center justify-center gap-10 p-8'>
                <div className='text-[3rem] md:text-[4rem]'> <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#A3219C] from-[0%] via-[#2B3DE1] via-[81%] to-[#F6577E]/50 to-[98%]'>Talentbuzzz</span> help Artists </div>
                <div className='text-[1.5rem] md:w-[100%] text-center text-pretty'>We know the struggles artists go through—standing out, getting noticed, and finding meaningful work. TalentBuzzz is here to help you overcome these challenges. Join us, and let your talent shine.</div>
            </div>
        </div>
    </div>
  )
}

export default HelpArtists
