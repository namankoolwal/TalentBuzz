/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Model from "./Model";

const ModelParent = ({ text }) => {
  const [show, setShow] = useState(false);

  const [formType, setFormType] = useState("artist");



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
          } overflow-y-auto overflow-x-hidden fixed top-0  right-0 left-0  z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-0rem)] max-h-full backdrop-blur-sm bg-gray-100 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 text-center `}
        >
          <div className="relative w-full max-w-4xl max-h-screen">
            {/* <!-- Modal content --> */}
            <div className="relative w-full h-full bg-white rounded-lg overflow-hidden shadow dark:bg-white text-black">
              {/* <!-- Modal header --> */}
              {/* <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-black">
                    Terms of Service
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={()=>setShow(false)}>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div> */}
              {/* <!-- Modal body --> */}

              <div className="flex overflow-hidden">
                <div className="leftSide w-full p-6 space-y-6">
                  <div className="flex flex-col items-start justify-start text-left">
                    <h4>Get In Touch</h4>
                    <p>
                      Fill out the form below, and we’ll get back to you as soon
                      as possible.
                    </p>
                  </div>
                  <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                    <ul
                      className="flex flex-wrap -mb-px text-sm font-medium text-center"
                      id="default-styled-tab"
                      data-tabs-toggle="#default-styled-tab-content"
                      data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"
                      data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
                      role="tablist"
                    >
                      <li className="me-2" role="presentation">
                        <button
                          className="inline-block p-4 border-b-2 rounded-t-lg"
                         
                          type="button"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                          onClick={()=>setFormType("artist")}
                        >
                          As Artist
                        </button>
                      </li>
                      <li className="me-2" role="presentation">
                        <button
                          className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                         
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
                    <div
                      className=" p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >

                    {formType === "artist" ? <>This is Artist model <Model/></> : <>This is User model <Model/> </>}
                      
                    </div>
                   
                  </div>
                </div>

                <div className="rightSide bg-red-400 w-full p-6 space-y-6"></div>
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
