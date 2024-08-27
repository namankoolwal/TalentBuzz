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
  const handelClick =()=>{
    confirm("We Know you are super hyped and can't wait!\nHang in there, the excitement is building!")
  }
  return (
    <div className='w-full min-h-screen'>
        <Hero/>
      <Marque/>
      <HelpArtists/>
      <WhyChose handelClick={handelClick}/>
      {/* <YourtalentTwo/> */}
      <YourtalentOne handelClick={handelClick}/>
      <TalentShine handelClick={handelClick}/>
      <Buzz handelClick={handelClick}/>
      <Faq handelClick={handelClick}/>
    </div>
  )
}

export default LandingPage