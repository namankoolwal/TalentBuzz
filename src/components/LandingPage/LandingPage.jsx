import Hero from './Hero'
import Marque from './Marque'
import HelpArtists from './HelpArtists'
import WhyChose from './WhyChoose'
import TalentShine from './TalentShine'
import Buzz from './Buzz'
import Faq from './Faq'
import YourtalentTwo from './YourtalentTwo'
import YourtalentOne from './YourTalentOne'

const LandingPage = () => {
  return (
    <div className='w-full min-h-screen'>
        <Hero/>
      <Marque/>
      <HelpArtists/>
      <WhyChose/>
      {/* <YourtalentTwo/> */}
      <YourtalentOne/>
      <TalentShine/>
      <Buzz/>
      <Faq/>
    </div>
  )
}

export default LandingPage