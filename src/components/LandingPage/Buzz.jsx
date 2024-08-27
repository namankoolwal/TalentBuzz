import React, { useRef } from 'react'
import buzzimg from '../../assets/images/Landingpage/Buzz/buzzimg.svg'


const Buzz = ({handelClick}) => {

    const followRef = useRef()
    const mouseEnter = () => {

        followRef.current.style.opacity = '1'
        followRef.current.style.top = '11rem'
    }
    const mouseLeave = () => {
        followRef.current.style.opacity = '0'
        followRef.current.style.top = '12rem'
    }

    return (
        <div className='px-[5.5vw] my-[60px] md:my-[120px] w-full'>
            <div className='flex flex-col items-center gap-[2.5rem]'>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='font-semibold text-[4rem] '>Create your <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#7E317A] from-[0%] via-[#DB4469] via-[81%] to-[#EFAA76]/50 to-[98%]'>Buzz</span></h2>
                    <p className='text-[1.5rem] w-[60%] text-center'>Where Artistry Meets Innovation: Hear What Our Artists and Creators Have to Say!</p>
                </div>
                <div className='relative flex items-center justify-center ' onMouseLeave={mouseLeave}>
                    <img loading='lazy' src={buzzimg} alt="" className='w-3/4' />
                    <button className='absolute  rounded-full p-6' onMouseEnter={mouseEnter}></button>
                    <button ref={followRef} className='bg-[#EFAA76] text-black px-8 font-semibold py-2 opacity-0 rounded-lg absolute top-48  transition-all duration-200' onClick={() => { alert("Following") }}> Follow Us!</button>

                </div>
                <button className='bg-[#EFAA76] text-black w-fit mt-[16px] px-5 py-2 rounded-md flex items-center justify-between gap-3' onClick={handelClick}>Explore Now</button>
            </div>
        </div>
    )
}

export default Buzz


{/* <button className='absolute peer/btn rounded-full p-6' onClick={()=>{alert("i am clicked")}}></button>
                <div className='bg-[#EFAA76] peer-hover/btn:top-44 peer-hover/btn:opacity-100 text-black px-5 font-semibold py-2 rounded-lg absolute top-48 opacity-0 transition-all duration-200'> Follow Us!</div> */}