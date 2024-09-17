
const OurFeatures = () => {
    return (
        <div className='px-[5.5vw] my-[60px] md:my-[120px] h-full'>
            <div
                className='h-full w-full py-10 bg-contain bg-center bg-no-repeat '
            >
                <div className='flex flex-col items-center justify-center gap-10 md:p-8'>
                    <div className='text-[2.8rem] md:text-[4rem] text-left w-full  font-semibold'>Our Features</div>
                    <div className='text-[1.5rem] w-[100%] text-left pl-10 md:pl-20 text-pretty'>
                    <ul className="list-disc space-y-1.5">

                        <li>Bridging the gap between talent and recruitment</li>
                        <li>Building a thriving talent community</li>
                        <li>One stop-solution for all your talent recruitment needs in (....... music, comedy, etc.)</li>
                    </ul>


                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default OurFeatures
