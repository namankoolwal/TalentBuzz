/* eslint-disable no-unused-vars */
import React from 'react'
import AboutTalentBuzz from './AboutTalentBuzz'
import CardSection from './CardSection'
import YourArtist from './YourArtist'
import LookingForTalent from './LookingForTalent'
import ImageSection from './ImageSection'


const AboutUs = () => {
  return (
    <div className='w-full min-h-screen h-full'>
        <AboutTalentBuzz/>
        <CardSection/>
        <YourArtist/>
        <ImageSection/>
        <LookingForTalent/>
    </div>
  )
}

export default AboutUs
