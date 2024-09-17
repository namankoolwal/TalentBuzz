
const JustForArtist = () => {
    return (
        <div className='px-[5.5vw] my-[60px] md:my-[120px] h-full'>
            <div
                className='h-full w-full py-10 bg-contain bg-center bg-no-repeat '
            >
                <div className='flex flex-col items-center justify-center gap-10 md:p-8'>
                    <div className='text-[2.8rem] md:text-[4rem] text-left w-full font-semibold'>Special features just for artists:</div>
                    <div className='text-[1.5rem] w-[100%] text-left pl-10 space-y-1.5 md:pl-20 text-pretty'>
                    <ul className="list-disc space-y-1.5">

                        <li>Put yourself out there and earn from your passion</li>
                        <li>Manage all your bookings through the app itself</li>
                        <li>Connect with other artists in or outside your niche</li>
                    </ul>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default JustForArtist
