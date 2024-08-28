/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import UserModel from "./UserModel";
import getInTouch from '../../assets/images/Model/getInTouch.png';
import ArtistModel from "./ArtistModel";

const ModelParent = ({ text, showToggle, setShow }) => {
  const [show, setShowState] = useState(false);

  useEffect(() => {
    setShowState(showToggle);
  }, [showToggle]);

  const [formType, setFormType] = useState("user");

  return (
    <>
      <div className="z-[990]">
        {/* <!-- Modal toggle --> */}
        <span className="" onClick={() => setShowState(!show)}>
          {text}
        </span>

        {/* <!-- Main modal --> */}
        <div
          {...(show ? {} : { inert: "true" })}
          tabIndex="-1"
          className={`mainModel ${
            show ? "" : "hidden"
          } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-0rem)] max-h-full backdrop-blur-sm cursor-default bg-opacity-50 bg-gray-900 dark:bg-opacity-50 text-center`}
        >
          <div className="relative w-full p-5 md:p-0 max-w-[62rem] max-h-screen">
            <div className="relative w-full h-full bg-white p-2 rounded-xl overflow-hidden shadow dark:bg-white text-black">
              <div className="flex w-full h-full mx-auto overflow-hidden relative">
                <div className="leftSide mx-auto w-full h-full px-10 md:px-4 py-6 mt-3 ml-3 space-y-6">
                  <div className="flex flex-col items-start justify-start text-left">
                    <h4 className="font-semibold text text-[1.75rem] md:text-[1.5rem]">Get In Touch</h4>
                    <p className="text-[1.1rem] md:text-[0.90rem]">
                      Fill out the form below, and we’ll get back to you as soon
                      as possible.
                    </p>
                  </div>
                  <div className="mb-4 -mt-10 border-b border-gray-400">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
                      <li className="me-2 -mb-2 mt-2" role="presentation">
                        <button
                          className={`inline-block p-4 text-2xl md:text-base rounded-t-lg ${
                            formType === "artist" && "text-[#CF4672]"
                          }`}
                          type="button"
                          onClick={() => setFormType("artist")}
                        >
                          As Artist
                        </button>
                      </li>
                      <li className="me-2 border-r border-gray-400 mt-4"></li>
                      <li className="me-2 -mb-2 mt-2" role="presentation">
                        <button
                          className={`inline-block p-4 text-2xl md:text-base rounded-t-lg ${
                            formType === "user" && "text-[#CF4672]"
                          }`}
                          type="button"
                          onClick={() => setFormType("user")}
                        >
                          As User
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div id="default-styled-tab-content">
                    <div className="">
                      {formType === "artist" ? <ArtistModel /> : <UserModel />}
                    </div>
                  </div>
                </div>

                <div className="rightSide hidden w-full p-6 md:flex items-center justify-center overflow-hidden">
                  <img
                    loading="lazy"
                    src={getInTouch}
                    alt="getInTouch"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                <div className="flex items-start justify-between rounded-t absolute right-3 top-3 md:right-0 md:top-0.5">
                  <button
                    type="button"
                    className="text-gray-600 bg-transparent bg-gray-200 hover:bg-gray-300 hover:text-gray-900 rounded-full text-sm w-9 h-9 ml-auto inline-flex justify-center items-center"
                    onClick={() => setShow(false)}
                  >
                    <svg
                      className="w-6 h-6 md:w-4 md:h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModelParent;
