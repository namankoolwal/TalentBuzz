/* eslint-disable no-unused-vars */
import React from 'react'
import AboutTalentBuzz from './AboutTalentBuzz'
import CardSection from './CardSection'
import YourArtist from './YourArtist'
import LookingForTalent from './LookingForTalent'
import ImageSection from './ImageSection'


const AboutUs = () => {
  const handelClick =()=>{
    confirm("We Know you are super hyped and can't wait!\nHang in there, the excitement is building!")
  }
  return (
    <div className='w-full min-h-screen h-full'>
        <AboutTalentBuzz/>
        <CardSection/>
        <YourArtist handelClick={handelClick}/>
        <ImageSection/>
        <LookingForTalent handelClick={handelClick}/>
    </div>
  )
}

export default AboutUs
