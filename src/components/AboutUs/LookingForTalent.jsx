/* eslint-disable no-unused-vars */
import React , {useState} from 'react'
import ModelParent from '../GetInTouchModel/ModelParent';


const LookingForTalent = () => {
  const [show, setShow] = useState(false);

  return (
    <section className='px-[5.5vw] my-[60px] md:my-[120px] h-full '>
    <div 
        className='h-full w-full py-12 rounded-2xl' 
        
    >
        <div className='flex flex-col md:items-center justify-center gap-10 md:px-8'>
    {show && <ModelParent showToggle={show} setShow={setShow} />}

            <div className='font-bold text-[2.5rem] md:text-[2.5rem]  md:text-center'> 
            If You’re Looking for Talent, Get in Touch with Us
            </div>
            <div className='text-[1.5rem] md:text-[1.5rem] md:w-[90%] md:text-center text-pretty'>
            Want to hire talent but find it difficult to spot them? Break the wall of outreach, and let us help you change how you hire. 
            </div>
            <button className='bg-[#EFAA76] text-black w-fit text-2xl md:text-lg px-5 py-2 rounded-md flex items-center justify-center gap-3' onClick={() => setShow(true)}>Contact Us</button>
        </div>
    </div>
</section>
  )
}

export default LookingForTalent
