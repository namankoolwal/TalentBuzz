/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import UserModel from "./UserModel";
import getInTouch from '../../assets/images/Model/getInTouch.png'

const ModelParent = ({ text }) => {
  const [show, setShow] = useState(false);

  const [formType, setFormType] = useState("user");



  return (
    <>
      <div className="z-[999]">
        {/* <!-- Modal toggle --> */}
        <span className="" type="button" onClick={() => setShow(!show)}>
          {text}
        </span>

        {/* <!-- Main modal --> */}
        <div
          tabIndex="-1"
          aria-hidden="true"
          className={`${
            show ? " " : "hidden"
          } overflow-y-auto overflow-x-hidden fixed top-0  right-0 left-0  z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-0rem)] max-h-full backdrop-blur-sm cursor-default bg-opacity-50 bg-gray-900 dark:bg-opacity-50 text-center `}
        >
          <div className="relative w-full max-w-[62rem] max-h-screen">
            {/* <!-- Modal content --> */}
            <div className="relative w-full h-full bg-white p-1 rounded-xl overflow-hidden shadow dark:bg-white text-black">
            
              
              {/* <!-- Modal body --> */}
              <div className="flex w-full h-full overflow-hidden relative">
              
                <div className="leftSide w-full h-full px-4 py-6 mt-3 ml-3 space-y-6">
                  <div className="flex flex-col items-start justify-start text-left">
                    <h4 className="font-semibold text text-[1.5rem]">Get In Touch</h4>
                    <p className="text-[0.90rem]">
                      Fill out the form below, and we’ll get back to you as soon
                      as possible.
                    </p>
                  </div>
                  <div className="mb-4 -mt-10 border-b border-gray-400">
                    <ul
                      className="flex flex-wrap -mb-px text-sm font-medium text-center "
                    >
                      <li className="me-2 -mb-2 mt-2" role="presentation">
                        <button
                          className={`inline-block p-4 rounded-t-lg ${formType === "artist" &&  'text-[#CF4672]'} `}
                         
                          type="button"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                          onClick={()=>setFormType("artist")}
                        >
                          As Artist
                        </button>
                      </li>
                      <li className=" me-2 border-r border-gray-400 mt-4  "></li>
                      <li className="me-2 -mb-2 mt-2" role="presentation">
                        <button
                          className={`inline-block p-4 rounded-t-lg ${formType === "user" &&  'text-[#CF4672]'}`}
                         
                          type="button"
                          role="tab"
                          aria-controls="dashboard"
                          aria-selected="false"
                          onClick={()=>setFormType("user")}
                        >
                          As User
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div id="default-styled-tab-content">
                    <div className="">

                    {formType === "artist" ? <>This is Artist model <UserModel/> </> : <><UserModel/> </>}
                      
                    </div>
                   
                  </div>
                </div>

                <div className="rightSide w-full p-6 flex items-center justify-center overflow-hidden">
                  <img src={getInTouch} alt="getInTouch" className="w-full h-full object-cover rounded-xl" />
                </div>

                <div className="flex items-start justify-between rounded-t absolute right-0 top-0.5">
                
                <button type="button" className="text-gray-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm w-7 h-7 ml-auto inline-flex justify-center items-center " onClick={()=>setShow(false)}>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
              </div>

              {/* <!-- Modal footer --> */}
              {/* <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=> (alert("i accept"))}>I accept</button>
                <button data-modal-hide="default-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>            
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModelParent;
