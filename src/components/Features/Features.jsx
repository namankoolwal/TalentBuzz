/* eslint-disable no-unused-vars */
import React from 'react'
import GatewayToTalent from './GatewayToTalent'
import BringingTalent from './BringingTalent'
import TiltCard from './TiltCard'
import HowItWork from './HowItWork'
import Faq from '../LandingPage/Faq'
import OneStopSolution from './OneStopSolution'
import MoreThanPassion from './MoreThanPassion'
import OurFeatures from './OurFeatures'
import JustForRecruters from './JustForRecruters'
import JustForArtist from './JustForArtist'

const Features = () => {
  const handelClick =()=>{
    confirm("We Know you are super hyped and can't wait!\nHang in there, the excitement is building!")
  }
  return (
    <div className='w-full min-h-screen h-full'>
      {/* <GatewayToTalent handelClick={handelClick}/> */}
      <MoreThanPassion/>
      <BringingTalent/>
      <TiltCard/>
      <OurFeatures/>
      <JustForRecruters/>
      <JustForArtist/>
      <HowItWork/>
      <OneStopSolution handelClick={handelClick}/>
      <Faq handelClick={handelClick}/>
    </div>
  )
}

export default Features
