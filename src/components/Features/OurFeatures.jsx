import icon from '../../assets/images/FeaturesPage/Ourfeatures/icon.svg'

const OurFeatures = () => {
    return (
        <div className='px-[5.5vw] my-[60px] md:my-[120px] h-full'>
            <div
                className='h-full w-full py-10 bg-contain bg-center bg-no-repeat '
            >
                <div className='flex flex-col items-center justify-center gap-10 md:p-8'>
                    <div className='text-[2.8rem] md:text-[4rem] text-center w-full  font-semibold'>Our Features</div>
                    <div className='text-[2rem] md:text-[1.5rem] w-[100%] text-center  text-pretty'>
                        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-8 md:gap-20 text-center">
                            <div>
                                <div className='flex flex-col items-center justify-center gap-6'>

                                    <span><img src={icon} alt="" className='w-20' /></span>
                                    <p>Bridging the gap between talent and recruitment</p>
                                </div>
                            </div>
                            <div>
                                <div className='flex flex-col items-center justify-center gap-6'>

                                    <span><img src={icon} alt="" className='w-20' /></span>
                                    <p>Building a thriving talent community</p>
                                </div>
                            </div>
                            <div>
                                <div className='flex flex-col items-center justify-center gap-6 '>

                                    <span><img src={icon} alt="" className='w-20' /></span>
                                    <p>One stop-solution for all your talent recruitment needs in (....... music, comedy, etc.)</p>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default OurFeatures
