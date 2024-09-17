import Hero from './Hero'
import Marque from './Marque'
import HelpArtists from './HelpArtists'
import WhyChose from './WhyChoose'
import TalentShine from './TalentShine'
import Buzz from './Buzz'
import Faq from './Faq'
import YourtalentOne from './YourTalentOne'
import HelpRecruters from './HelpRecruters'

const LandingPage = () => {
  const handelClick =()=>{
    confirm("We Know you are super hyped and can't wait!\nHang in there, the excitement is building!")
  }
  return (
    <div className='w-full min-h-screen'>
        <Hero/>
      <Marque/>
      <HelpArtists/>
      <HelpRecruters/>
      <WhyChose/>
      <YourtalentOne handelClick={handelClick}/>
      <TalentShine handelClick={handelClick}/>
      <Buzz />
      <Faq handelClick={handelClick}/>
    </div>
  )
}

export default LandingPage