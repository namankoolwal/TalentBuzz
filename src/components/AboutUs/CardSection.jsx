/* eslint-disable no-unused-vars */
import React from 'react'
import card1 from '../../assets/images/AboutUs/CardSection/card1.png'
import card2 from '../../assets/images/AboutUs/CardSection/card2.png'


const CardSection = () => {
    return (
        <section className='px-[5.5vw] my-[60px] md:my-[120px] h-full '>
            <div className='flex flex-col md:flex-row gap-20 md:gap-0'>


                <div className="w-full md:p-10 pt-0 flex flex-col gap-8 rounded-lg ">
                    <img loading='lazy' className="rounded-t-lg" src={card1} alt="" />
                    <div className="p-0 flex flex-col gap-8">
                        <h5 className=" text-[2.5rem] md:text-[2rem] font-bold ">What got us here?</h5>
                        <p className=" font-normal text-[1.5rem] md:text-[1.3rem] leading-relaxed flex flex-col gap-5">
                        <p>Most of the artists are broken down into so many smaller niches that it gets very difficult for them to get noticed by the recruiters. When we realised how much even the recruiters struggle to connect with the artists, we decided to build Talentbuzzz.</p>

<p>So, Talentbuzzz was created to address the challenges artists and those seeking talent face today. Our journey began with a mission to empower artists to showcase their talents and provide users with an easier way to discover and hire the perfect talent other than the dominance of big agencies and the absence of direct hiring platforms and limited opportunities.</p>

                        </p>

                    </div>
                </div>



                {/* *********************************************** */}


                <div className="w-full md:p-10 pt-0 flex flex-col gap-8 rounded-lg shadow">
                    <img loading='lazy' className="rounded-t-lg" src={card2} alt="" />
                    <div className="p-0 flex flex-col gap-8">
                        <h5 className="text-[2.5rem] md:text-[2rem] font-bold ">Our Vision</h5>
                        <p className="text-[1.5rem] md:text-[1.3rem] font-normal leading-relaxed flex flex-col gap-5">
                        <p>At Talentbuzzz, our vision is to create a world where every artist has the freedom and tools to thrive, and where every recruiter can easily discover and book the talent they need. </p>

<p>We believe in a transparent, fair, and innovative platform that empowers creativity and helps to build connections between artists and clients</p>

                        </p>

                    </div>
                </div>




            </div>
        </section>
    )
}

export default CardSection
