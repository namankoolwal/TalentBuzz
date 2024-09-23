import React, { useEffect, useRef } from 'react';

const Marque = () => {
  const marqueeRef1 = useRef(null);
  const marqueeRef2 = useRef(null);

  

  return (
    <div className='relative px-[5.5vw] my-[60px] md:my-[120px] h-[150px] md:h-[375px] overflow-hidden'>
      {/* Marquee 1 */}
      <div ref={marqueeRef1} className='absolute bg-black text-black scale-105 top-28 md:top-32 left-0 right-0 flex items-center gap-0 py-0 border md:border-y-2 rotate-[10deg] md:rotate-[8deg]'>
        <h1 className='flex gap-0 whitespace-nowrap pr-10 '>
          {["Hire or Get Hired", "Hire or Get Hired", "Hire or Get Hired", "Hire or Get Hired", "Hire or Get Hired", "Hire or Get Hired"].map((item, index) => (
            <span key={index} className='text-white  font-semibold tracking-wider text-[3rem] md:text-[4.5rem] px-9 py-0 rounded-full'>
              {item}
            </span>
          ))}
        </h1>
      </div>

      {/* Marquee 2 */}
      <div ref={marqueeRef2} className='absolute bg-black text-black scale-105 top-32 md:top-40 left-0 right-0 flex items-center gap-0 py-0 border md:border-y-2 -rotate-[10deg] md:-rotate-[8deg]'>
        <h1 className='flex gap-0 whitespace-nowrap pr-10 '>
          {["Hire or Get Hired", "Hire or Get Hired", "Hire or Get Hired", "Hire or Get Hired", "Hire or Get Hired", "Hire or Get Hired"].map((item, index) => (
            <span key={index} className='text-white font-semibold tracking-wider text-[3rem] md:text-[4.5rem] px-9 py-0 rounded-full'>
              {item}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
}

export default Marque;
