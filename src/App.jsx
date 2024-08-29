/* eslint-disable no-unused-vars */
import React from 'react'
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ReactLenis } from 'lenis/react'

const App = () => {
 

  return (
    <ReactLenis root>
    <div className=' text-white w-full h-full '>
      <RouterProvider router={router} />
    </div>
    </ReactLenis>
  )
}

export default App