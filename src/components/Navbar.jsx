/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { RiDownload2Fill, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { useLenis } from "lenis/react";

const Navbar = () => {

  const lenis = useLenis();

  const handelContact = () => {
    // Scroll to the bottom smoothly using Lenis
    lenis.scrollTo(document.body.scrollHeight, {
      duration: 1, // Adjust the duration as needed (seconds)
    });
  };

  const handelClick =()=>{
    confirm("We Know you are super hyped and can't wait!\nHang in there, the excitement is building!")
  }
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="px-[3vw] md:px-[5.5vw] text-[1.125rem] py-5 relative">
      <div className="flex items-center justify-between gap-40">
        <NavLink to={"/"}>
          <img loading='lazy' src={logo} alt="logo" className="w-[25vw] md:w-[12vw]" />
        </NavLink>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <RiMenu3Line className="text-white text-[2.5rem] font-extrabold" />
          </button>
        </div>
        <div className="hidden md:flex items-center justify-between w-full gap-5">
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
          <span onClick={handelContact}
            
            className={
              `flex items-center gap-1 cursor-pointer`
            }
          >
            Contact Us
          </span>
          <button className="flex items-center gap-2 bg-[#0E78F3] px-2 py-2 rounded-md"
          onClick={handelClick}
          >
            Download Now{" "}
            <span className="font-semibold text-[1.618vw]">
              <RiDownload2Fill />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-[55vw] h-screen bg-white backdrop-blur-md bg-opacity-15 flex flex-col gap-10 items-start p-5 transition-transform duration-500 ease-in-out z-[999] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button onClick={toggleMenu}>
          <RiCloseLine className="text-black text-[2.5rem] font-extrabold bg-white rounded-full p-1" />
        </button>
        <NavLink
          to={"/features"}
          onClick={toggleMenu}
          className={({isActive})=>`${
                isActive ? "text-[#EFAA76]" : "text-white"
              } text-2xl font-bold py-2 mt-10 delay-100 transform transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0 opacity-100 " : "translate-x-10 opacity-0"
          }`}
        >
          Features
        </NavLink>
        <NavLink
          to={"/about"}
          onClick={toggleMenu}
          className={({isActive})=>`${
                isActive ? "text-[#EFAA76]" : "text-white"
              } text-2xl font-bold py-2 transform transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0 opacity-100 delay-200" : "translate-x-10 opacity-0"
          }`}
        >
          About Us
        </NavLink>
        <div
          
          onClick={handelContact}
          className={`text-white text-2xl font-bold py-2 cursor-pointer transform transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0 opacity-100 delay-300" : "translate-x-10 opacity-0"
          }`}
        >
          Contact Us
        </div>
        <button
          className={`inline-flex font-bold text-xl items-center gap-2 bg-[#0E78F3] text-white px-2 py-4 rounded-xl mt-4 w-full justify-center transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0 opacity-100 delay-[400ms]" : "translate-x-10 opacity-0"
          }`}
          onClick={handelClick}
        >
          Download Now{" "}
          <span>
            <RiDownload2Fill />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
