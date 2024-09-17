/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ReactLenis } from 'lenis/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContext } from './components/Context/context'

const App = () => {

  const [showToast, setShowToast] = useState('');
  const [toastMessage, setToastMessage] = useState('')

  useEffect(() => {
    if (showToast === 'success') {

      toast.success(toastMessage, {
      })
     
    }
    if (showToast === 'error') {

      toast.error(toastMessage, {
      })
    }
    setShowToast('')
  }, [showToast, toastMessage])



  return (
    <>
    <ToastContext.Provider value={{setShowToast,setToastMessage}}> 
      <ReactLenis root>
        <ToastContainer
          position="top-left"
          theme="dark"
          pauseOnHover={false}
          pauseOnFocusLoss={false}
          className="text-xl md:text-base z-[9999]"
        />
        {/* <button className='bg-white' onClick={()=>{setShowToast(true)}}>hskjhdkfjd</button> */}
        <div className=' text-white w-full h-full '>
          <RouterProvider router={router} />
        </div>
      </ReactLenis>
      </ToastContext.Provider>
    </>
  )
}

export default App