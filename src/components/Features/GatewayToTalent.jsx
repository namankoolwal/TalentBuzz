/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import bg from '../../assets/images/FeaturesPage/GatewayToTalent/bg.png';
import ModelParent from '../GetInTouchModel/ModelParent';

const GatewayToTalent = ({ handelClick }) => {
  const [show, setShow] = useState(false);

  return (
    <div className='px-[5.5vw] my-[60px] md:my-[120px] h-full bg-cover bg-center bg-no-repeat' 
      style={{ backgroundImage: `url(${bg})` }}>
      <div className='h-full w-full'>
        {show && <ModelParent showToggle={show} setShow={setShow} />}
        <div className='flex flex-col items-center justify-center gap-14'>
          <div className='text-[2.8rem] md:text-[4rem] font-semibold text-center'>
            Your Gateway to Talent and Opportunity
          </div>
          <div className='md:-translate-y-6' onClick={() => setShow(true)}>
            <span className='text-white w-fit md:mt-[16px] px-9 py-4 md:px-10 md:py-[14px] rounded-full flex items-center justify-between gap-3 bg-gradient-to-l from-[#DB4469] to-[#0266FF] text-lg cursor-pointer'>
              INQUIRE NOW
            </span>
          </div>
          <div className='text-[1.5rem] md:w-[50%] text-center text-pretty flex flex-col gap-10'>
            <div>
              Connecting artists with opportunities and users with the perfect match for your next project or event.
            </div>
            <div className='flex items-center justify-center gap-10'>
              <button className='bg-black rounded-lg p-2 px-5 flex items-center gap-3 border border-[#D7456C]' onClick={handelClick}>
                <svg className="h-9 w-9" viewBox="-9 0 274 274" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* SVG Path */}
                </svg> 
                <span className='flex flex-col text-left text-sm'>
                  <span> Download from</span>
                  <span> Google Play</span>
                </span>
              </button>
              <button className='bg-black rounded-lg p-2 px-5 flex items-center gap-3 border border-[#D7456C]' onClick={handelClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="fill-current w-9 h-9 text-gray-50">
                  {/* SVG Path */}
                </svg>
                <span className='flex flex-col text-left text-sm'>
                  <span> Download from</span>
                  <span> App Store</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GatewayToTalent;
