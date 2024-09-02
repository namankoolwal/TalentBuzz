/* eslint-disable no-unused-vars */
import React from 'react';
import { Tilt } from 'react-tilt';
import HomeScreen from '../../assets/images/FeaturesPage/TiltCard/HomeScreen.png';
import Two from '../../assets/images/FeaturesPage/TiltCard/Two.png';
import Three from '../../assets/images/FeaturesPage/TiltCard/Three.png';
import Four from '../../assets/images/FeaturesPage/TiltCard/Four.png';
import Mic from '../../assets/images/FeaturesPage/TiltCard/Mic.png';
import Purse from '../../assets/images/FeaturesPage/TiltCard/Purse.png';
import Five from '../../assets/images/FeaturesPage/TiltCard/Five.png';

const TiltCard = () => {
  const TiltOptions = {
    scale: 1,
    perspective: 5000,
    max: 20,
  };

  return (
    <div className="px-[5.5vw] my-[60px] md:my-[120px] h-full">
      <div className="grid grid-cols-12 gap-6 md:gap-5">
        {/* ======================================================== */}
        <Tilt options={TiltOptions} className="one bg-[#191A1F] rounded-2xl p-5 row-span-2 col-span-12 md:col-span-6">
          <div className="flex flex-col w-full h-full justify-center gap-10">
            <span className="text-[#909090] text-2xl md:text-base font-semibold">For Users</span>
            <h5 className="text-center text-[2.25rem] md:text-[1.9rem] font-semibold">
              Discover, book, and enjoy top-tier artists for any occasion.
            </h5>
            <div className="p-10 md:p-5">
              <img loading='lazy' src={HomeScreen} alt="HomeScreen" className="mx-auto w-3/4 md:w-auto" />
            </div>
          </div>
        </Tilt>
        {/* ======================================================== */}
        <Tilt options={TiltOptions} className="two bg-[#191A1F] rounded-2xl p-8 md:p-5 col-span-12 md:col-span-6">
          <div className="flex flex-col w-full h-full justify-center gap-10 md:gap-10">
            <h5 className="text-center text-[2.25rem] md:text-[1.9rem] md:w-3/4 mx-auto font-semibold bg-gradient-to-r from-[#DB4469] to-[#0266FF] bg-clip-text text-transparent">
              Effortless Booking and Management
            </h5>
            <div className="p-5 md:pt-0">
              <img loading='lazy' src={Two} alt="HomeScreen" className="mx-auto md:w-auto" draggable={false} />
            </div>
          </div>
        </Tilt>
        {/* ======================================================== */}
        <Tilt options={TiltOptions} className="three bg-[#191A1F] rounded-2xl p-8 md:p-5 col-span-12 md:col-span-6">
          <div className="flex flex-col gap-10 justify-center w-full h-full md:gap-2">
            <span className="text-[#909090] text-2xl md:text-base font-semibold">For Users</span>
            <h5 className="text-center text-[2.25rem] md:text-[1.9rem] w-3/4 mx-auto font-semibold">
              Choose Your Own Artist
            </h5>
            <div className="p-5">
              <img loading='lazy' src={Three} alt="HomeScreen" className="mx-auto" />
            </div>
          </div>
        </Tilt>
        {/* ======================================================== */}
        <Tilt options={TiltOptions} className="four bg-[#191A1F] rounded-2xl p-8 md:p-5 col-span-12 md:col-span-5">
          <div className="flex flex-col gap-10 w-full h-full md:gap-3">
            <span className="text-[#909090] text-2xl md:text-base font-semibold">For Artists</span>
            <h5 className="text-center  text-[2.125rem] md:text-[1.9rem] mx-auto font-semibold bg-gradient-to-r from-[#DB4469] to-[#0266FF] bg-clip-text text-transparent">
              Search Artist Around You
            </h5>
            <div className="p-5">
              <img loading='lazy' src={Four} alt="HomeScreen" className="mx-auto" />
            </div>
          </div>
        </Tilt>
        {/* ======================================================== */}
        <Tilt options={TiltOptions} className="five bg-[#191A1F] rounded-2xl p-8 md:p-5 col-span-12 md:col-span-7">
          <div  className="flex flex-col gap-10 w-full h-full md:gap-0">
          <h5 className="text-center text-[2.125rem] md:text-[1.9rem] mx-auto font-semibold">
                Hire under your Budget
              </h5>
          <div className="flex flex-col gap-10 md:gap-0 md:flex-row">
            <div className="md:w-[25%] ">
              <div className="rounded-full mx-auto flex items-center md:justify-center w-full h-full">
                <img loading='lazy' src={Mic} alt="Mic" className="bg-white rounded-full p-2 w-16 md:w-12 object-contain" />
              </div>
            </div>
            <div className="flex flex-col w-full h-full justify-center gap-8">
              
              <div className="p-5">
                <img loading='lazy' src={Five} alt="HomeScreen" className="mx-auto md:w-auto" />
              </div>
            </div>
            <div className="md:w-[25%]">
              <div className="rounded-full mx-auto flex items-end md:pb-8 pr-8 md:pr-0 justify-end md:justify-center w-full h-full">
                <img loading='lazy' src={Purse} alt="Purse" className="bg-white rounded-full p-2 w-16 md:w-12 object-contain" />
              </div>
            </div>
          </div>
          </div>

        </Tilt>
        {/* ======================================================== */}
      </div>
    </div>
  );
};

export default TiltCard;
