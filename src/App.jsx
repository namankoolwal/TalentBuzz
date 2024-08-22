/* eslint-disable no-unused-vars */
import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage/LandingPage'
import Footer from './components/Footer'
import { RouterProvider } from 'react-router-dom';
import router from './router';

const App = () => {

const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className=' text-white w-full h-full '>
      <RouterProvider router={router} />
    </div>
  )
}

export default App