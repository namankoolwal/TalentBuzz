import React from 'react'
import { RiDownload2Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import logo from '../assets/images/logo.png'

const Navbar = () => {
  return (
    <div className='px-[5.5vw] text-[1.125rem] py-3'>
        <div>
            <div className="logo flex items-center justify-between">
                <img src={logo} alt="logo" className='w-[11vw]' />
                <span className='flex items-center gap-1'>Features <IoIosArrowDown /></span>
                <span className='flex items-center gap-1'>About Us <IoIosArrowDown /></span>
                <span className='flex items-center gap-1'>Contact Us <IoIosArrowDown /></span>
                <button className='flex items-center gap-2 bg-[#0E78F3] px-2 py-2 rounded-md'>Download Now <span className='font-semibold text-[1.618vw]'><RiDownload2Fill /></span></button>
            </div>

        </div>
    </div>
  )
}

export default Navbar