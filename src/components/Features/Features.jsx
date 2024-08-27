/* eslint-disable no-unused-vars */
import React from 'react'
import GatewayToTalent from './GatewayToTalent'
import BringingTalent from './BringingTalent'
import TiltCard from './TiltCard'
import HowItWork from './HowItWork'
import Faq from '../LandingPage/Faq'
import OneStopSolution from './OneStopSolution'

const Features = () => {
  return (
    <div className='w-full min-h-screen h-full'>
      <GatewayToTalent/>
      <BringingTalent/>
      <TiltCard/>
      <HowItWork/>
      <OneStopSolution/>
      <Faq/>
    </div>
  )
}

export default Features
