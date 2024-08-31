/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ModelParent from '../GetInTouchModel/ModelParent';
import img1 from "../../assets/images/Landingpage/Yourtalent/img1.png";
import img2 from "../../assets/images/Landingpage/Yourtalent/img2.png";
import img3 from "../../assets/images/Landingpage/Yourtalent/img3.png";
import frame from "../../assets/images/Landingpage/Yourtalent/frame.png";

gsap.registerPlugin(ScrollTrigger);

const YourtalentOne = () => {
    const [show, setShow] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    // Code to detect when all images are loaded
    useEffect(() => {
        const images = document.querySelectorAll('.gallery img');
        let loadedImagesCount = 0;

        const handleImageLoad = () => {
            loadedImagesCount += 1;
            if (loadedImagesCount === images.length) {
                setImagesLoaded(true); // Set state when all images are loaded
            }
        };

        images.forEach((img) => {
            if (img.complete) {
                handleImageLoad();
            } else {
                img.addEventListener('load', handleImageLoad);
            }
        });

        return () => {
            images.forEach((img) => img.removeEventListener('load', handleImageLoad));
        };
    }, []);


    // ======================GSAP Animation======================
    useEffect(() => {
        if (imagesLoaded) {
            gsap.set(".photo:not(:first-child)", { opacity: 1, y: 1200 });
            gsap.set(".details:not(:first-of-type) > *", { opacity: 0, y: 200  });

            const animation = gsap.to(".photo:not(:first-child)", {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 1,
            });

            const animation2 = gsap.to(".details:not(:first-of-type) > *", {
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
                toggleActions: "play reverse play reverse",
                // markers: true,
            });     

            ScrollTrigger.refresh(); // Ensure ScrollTrigger is in sync
        }
    }, [imagesLoaded]);

    return (
        <div className="backgroundChange bg-black px-[5.5vw] py-20 my-[60px] md:my-[120px]">
        {show && <ModelParent showToggle={show} setShow={setShow} />}
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
            <div className="gallery mt-40 flex flex-col-reverse md:flex-row relative">
                <div className="leftblock h-full w-full lg:w-1/2 ml-auto -violet-200 ">
                    <div className="work-text w-[90%] mx-auto">
                        <div className="details w-3/4">
                            <div className="first h-[100vw] lg:h-screen font-bold flex flex-col justify-center w-full ml-auto text-white gap-5">
                                <h4 className="text-[1.75rem] text-[#EFAA76]">DISCOVER</h4>
                                <div>
                                    <p className="text-[1.6rem] lg:text-[1.5rem] lg:w-[100%]">
                                        Showcase your talent to a global audience and let opportunities find you.
                                    </p>
                                </div>
                                <div className="">
                                    <button className="border border-[#EFAA76] text-xl md:text-base font-normal px-5 py-2 rounded-md"
                                        onClick={() => setShow(true)}
                                    >
                                        Contact Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="details w-3/4">
                            <div className="second h-[100vw] lg:h-screen font-bold flex flex-col justify-center w-full ml-auto text-white gap-5">
                                <h4 className="text-[1.75rem] text-[#EFAA76]">CONNECT</h4>
                                <div>
                                    <p className="text-[1.6rem] lg:text-[1.5rem] lg:w-[100%]">
                                        Easily connect with artists tailored to your event needs and requirements.
                                    </p>
                                </div>
                                <div className="">
                                    <button className="border border-[#EFAA76] text-xl md:text-base font-normal px-5 py-2 rounded-md"
                                    onClick={() => setShow(true)}
                                    >
                                        Contact Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="details w-3/4">
                            <div className="third h-[100vw] lg:h-screen font-bold flex flex-col justify-center w-full ml-auto text-white gap-5">
                                <h4 className="text-[1.75rem] text-[#EFAA76]">HIRE</h4>
                                <div>
                                    <p className="text-[1.6rem] lg:text-[1.5rem] lg:w-[100%]">
                                        Hire the perfect artist by filtering options like genre, location, and availability.
                                    </p>
                                </div>
                                <div className="">
                                    <button className="border border-[#EFAA76] text-xl md:text-base font-normal px-5 py-2 rounded-md"
                                    onClick={() => setShow(true)}
                                    >
                                        Contact Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightblock backgroundChange bg-black md:py-10 lg:py-0 -green-400 sticky top-0 md:relative w-full lg:w-1/2 flex flex-col justify-start items-center lg:items-end md:pr-10">
                    <div className="work-right-bl w-full md:h-screen md:sticky top-0 flex flex-col items-center md:items-end justify-center">
                        <div className="my-24 relative md:my-0 w-[48vw] md:w-[20vw] h-[98vw] md:h-[41vw] flex justify-center ring-offset-2 z-[99] rounded-[35px] md:rounded-[50px] " style={{ backgroundImage: `url${frame}` }}>

                            <img loading='lazy' src={frame} alt="" className="absolute z-10 w-full h-full" />

                            <div className="relative w-[96%] h-full pt-0 overflow-hidden rounded-[32px] md:rounded-[32px] lg:rounded-[44px] ">
                                <div className="photo absolute w-full h-full flex items-start justify-center">
                                    <img loading='lazy'
                                        src={img1}
                                        alt="img1"
                                        className="w-full h-full rounded-3xl object-fill "
                                    />
                                </div>

                                <div className="photo absolute w-full h-full flex items-start justify-center">
                                    <img loading='lazy' src={img3} alt="img3" className="w-full h-full rounded-3xl object-fill " />
                                </div>

                                <div className="photo absolute w-full h-full flex items-start justify-center">
                                    <img loading='lazy' src={img2} alt="img2" className="w-full h-full rounded-3xl object-fill " />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourtalentOne;
