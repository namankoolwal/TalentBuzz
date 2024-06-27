import React from 'react';

const Faq = () => {
    return (
        <div className='px-[5.5vw] my-[120px] w-full  '>
            <div className='border-4 border-[#b8b0b0] rounded-lg flex flex-col-reverse md:flex-row gap-10 h-full justify-center p-5'>
                <div className='faqLeft md:w-[60%] flex flex-col gap-5 p-5'>
                    <h2 className='text-[4rem] font-semibold'>FAQs</h2>
                    {['Why do we choose Talentbuzz over other platforms?', 'What exactly the Talentbuzz is?', 'How do I find work in Talentbuzz?', 'How to hire artist in Talentbuzz?', 'My question is not listed here (Send feedback)'].map((question, index) => (
                        <div key={index} className={`border border-[#1B1B1B] ml-3 rounded-full px-10 py-3 ${index === 1 && 'bg-[#1B1B1B]'}`} >
                            {question}
                        </div>
                    ))}
                </div>

                <div className='faqRight md:w-[40%] p-7 pb-3 flex flex-col gap-5'>
                    <h3 className='text-[3rem]'>Answers</h3>
                    <div className='w-full h-full bg-[#1B1B1B] rounded-2xl p-5'>
                        <div className='text-[0.875rem]'>It is the place where you can showcase your unseen talent and get promoted and earn.</div>
                    </div>
                </div>


            </div>
            <div className=' flex justify-center pt-5'>

                <button className='bg-[#EFAA76] text-black w-fit mt-[16px] px-5 py-2 rounded-md flex items-center justify-between gap-3'>Get Started Now</button>
            </div>
        </div>
    );
};

export default Faq;
