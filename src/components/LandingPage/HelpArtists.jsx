import backgroundImg from '../../assets/images/Landingpage/helpArtists/backgroundImg.png'

const HelpArtists = () => {
  return (
    <div className='md:px-[5.5vw] my-[60px] md:my-[120px] h-full'>
      <div
        className='h-full w-full py-10 bg-contain bg-center bg-no-repeat '
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className='flex flex-col items-center justify-center gap-10 md:p-8'>
          <div className='text-[2.6rem] md:text-[4rem]'>How <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#A3219C] from-[0%] via-[#2B3DE1] via-[81%] to-[#F6577E]/50 to-[98%]'>Talentbuzzz</span> help Artists </div>
          <div className='text-[1.5rem] w-[100%]  text-center mb-0 px-4 text-pretty'>Let Talentbuzzz be your platform to grow, connect, and let your talent shine!</div>
          
          <div className='text-[1.2rem] w-[100%] text-red-500 font-semibold  text-pretty'>
          <ul className="flex justify-center items-center gap-8 px-3 md:px-32 flex-wrap ">

              <li className='bg-white rounded-full px-5 md:px-10 py-3'>Build Your Portfolio</li>
              <li className='bg-white rounded-full px-5 md:px-10 py-3'>Find Opportunities</li>
              <li className='bg-white rounded-full px-5 md:px-10 py-3'>Get Noticed</li>
              <li className='bg-white rounded-full px-5 md:px-10 py-3'>Gain Visibility</li>
              <li className='bg-white rounded-full px-5 md:px-10 py-3'>Support & Community</li>
          </ul>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpArtists
