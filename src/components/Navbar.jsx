import React, { useState } from "react";
import { RiDownload2Fill, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="px-[2vw] md:px-[5.5vw] text-[1.125rem] py-3 relative">
      <div className="flex items-center justify-between gap-40">
        <NavLink to={"/"}>
          <img src={logo} alt="logo" className="w-[25vw] md:w-[11vw]" />
        </NavLink>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
           
              <RiMenu3Line className="text-white text-[2rem]" />
            
          </button>
        </div>
        <div className="hidden md:flex items-center justify-between  w-full gap-5">
          <NavLink
            to={"/features"}
            className={({ isActive }) =>
              `flex items-center gap-1 ${
                isActive ? "text-[#EFAA76]" : "text-white"
              }`
            }
          >
            Features
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              `flex items-center gap-1 ${
                isActive ? "text-[#EFAA76]" : "text-white"
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              `flex items-center gap-1 ${
                isActive ? "text-[#EFAA76]" : "text-white"
              }`
            }
          >
            Contact Us
          </NavLink>
          <button className="flex items-center gap-2 bg-[#0E78F3] px-2 py-2 rounded-md">
            Download Now{" "}
            <span className="font-semibold text-[1.618vw]">
              <RiDownload2Fill />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className=" top-0 right-0 w-[50vw] h-screen fixed bg-white backdrop-blur-md bg-opacity-25 flex flex-col gap-10 items-start p-5 transition-all duration-300 ease-in-out z-[999]">
        <button onClick={toggleMenu}>
           
              <RiCloseLine className="text-black text-[2.5rem] font-extrabold" />
            
          </button>
          <NavLink
            to={"/features"}
            onClick={toggleMenu}
            className="text-black py-2"
          >
            Features
          </NavLink>
          <NavLink
            to={"/about"}
            onClick={toggleMenu}
            className="text-black py-2"
          >
            About Us
          </NavLink>
          <NavLink
            to={"/contact"}
            onClick={toggleMenu}
            className="text-black py-2"
          >
            Contact Us
          </NavLink>
          <button className="flex items-center gap-2 bg-[#0E78F3] text-white px-2 py-2 rounded-md mt-4 w-full justify-center">
            Download Now{" "}
            <span className="font-semibold">
              <RiDownload2Fill />
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;




//  {isOpen ? (
//   <RiCloseLine className="text-white text-[2rem]" />
// ) : (