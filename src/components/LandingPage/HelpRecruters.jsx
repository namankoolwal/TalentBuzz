import backgroundImg from '../../assets/images/Landingpage/helpArtists/backgroundImg.png'

const HelpRecruters = () => {
    return (
        <div className='px-[5.5vw] my-[60px] md:my-[120px] h-full'>
            <div
                className='h-full w-full py-10 bg-contain bg-center bg-no-repeat '
                style={{ backgroundImage: `url(${backgroundImg})` }}
            >
                <div className='flex flex-col items-center justify-center gap-10 md:p-8'>
                    <div className='text-[2.8rem] md:text-[4rem]'>How <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#A3219C] from-[0%] via-[#2B3DE1] via-[81%] to-[#F6577E]/50 to-[98%]'>Talentbuzzz</span> help recruiters </div>
                    <div className='text-[1.5rem] w-[100%] text-left pl-5 space-y-1.5 md:pl-52 text-pretty'>
                            <li>Discover Top Talent</li>
                            <li>Streamline Recruitment</li>
                            <li>Customised Search</li>
                            <li>Choose Your Budget</li>
                            <li>Efficient Hiring</li>


                    </div>
                    <div className='text-[1.5rem] w-[100%] pl-5 md:pl-40 text-left text-pretty'>Talentbuzzz makes finding the right talent easy, fun, and effective!</div>
                </div>
            </div>
        </div>
    )
}

export default HelpRecruters
