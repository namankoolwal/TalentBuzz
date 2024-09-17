/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import bg from '../../assets/images/FeaturesPage/GatewayToTalent/bg.png';
import ModelParent from '../GetInTouchModel/ModelParent';

const MoreThanPassion = () => {
  const [show, setShow] = useState(false);

  return (
    <div 
      className='px-[5.5vw] my-[60px] md:my-[120px] h-full bg-cover bg-center bg-no-repeat relative' 
    >
    <div className='left-0 w-full translate-custom md:top-16 flex items-center justify-center -z-20 h-full absolute' ><img src={bg} alt="" className='w-full md:h-full'/></div>
      <div className='h-full w-full'>
        {show && <ModelParent showToggle={show} setShow={setShow} />}
        <div className='flex flex-col items-center justify-center gap-14'>
          <div className='text-[2.8rem] md:text-[4rem] font-semibold text-center'>
            Talentbuzzz: Where art is more than just passion
          </div>
          <div className=' w-full flex items-center justify-center' onClick={() => setShow(true)}>
            <span className='text-white w-fit px-9 py-4 md:px-10 md:py-[14px] rounded-full flex items-center justify-between gap-3 bg-gradient-to-l from-[#DB4469] to-[#0266FF] text-lg cursor-pointer'>
              Know More
            </span>
          </div>
          <div className='text-[1.5rem] md:w-full text-center text-pretty flex flex-col gap-10'>
            <div>
              We are here to match the right talent with the right opportunity. If you want to be the one with “right person-right time story” then download Talentbuzzz and set up your portfolio now.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreThanPassion;
