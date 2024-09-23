import backgroundImg from '../../assets/images/Landingpage/helpArtists/backgroundImg.png'

const HelpRecruters = () => {
    return (
        <div className='md:px-[5.5vw] my-[60px] md:my-[120px] h-full'>
            <div
                className='h-full w-full py-10 bg-contain bg-center bg-no-repeat '
                style={{ backgroundImage: `url(${backgroundImg})` }}
            >
                <div className='flex flex-col items-center justify-center gap-10 md:p-8'>
                    <div className='text-[2.6rem] md:text-[4rem]'>How <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#A3219C] from-[0%] via-[#2B3DE1] via-[81%] to-[#F6577E]/50 to-[98%]'>Talentbuzzz</span> help recruiters </div>
                    <div className='text-[1.2rem] w-[100%] text-red-500 font-semibold  text-pretty'>
                    <ul className="flex justify-center items-center gap-8 px-2 md:px-28 flex-wrap ">

                            <li className='bg-white rounded-full px-4 md:px-10 py-3'>Choose Your Budget</li>
                            <li className='bg-white rounded-full px-4 md:px-10 py-3'>Customised Search</li>
                            <li className='bg-white rounded-full px-4 md:px-10 py-3'>Efficient Hiring</li>
                            <li className='bg-white rounded-full px-4 md:px-10 py-3'>Streamline Recruitment</li>
                            <li className='bg-white rounded-full px-4 md:px-10 py-3'>Discover Top Talent</li>
                    </ul>


                    </div>
                    <div className='text-[1.5rem] w-[100%]  text-center mt-3 px-4 text-pretty'>Talentbuzzz makes finding the right talent easy, fun, and effective!</div>
                </div>
            </div>
        </div>
    )
}

export default HelpRecruters
