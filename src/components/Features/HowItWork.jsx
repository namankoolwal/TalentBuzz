/* eslint-disable no-unused-vars */
import React from 'react'
import HowItWorkImg from '../../assets/images/FeaturesPage/HowItWork/HowItWorkImg.png'
import ConnectDot from '../../assets/images/FeaturesPage/HowItWork/ConnectDot.png'
import HoriConnectDot from '../../assets/images/FeaturesPage/HowItWork/HoriConnectDot.png'
import first from '../../assets/images/FeaturesPage/HowItWork/first.png'
import second from '../../assets/images/FeaturesPage/HowItWork/second.png'
import third from '../../assets/images/FeaturesPage/HowItWork/third.png'
import fourth from '../../assets/images/FeaturesPage/HowItWork/fourth.png'

const HowItWork = () => {
  return (
    <section className="px-[5.5vw] my-[60px] md:my-[120px] h-full">
      <div
        className='h-full w-full bg-contain bg-center bg-no-repeat '
      >
        <div className='flex flex-col items-center justify-center gap-10 '>
          <div className='text-[#5B61FA] text-[2rem] md:text-[1.7rem]  font-semibold'>HOW DOES IT WORKS ?</div>
          <div className='text-[2.4rem] md:text-[3.2rem] font-semibold  text-center w-full'> How It Works for Artists </div>
          <div className='text-[1rem] w-full h-full rounded-xl overflow-y-hidden py-20 md:py-0 bg-[#191A1F]'>
            {/* <img loading='lazy' src={HowItWorkImg} alt="" /> */}
            <div className='hidden  md:flex relative flex-col gap-24 md:gap-14 w-full h-full py-32'>
              <div className=' md:relative flex gap-20 md:gap-5 flex-row items-center justify-between px-14 w-full h-full'>
                <div>

                  <img src={first} alt="" className=' w-full' />
                </div>
                <div className=' '>
                  <img src={ConnectDot} alt="ConnectDot" className=' w-1/2 rotate-90 md:rotate-0 mx-auto md:w-full ' />
                </div>
                <div>

                  <img src={second} alt="" className=' w-full -translate-y-2' />
                </div>

                <div><img src={ConnectDot} alt="ConnectDot" className='w-1/2 rotate-90 md:rotate-0 mx-auto md:w-full' /></div>
                <div>

                  <img src={third} alt="" className=' w-full' />
                </div>

                <div><img src={ConnectDot} alt="ConnectDot" className='w-1/2 rotate-90 md:rotate-0 mx-auto md:w-full' /></div>
                <div>

                  <img src={fourth} alt="" className=' w-full' />
                </div>

              </div>
              <div className='bottom flex gap-56 md:gap-32 flex-col md:flex-row items-center justify-around w-full h-full text-2xl md:text-base'>
                <div className='flex flex-col gap-4 items-center justify-center'>
                  <span className=' bg-black rounded-full flex items-center justify-center w-6 h-6 text-2xl md:text-sm p-7 font-semibold md:p-4'><span className='-mb-1'>1</span></span>
                  <span>Download The app</span>
                </div>

                <div className='flex flex-col gap-4 items-center justify-center'>
                  <span className=' bg-black rounded-full flex items-center justify-center w-6 h-6 text-2xl md:text-sm p-7 font-semibold md:p-4'><span className='-mb-1'>2</span></span>
                  <span>Create a Profile</span>
                </div>

                <div className='flex flex-col gap-4 items-center justify-center'>
                  <span className=' bg-black rounded-full flex items-center justify-center w-6 h-6 text-2xl md:text-sm p-7 font-semibold md:p-4'><span className='-mb-1'>3</span></span>
                  <span>Upload Your Work</span>
                </div>

                <div className='flex flex-col gap-4 items-center justify-center'>
                  <span className=' bg-black rounded-full flex items-center justify-center w-6 h-6 text-2xl md:text-sm p-7 font-semibold md:p-4'><span className='-mb-1'>4</span></span>
                  <span>Get Hired and connect</span>
                </div>
              </div>
            </div>
            {/* ============================================================================================================== */}
            <div className='flex md:hidden relative flex-col w-full h-full py-2'>
              <div className='top  relative flex gap-14  flex-col md:flex-row items-center justify-center w-full h-full'>

                <div className='flex flex-col gap-4 items-center justify-center text-3xl'>
                  <img src={first} alt="" className=' w-2/4 md:w-fit' />
                  <span className=' bg-black rounded-full flex items-center justify-center w-6 h-6  md:text-sm p-7 font-semibold md:p-4'><span className='-mb-1'>1</span></span>
                  <span>Download The app</span>
                </div>
                <div><img src={HoriConnectDot} alt="ConnectDot" className='w-3/4 py-2 mx-auto md:w-full' /></div>





                <div className='flex flex-col gap-4 items-center justify-center text-3xl'>
                  <img src={second} alt="" className=' w-2/4 md:w-fit translate-x-3' />
                  <span className=' bg-black rounded-full flex items-center justify-center w-6 h-6 text-2xl md:text-sm p-7 font-semibold md:p-4'><span className='-mb-1'>2</span></span>
                  <span>Create a Profile</span>
                </div>
                <div><img src={HoriConnectDot} alt="ConnectDot" className='w-3/4 py-2 mx-auto md:w-full' /></div>






                <div className='flex flex-col gap-4 items-center justify-center text-3xl'>
                  <img src={third} alt="" className=' w-2/4 md:w-fit translate-x-3' />
                  <span className=' bg-black rounded-full flex items-center justify-center w-6 h-6 text-2xl md:text-sm p-7 font-semibold md:p-4'><span className='-mb-1'>3</span></span>
                  <span>Upload Your Work</span>
                </div>
                <div><img src={HoriConnectDot} alt="ConnectDot" className='w-3/4 py-2 mx-auto md:w-full' /></div>




                <div className='flex flex-col gap-4 items-center justify-center text-3xl'>
                  <img src={fourth} alt="" className=' w-2/4 md:w-fit' />
                  <span className=' bg-black rounded-full flex items-center justify-center w-6 h-6 text-2xl md:text-sm p-7 font-semibold md:p-4'><span className='-mb-1'>4</span></span>
                  <span>Get Hired and connect</span>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWork
