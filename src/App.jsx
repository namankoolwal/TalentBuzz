/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ReactLenis } from "lenis/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModelParent from "./components/GetInTouchModel/ModelParent";

const App = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 5000);
  }, []);

  return (
    <>
      <ReactLenis root>
        <ToastContainer
          position="top-left"
          theme="dark"
          pauseOnHover={false}
          pauseOnFocusLoss={false}
          className="text-xl md:text-base z-[9999]"
        />
        {show && <ModelParent showToggle={show} setShow={setShow} />}
        {/* <button className='bg-white' onClick={()=>{setShowToast(true)}}>hskjhdkfjd</button> */}
        <div className=" text-white w-full h-full ">
          <RouterProvider router={router} />
        </div>
      </ReactLenis>
    </>
  );
};

export default App;
