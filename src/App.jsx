import React from 'react'
import Navbar from './components/Navbar'

import LandingPage from './components/LandingPage/LandingPage'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=' text-white w-full h-full '>
      <Navbar/>
      <LandingPage/>
      <Footer/>
    </div>
  )
}

export default App