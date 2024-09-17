/* eslint-disable no-unused-vars */
import React ,{useState} from 'react'
import ModelParent from '../GetInTouchModel/ModelParent';

const YourArtist = () => {
  const [show, setShow] = useState(false);

  return (
    <section className='px-[5.5vw] my-[60px] md:my-[120px] h-full '>
    {show && <ModelParent showToggle={show} setShow={setShow} />}
        <div 
            className='h-full w-full py-12 bg-[#191A1F] rounded-2xl' 
            
        >
            <div className='flex flex-col items-center justify-center gap-10 px-8'>
                <div className='font-bold text-center text-[2.7rem] md:text-[2.5rem] '> 
                If You’re an Artist, Contact Us
                </div>
                <div className='text-[1.5rem] md:text-[1.5rem] md:w-[90%] text-center text-pretty'>
                Are you an artist ready to take your career to new heights? Talentbuzzz is designed with you in mind. Join us to change the way you hire, and get hired!
                </div>
                <button className='bg-[#EFAA76] text-2xl md:text-lg text-black w-fit  px-5 py-2 rounded-md flex items-center justify-between gap-3' onClick={() => setShow(true)}>Contact Us</button>
            </div>
        </div>
    </section>
  )
}

export default YourArtist
