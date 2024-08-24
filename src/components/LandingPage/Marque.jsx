import React from 'react'
import { motion } from "framer-motion"

const Marque = () => {
  return (
    <div className='my-[70px] md:my-[120px] overflow-x-hidden'>
        <motion.div
            initial={{ x: '-0.5%' }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 7 }}
         className='flex gap-10 whitespace-nowrap'>
        {["Professional artists" , "Content Creaters" , "Musicians" , "Professional Dancers" , "Actors" , "Influencers" , "Professional artists" , "Content Creaters" , "Musicians" , "Professional Dancers" , "Actors" , "Influencers" ].map((item,index) => (
                <span key={index} className='text-[#C63054] text-[1.25rem] md:text-[1rem] bg-[#FEFEFF] px-9 py-2 rounded-full'>{item}</span>
        ))}
        </motion.div>
    </div>
  )
}

export default Marque


{/* <div className='my-[120px] '>
        <motion.div
        initial={{ x: "0" }}
        animate={{ x: "-128%" }}
        transition={{ ease: "linear", duration: 7, repeat: Infinity }}
            
         className='flex gap-10 whitespace-nowrap'>
        {["Professional artists" , "Content Creaters" , "Musicians" , "Professional Dancers" , "Actors" , "Influencers","Professional artists" , "Content Creaters" , "Musicians" , "Professional Dancers" , "Actors" , "Influencers", ].map((item,index) => (
                <span key={index} className='text-[#C63054] bg-[#FEFEFF] px-10 py-3 rounded-full text-[1.5rem]'>{item}</span>
        ))}
        </motion.div>
    </div> */}







    // <div className='my-[120px] '>
    //     <motion.div
    //         initial={{ x: '-0.5%' }}
    //       animate={{ x: "-100%" }}
    //       transition={{ ease: "linear", repeat: Infinity, duration: 7 }}
    //      className='flex gap-10 whitespace-nowrap'>
    //     {["Professional artists" , "Content Creaters" , "Musicians" , "Professional Dancers" , "Actors" , "Influencers" , "Professional artists" , "Content Creaters" , "Musicians" , "Professional Dancers" , "Actors" , "Influencers" ].map((item,index) => (
    //             <span key={index} className='text-[#C63054] bg-[#FEFEFF] px-9 py-2 rounded-full'>{item}</span>
    //     ))}
    //     </motion.div>
    // </div>