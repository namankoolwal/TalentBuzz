import React from 'react'
import Hero from './Hero'
import Marque from './Marque'
import HelpArtists from './HelpArtists'
import WhyChose from './WhyChoose'
import Testimonials from './Testimonials'
import TalentShine from './TalentShine'
import Buzz from './Buzz'
import Faq from './Faq'

const LandingPage = () => {
  return (
    <div className='w-full min-h-screen'>
        <Hero/>
      <Marque/>
      <HelpArtists/>
      <WhyChose/>
      <Testimonials/>
      <TalentShine/>
      <Buzz/>
      <Faq/>
    </div>
  )
}

export default LandingPage