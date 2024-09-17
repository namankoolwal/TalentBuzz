import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';


// Using GSAP
const Marque = () => {
  const marqueeRef1 = useRef(null);
  const marqueeRef2 = useRef(null);

  useEffect(() => {
    const marqueeElement1 = marqueeRef1.current;
    const marqueeElement2 = marqueeRef2.current;

    // Set the initial positions
    gsap.set(marqueeElement1, { x: '0%' });
    gsap.set(marqueeElement2, { x: '0%' }); // Position the second marquee after the first


    // Create the animation for both marquees
    gsap.to(marqueeElement1, {
      x: `-100%`,
      duration: 14,
      ease: 'linear',
      repeat: -1,
    });

    gsap.to(marqueeElement2, {
      x: `-100%`,
      duration: 14,
      ease: 'linear',
      repeat: -1,
      delay: 0, // Start the second marquee after the first one completes
    });

    return () => {
      // Kill the animations on component unmount
      gsap.killTweensOf(marqueeElement1);
      gsap.killTweensOf(marqueeElement2);
    };
  }, []);

  return (
    <div className='my-[70px] md:my-[120px] overflow-hidden flex items-center gap-0 py-5 border-y-2'>
      <h1 ref={marqueeRef1} className='flex gap-10 whitespace-nowrap pr-10'>
        {["Hire or Get Hired", "Hire or Get Hired", "Hire or Get Hired", "Hire or Get Hired", "Hire or Get Hired", "Hire or Get Hired"].map((item, index) => (
          <span key={index} className='text-white font-extrabold tracking-wider text-[3.7rem] md:text-[4.5rem]  px-9 py-2 rounded-full'>
            {item}
          </span>
        ))}
      </h1>
      <h1 ref={marqueeRef2} className='flex gap-10 whitespace-nowrap pr-10'>
        {["Hire or Get Hired", "Hire or Get Hired", "Hire or Get Hired", "Hire or Get Hired", "Hire or Get Hired", "Hire or Get Hired"].map((item, index) => (
          <span key={index} className='text-white font-extrabold tracking-wider text-[3.7rem] md:text-[4.5rem]  px-9 py-2 rounded-full'>
            {item}
          </span>
        ))}
      </h1>
    </div>
  );
}



// =================================================================================================
// Using Framer
// const Marque = () => {
//   return (
//     <div className='my-[70px] md:my-[120px] overflow-x-hidden flex items-center gap-0'>
//         <motion.h1
//             initial={{ x: '-0%' }}
//           animate={{ x: "-100%" }}
//           transition={{ ease: "linear", repeat: Infinity, duration: 7 }}
//          className='flex gap-10 whitespace-nowrap pr-10'>
//         {["Professional artists" , "Content Creaters" , "Musicians" , "Professional Dancers" , "Actors" , "Influencers" ].map((item,index) => (
//                 <span key={index} className='text-[#C63054] text-[1.25rem] md:text-[1rem] bg-[#FEFEFF] px-9 py-2 rounded-full'>{item}</span>
//         ))}
//         </motion.h1>
//         <motion.h1
//             initial={{ x: '-0%' }}
//           animate={{ x: "-100%" }}
//           transition={{ ease: "linear", repeat: Infinity, duration: 7 }}
//          className='flex gap-10 whitespace-nowrap pr-10'>
//         {["Professional artists" , "Content Creaters" , "Musicians" , "Professional Dancers" , "Actors" , "Influencers"].map((item,index) => (
//                 <span key={index} className='text-[#C63054] text-[1.25rem] md:text-[1rem] bg-[#FEFEFF] px-9 py-2 rounded-full'>{item}</span>
//         ))}
//         </motion.h1>
//     </div>
//   )
// }



export default Marque;
