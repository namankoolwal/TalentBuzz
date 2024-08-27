/* eslint-disable no-unused-vars */
import React from 'react'
import card1 from '../../assets/images/AboutUs/CardSection/card1.png'
import card2 from '../../assets/images/AboutUs/CardSection/card2.png'


const CardSection = () => {
    return (
        <section className='px-[5.5vw] my-[60px] md:my-[120px] h-full '>
            <div className='flex gap-5 md:gap-0'>


                <div className="w-full md:p-10 pt-0 flex flex-col gap-8 rounded-lg ">
                    <img loading='lazy' className="rounded-t-lg" src={card1} alt="" />
                    <div className="p-0 flex flex-col gap-8">
                        <h5 className=" text-[2rem] font-bold ">How we started</h5>
                        <p className=" font-normal text-[1.1rem] md:text-[1.3rem] leading-relaxed">Talentbuzzz was created to address the challenges both artists and those seeking talent face in today’s market. We noticed how the dominance of big agencies and the absence of direct hiring platforms limited opportunities. Our journey began with a mission to empower artists to showcase their talents and provide users with a seamless way to discover and hire the perfect talent.</p>

                    </div>
                </div>



                {/* *********************************************** */}


                <div className="w-full md:p-10 pt-0 flex flex-col gap-8 rounded-lg shadow">
                    <img loading='lazy' className="rounded-t-lg" src={card2} alt="" />
                    <div className="p-0 flex flex-col gap-8">
                        <h5 className="text-[2rem] font-bold ">Our Vision</h5>
                        <p className="text-[1.1rem] md:text-[1.3rem] font-normal leading-relaxed">At Talentbuzzz, our vision is to create a world where every artist has the freedom and tools to thrive, and where every user can easily discover and book the talent they need. We believe in a transparent, fair, and innovative platform that empowers creativity and facilitates meaningful connections between artists and clients.</p>

                    </div>
                </div>




            </div>
        </section>
    )
}

export default CardSection
