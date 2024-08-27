# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh









/* eslint-disable no-unused-vars */
import React from 'react'
import { Tilt } from 'react-tilt'
import HomeScreen from '../../assets/images/FeaturesPage/TiltCard/HomeScreen.png'
import Two from '../../assets/images/FeaturesPage/TiltCard/Two.png'
import Three from '../../assets/images/FeaturesPage/TiltCard/Three.png'
import Five from '../../assets/images/FeaturesPage/TiltCard/Five.png'
import Mic from '../../assets/images/FeaturesPage/TiltCard/Mic.png'
import Purse from '../../assets/images/FeaturesPage/TiltCard/Purse.png'

const TiltCard = () => {
    const TiltOptions = {
        scale: 1, 
        perspective: 5000,
        max: 20,
    }
    return (
        <div className='px-[5.5vw] my-[60px] md:my-[120px] h-full'>
            <div className='grid grid-cols-2 gap-3 md:gap-5'>
                {/* ======================================================== */}

                <Tilt options={TiltOptions} className='one bg-[#191A1F] rounded-xl p-5 row-span-2'>
                    <div className='flex flex-col w-full h-full justify-center gap-10'>
                        <span className='text-[#909090] font-semibold'>For Users</span>
                        <h5 className='text-center text-[1rem] md:text-[1.9rem] font-semibold'>
                            Discover, book, and enjoy top-tier artists for any occasion.
                        </h5>
                        <div className='p-5 '>
                            <img src={HomeScreen} alt="HomeScreen" className='mx-auto w-3/4 md:w-auto' />
                        </div>
                    </div>
                </Tilt>
                {/* ======================================================== */}

                <Tilt options={TiltOptions} className='two bg-[#191A1F] rounded-xl p-5'>
                    <div className='flex flex-col w-full h-full justify-center gap-10'>
                        <h5 className='text-center text-[1rem] md:text-[1.9rem] w-3/4 mx-auto font-semibold bg-gradient-to-r from-[#DB4469] to-[#0266FF] bg-clip-text text-transparent'>
                            Effortless Booking and Management
                        </h5>
                        <div className='p-5 pt-0'>
                            <img src={Two} alt="HomeScreen" className='mx-auto  md:w-auto' />
                        </div>
                    </div>

                </Tilt>
                {/* ======================================================== */}

                <Tilt options={TiltOptions} className='three bg-[#191A1F] rounded-xl p-5'>
                    <div className='flex flex-col gap-4 justify-center  w-full h-full md:gap-0'>
                        <span className='text-[#909090] font-semibold'>For Users</span>
                        <h5 className='text-center text-[1rem] md:text-[1.9rem] w-3/4 mx-auto font-semibold'>
                            Choose Your Own Artist
                        </h5>
                        <div className='p-5 '>
                            <img src={Three} alt="HomeScreen" className='mx-auto ' />
                        </div>
                    </div>
                </Tilt>
                {/* ======================================================== */}

                <Tilt options={TiltOptions} className='four w-[85%] bg-[#191A1F] rounded-xl p-5'>
                    <div className='flex flex-col gap-4   w-full h-full md:gap-0'>
                        <span className='text-[#909090] font-semibold'>For Artists</span>
                        <h5 className='text-center text-[1rem] md:text-[1.9rem] mx-auto font-semibold bg-gradient-to-r from-[#DB4469] to-[#0266FF] bg-clip-text text-transparent'>
                            Search Artist Around You
                        </h5>

                    </div>
                </Tilt>
                {/* ======================================================== */}

                <div  className='five w-[115%] -translate-x-[13%] rounded-xl '>
                <Tilt options={TiltOptions} className='rounded-xl p-5 bg-[#191A1F]'>
                    <div className='flex flex-row '>
                        <div className=' w-[25%]   '>
                            <div className=' rounded-full mx-auto flex items-center justify-center w-full h-full'>
                                <img src={Mic} alt="Mic" className=' bg-white rounded-full p-2 w-10 md:w-12 object-contain' />
                            </div>
                        </div>
                        <div className='flex flex-col w-full h-full justify-center gap-8'>
                            <h5 className='text-center text-[1rem] md:text-[1.9rem]  mx-auto font-semibold'>
                                Hire under your Budget
                            </h5>
                            <div className='p-5 '>
                                <img src={Five} alt="HomeScreen" className='mx-auto  md:w-auto' />
                            </div>
                        </div>
                        <div className=' w-[25%]'>
                            <div className=' rounded-full mx-auto flex items-end pb-8 justify-center w-full h-full'>
                                <img src={Purse} alt="Mic" className=' bg-white rounded-full p-2 w-10 md:w-12 object-contain' />
                            </div>
                        </div>

                    </div>
                    </Tilt>
                </div>
            </div>
        </div>
    )
}

export default TiltCard
