import React from 'react'
import Hero from './Hero'
import Marque from './Marque'
import HelpArtists from './HelpArtists'
import WhyChose from './WhyChoose'
import Testimonials from './Testimonials'
import TalentShine from './TalentShine'
import Buzz from './Buzz'
import Faq from './Faq'
import Yourtalent from './Yourtalent'

const LandingPage = () => {
  return (
    <div className='w-full min-h-screen'>
        <Hero/>
      <Marque/>
      <HelpArtists/>
      <WhyChose/>
      <Yourtalent/>
      <Testimonials/>
      <TalentShine/>
      <Buzz/>
      <Faq/>
    </div>
  )
}

export default LandingPage