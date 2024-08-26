/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import img1 from "../../assets/images/Landingpage/Yourtalent/img1.png";
import img2 from "../../assets/images/Landingpage/Yourtalent/img2.png";

gsap.registerPlugin(ScrollTrigger);


const YourtalentOne = () => {
    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.set(".photo:not(:first-child)", { opacity: 1, y: 1200 });
            gsap.set(".details>*", { opacity: 0, y: 200  });

            const animation = gsap.to(".photo:not(:first-child)", {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 1,
            });

            const animation2 = gsap.to(".details>*", {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 3,
            });

            ScrollTrigger.create({
                trigger: ".gallery",
                start: "top top",
                end: "bottom bottom",
                animation: animation,
                scrub: true,
                // markers: true,
            });

            ScrollTrigger.create({
                trigger: ".gallery",
                start: "top top",
                end: "bottom bottom",
                animation: animation2,
                scrub: true,
                // markers: true,
            });      
            
            
            // ScrollTrigger.create({
            //         trigger: ".details:nth-of-type(2)", // Second section (Connect)
            //         start: "top center",
            //         end: "bottom top",
            //         onEnter: () => gsap.to(".backgroundChange", { backgroundColor: "black" }),
            //         // onLeave: () => gsap.to(".backgroundChange", { backgroundColor: "#181818" }),
            //         // onEnterBack: () => gsap.to(".backgroundChange", { backgroundColor: "black" }),
            //         onLeaveBack: () => gsap.to(".backgroundChange", { backgroundColor: "#181818" }),
            //         // markers: true,
            //     });
        });

        return () => ctx.revert();
    }, []);


    
    

    return (
        <div className="backgroundChange bg-black px-[5.5vw] py-20 my-[60px] md:my-[120px]">
            <div className="flex items-end ">
                <div className="left w-[49%] md:w-[41%] ">
                    <h2 className="text-[2.5rem] md:text-[4rem] font-semibold leading-tight">
                        Your Talent Searching Hub
                    </h2>
                </div>

                <div className="right w-[50%] md:w-[55%] pb-3 md:pb-5 text-[#EFAA76] ">
                    <div className="text-[1.5rem] border-b border-[#EFAA76]">
                        Discover, Connect, Shine
                    </div>
                </div>
            </div>
            <div className=" gallery  -yellow-400 mt-40 flex flex-col-reverse lg:flex-row relative">
                <div className="leftblock h-full w-full lg:w-1/2 ml-auto  -violet-200 ">
                <div className="work-text w-[90%] mx-auto">
                <div className="details">
                    <div className="h-[100vw] lg:h-screen font-bold flex flex-col justify-center w-full ml-auto text-white gap-5">
                        <h4 className="text-[1rem] text-[#EFAA76]">DISCOVER</h4>
                        <div>
                            <p className="text-[1.5rem] lg:text-[1.35rem] lg:w-1/2">
                            Showcase your talent to a global and let opportunities find you.
                            </p>
                        </div>
                        <div className="">
                            <button className="border border-[#EFAA76] font-normal px-5 py-2 rounded-md">
                                Contact Now
                            </button>
                        </div>
                    </div>
                </div>
                    {/*************************  */}
                <div className="details">
                    <div className="h-[100vw] lg:h-screen font-bold flex flex-col justify-center w-full ml-auto text-white gap-5">
                        <h4 className="text-[1rem] text-[#EFAA76]">CONNECT</h4>
                        <div>
                            <p className="text-[1.5rem] lg:text-[1.35rem] lg:w-1/2">
                            Easily connect with artists tailored to your event needs and requirements.
                            </p>
                        </div>
                        <div className="">
                            <button className="border border-[#EFAA76] font-normal px-5 py-2 rounded-md">
                                Contact Now
                            </button>
                        </div>
                    </div>
                </div>
                    {/* *********************************** */}
                <div className="details ">

                    <div className="h-[100vw] lg:h-screen font-bold flex flex-col justify-center w-full ml-auto text-white gap-5 ">
                        <h4 className="text-[1rem] text-[#EFAA76]">HIRE</h4>
                        <div>
                            <p className="text-[1.5rem] lg:text-[1.35rem] lg:w-1/2">
                            Hire the perfect artist by filtering options like genre, location, and availability.
                            </p>
                        </div>
                        <div className="">
                            <button className="border border-[#EFAA76] font-normal px-5 py-2 rounded-md">
                                Contact Now
                            </button>
                        </div>
                    </div>
                </div>
                    {/* *********************************** */}
                    </div>
                </div>
                <div className="rightblock backgroundChange bg-black  md:py-10 lg:py-0 -green-400 sticky top-0 lg:relative w-full lg:w-1/2  flex flex-col justify-start items-center md:items-end md:pr-10">
                <div className="work-right-bl w-full lg:h-screen lg:sticky top-0 flex flex-col items-center lg:items-end justify-center">
                    <div className="my-24 relative md:my-0 w-[48vw]  lg:w-[20vw] h-[100vw] lg:h-[40vw] flex justify-center border-[4px] border-zinc-700 rounded-3xl  -4 -zinc-900 ring-offset-2 ring-4 ring-offset-zinc-700 ring-zinc-800 ">

                    <span className="border-2 absolute z-10 border-zinc-700 bg-black w-20 h-2 rounded-br-xl rounded-bl-xl">      
                        </span>
                    <div className="relative w-full h-full  overflow-hidden rounded-3xl ">
                        <div className="photo absolute w-full h-full flex items-start justify-center">
                            <img
                                src={img1}
                                alt="img1"
                                className="w-full h-full rounded-3xl  object-fill "
                            />
                        </div>
                       

                        <div className="photo absolute w-full h-full flex items-start justify-center">
                            <img src={img2} alt="img2" className="w-full h-full rounded-3xl  object-fill " />
                        </div>

                        <div className="photo absolute w-full h-full flex items-start justify-center">
                            <img src={img2} alt="img2" className="w-full h-full rounded-3xl  object-fill " />
                        </div>
                        </div>

                        <span className="absolute  -right-[14px] top-14 border-2 border-zinc-800  h-7 rounded-md"></span>
                        <span className="absolute -right-[14px] top-36 border-2 border-zinc-800  h-10 rounded-md"></span>
                    </div>
                </div>    
                </div>
            </div>
        </div>
    );
};

export default YourtalentOne;



