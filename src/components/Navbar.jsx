import { RiDownload2Fill } from "react-icons/ri";
// import { IoIosArrowDown } from "react-icons/io";
import logo from '../assets/images/logo.png'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='px-[2vw] md:px-[5.5vw] text-[1.125rem] py-3'>
        <div>
            <div className="logo flex items-center justify-between">
            <NavLink to={'/'}><img src={logo} alt="logo" className='w-[11vw]' /></NavLink>
                <NavLink to={'/features'} className={({isActive})=> `flex items-center gap-1 ${isActive ? "text-[#EFAA76]" : "text-white"}`}>Features </NavLink>
                <NavLink to={'/about'} className={({isActive})=> `flex items-center gap-1 ${isActive ? "text-[#EFAA76]" : "text-white"}`}>About Us </NavLink>
                <NavLink to={'/contact'} className={({isActive})=> `flex items-center gap-1 ${isActive ? "text-[#EFAA76]" : "text-white"}`}>Contact Us </NavLink>
                <button className='flex items-center gap-2 bg-[#0E78F3] px-2 py-2 rounded-md'>Download Now <span className='font-semibold text-[1.618vw]'><RiDownload2Fill /></span></button>
            </div>

        </div>
    </div>
  )
}

export default Navbar