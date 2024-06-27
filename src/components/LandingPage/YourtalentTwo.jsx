import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import img1 from "../../assets/images/Landingpage/Yourtalent/img1.svg";
import img2 from "../../assets/images/Landingpage/Yourtalent/img2.svg";
import { motion, useScroll, useTransform } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const YourtalentTwo = () => {
    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.set(".photo:not(:first-child)", { opacity: 1, y: 1000 });
            gsap.set(".details", { opacity: 0, y: 400 });

            const animation = gsap.to(".photo:not(:first-child)", {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 1,
            });

            const animation2 = gsap.to(".details", {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 1,
            });

            ScrollTrigger.create({
                trigger: ".gallery",
                start: "top top",
                end: "bottom bottom",
                pin: ".rightblock",
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
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="bg-[#181818] px-[5.5vw] py-20 my-[120px]">
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
            <div className=" gallery mt-40 flex flex-col-reverse md:flex-row">
                <div className="left w-full md:w-1/2 ml-auto ">
                    <div className="details h-screen flex flex-col justify-center w-full ml-auto text-white gap-5">
                        <h4 className="text-[3rem]">Watch Short Videos</h4>
                        <div>
                            <p className="text-[1.5rem] md:text-[0.857rem] md:w-1/2">
                                Browse and watch artist showcase videos and get the quality
                                entertainment you wished for.
                            </p>
                        </div>
                        <div className="">
                            <button className="border border-[#EFAA76] px-5 py-2 rounded-md">
                                Watch Now
                            </button>
                        </div>
                    </div>

                    {/*************************  */}

                    <div className=" details h-screen flex flex-col justify-center w-full ml-auto text-white gap-5">
                        <h4 className="text-[3rem]">Showcase Portfolio</h4>
                        <div>
                            <p className="text-[1.5rem] md:text-[0.857rem] md:w-1/2">
                                Professional profiles with videos, portfolios, and reviews.
                            </p>
                        </div>
                        <div>
                            <button className="border border-[#EFAA76] px-5 py-2 rounded-md">
                                Watch Now
                            </button>
                        </div>
                    </div>

                    {/* *********************************** */}
                </div>
                <div className="rightblock bg-[#181818] w-full md:w-1/2 md:h-screen flex flex-col justify-center items-center md:items-end md:pr-10">
                    <div className="my-24 md:my-0  relative w-[50vw] md:w-[20vw] h-[100vw] md:h-[40vw] flex justify-center border-[4px] border-zinc-700 rounded-3xl outline outline-4 outline-zinc-900 ring-offset-2 ring-4 ring-offset-zinc-700 ring-zinc-800 ">

                    <span className="border-2 absolute z-10 border-zinc-700 bg-black w-20 h-2 rounded-br-xl rounded-bl-xl">      
                        </span>
                    <div className="relative w-full h-full  overflow-hidden rounded-3xl ">
                        <div className="photo absolute w-full h-full flex items-start justify-center">
                            <img
                                src={img1}
                                alt="img1"
                                className="w-full h-full rounded-3xl  object-fill scale-[1.35]"
                            />
                        </div>
                       

                        <div className="photo absolute w-full h-full flex items-start justify-center">
                            <img src={img2} alt="img1" className="w-[100%] h-full rounded-3xl  object-cover scale-[1.35]" />
                        </div>
                        </div>

                        <span className="absolute  -right-[14px] top-14 border-2 border-zinc-800  h-7 rounded-md"></span>
                        <span className="absolute -right-[14px] top-36 border-2 border-zinc-800  h-10 rounded-md"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourtalentTwo;



