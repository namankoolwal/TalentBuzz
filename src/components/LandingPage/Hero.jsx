import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import right from '../../assets/images/Landingpage/hero/right.png'
import bg from '../../assets/images/Landingpage/hero/bg.png'

const Hero = () => {
  return (
    <div className='relative px-[5.5vw] my-[120px] z-[10]  '>
      <div className="hero flex items-start gap-3 justify-between relative z-[10] ">
        <div className='left w-[50%] flex flex-col gap-[24px]'>

          <h1 className='font-bold text-[2.5rem] md:text-[4rem] leading-tight'>
            <div>Let Your
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#7E317A] via-[#DB4469] to-[#EFAA76] '> Talent</span>
            </div>
            <div>Be Seen.</div>
          </h1>
          <p className='text-[1.25rem]'>In a world brimming with diversity and uniqueness, every individual possesses a unique set of talents waiting to be discovered.. It's an invitation to uncover and showcase the remarkable abilities that lie within each of us.</p>
          <button className='bg-[#DB4469] text-white w-fit mt-[16px] px-3 py-2 rounded-md flex items-center justify-between gap-3'>Book Now <FaArrowRightLong /></button>
        </div>
        <div className='right w-[50%] flex flex-col gap-20'>
          <div>
            <img src={right} alt="hero" className='w-full' />
          </div>
          <div className='flex items-center gap-10'>
            <button className='bg-[#262626] rounded-lg p-2 flex items-center gap-1'>
              <svg className="w-7" viewBox="-9 0 274 274" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    d="M188.81319,178.874645 C221.272218,161.051727 245.880297,147.470853 248.001319,146.415618 C254.78648,142.806714 261.79324,133.256838 248.001319,125.838536 C243.548228,123.506467 219.573289,110.347687 188.81319,93.3795092 L146.171146,136.443648 L188.81319,178.874645 Z"
                    fill="#FFD900"></path>
                  <path
                    d="M146.171146,136.443648 L10.3940643,273.286517 C13.5808739,273.708611 17.1792251,272.864423 21.4212696,270.532353 C30.3274526,265.657168 124.739324,214.098388 188.81319,178.885198 L146.171146,136.443648 Z"
                    fill="#F43249"></path>
                  <path
                    d="M146.171146,136.443648 L188.81319,93.5905562 C188.81319,93.5905562 30.9711459,7.45172685 21.4212696,2.36549437 C17.8229184,0.233919759 13.7919209,-0.399221214 10.1830173,0.233919759 L146.171146,136.443648 Z"
                    fill="#00EE76"></path>
                  <path
                    d="M146.171146,136.443648 L10.1830173,0.233919759 C4.6641385,1.51075405 0,6.38593954 0,16.3579099 C0,32.270853 0,244.003747 0,257.162527 C0,266.290309 3.60890354,272.864423 10.3940643,273.497564 L146.171146,136.443648 Z"
                    fill="#00D3FF"></path>
                </g>
              </svg> Download from Google Play
            </button>
            <button className='bg-[#262626] rounded-lg p-2 flex items-center gap-1'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" class="fill-current w-7 h-7 text-gray-50">
                <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
              </svg>
              Download from App Store
            </button>
          </div>
        </div>
      </div>
      <div className='background absolute top-12 bottom-0 right-0 z-[1] overflow-hidden'>
        <img src={bg} alt="background" />
      </div>
    </div>
  )
}

export default Hero
