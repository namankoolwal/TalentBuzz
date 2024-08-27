/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const FAQ_DATA = [
    {
        id: 1,
        question: 'Why do we choose Talentbuzz over other platforms?',
        answer: 'Talentbuzzz offers direct connections between artists and clients, verified profiles, and tailored search options, making it easier to find and hire the perfect talent without middlemen.'
    },
    {
        id: 2,
        question: 'What exactly is Talentbuzz?',
        answer: 'Talentbuzzz is a platform that connects artists with clients, helping artists showcase their skills and get hired quickly and directly, without any middlemen.'
    },
    {
        id: 3,
        question: 'How do I find work on Talentbuzz?',
        answer: 'To find work on Talentbuzzz, create a profile showcasing your skills and portfolio. Once set up, clients can discover and hire you directly for projects that match your expertise. You can also explore and apply to opportunities posted on the platform.'
    },
    {
        id: 4,
        question: 'How to hire an artist on Talentbuzz?',
        answer: 'To hire an artist on Talentbuzzz, simply search and filter by criteria like genre, location, or availability. Browse through artist profiles, review their portfolios, and once you find the right fit, you can book them directly through the platform.'
    },
    {
        id: 5,
        question: 'My question is not listed here (Send feedback)',
        answer: 'If you can’t find the answer you’re looking for, feel free to send us your question or feedback. We’re here to help!'
    }
];

const Faq = ({handelClick}) => {
    const [answer, setAnswer] = useState(FAQ_DATA[0].answer);
    const [activeQuestion, setActiveQuestion] = useState(FAQ_DATA[0].id);

    const handleFaqClick = (faq) => {
        setAnswer(faq.answer);
        setActiveQuestion(faq.id);
    };

    return (
        <div className='px-[5.5vw] mb-[60px] md:mb-[120px] w-full'>
            <div className='border-4 border-[#b8b0b0] rounded-lg flex flex-col-reverse md:flex-row gap-10 h-full justify-center p-5'>
                <div className='faqLeft md:w-[60%] flex flex-col gap-5 p-5'>
                    <h2 className='text-[4rem] font-semibold'>FAQs</h2>
                    {FAQ_DATA.map((faq) => (
                        <button
                            key={faq.id}
                            className={`text-left border border-[#1B1B1B] ml-3 cursor-pointer rounded-full px-10 py-3 ${activeQuestion === faq.id ? 'bg-[#1B1B1B] text-white' : ''} hover:border-[#464646]`}
                            onClick={() => handleFaqClick(faq)}
                        >
                            {faq.question}
                        </button>
                    ))}
                </div>

                <div className='faqRight md:w-[40%] p-7 pb-3 flex flex-col gap-5'>
                    <h3 className='text-[3rem]'>Answers</h3>
                    <div className='w-full h-44 md:h-full bg-[#1B1B1B] rounded-2xl p-5'>
                        <div className='text-[1rem]'>{answer}</div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center pt-5'>
                <button className='bg-[#EFAA76] text-black w-fit mt-[16px] px-5 py-2 rounded-md flex items-center justify-between gap-3' onClick={handelClick}>
                    Get Started Now
                </button>
            </div>
        </div>
    );
};

export default Faq;
