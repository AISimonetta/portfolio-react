import './Home.scss'
import SideBar from '../../Components/SideBar/SideBar'
import html5 from '../../Assets/images/html5Logo.png'
import css from '../../Assets/images/css3Logo.png'
import sass from '../../Assets/images/scssLogo.png'
import bem from '../../Assets/images/bemLogo.png'
import js from '../../Assets/images/jsLogo.png'
import react from '../../Assets/images/reactLogo.png'
import java from '../../Assets/images/javaLogo.png'
import springboot from '../../Assets/images/SpringBoot.png'

const Home = () => {
  return (
    <div className='wholepage'>
      <SideBar/>
      <div className='home'>
        <div className='home__frame'>
          <div className='home__introduction'>
              <h1 className='home__title'>ALEJANDRA SIMONETTA.</h1>
              <h2 className='home__subtitle'>Junior Software Developer.  Designer.</h2>
              <p className='home__shortDescription'>"As a dedicated and <span className='passionate'>passionate</span> junior developer, I bring a <span className='creative'>creative touch </span>to front-end development, crafting engaging and dynamic websites and web applications with <span className='commitment'>commitment</span> and <span className='freshIdeas'>fresh ideas</span>."</p>
          </div>
        </div>
        <div className='home__skills'>
          <h2 className='home__skills--title'>SkILLS :</h2>
          <div className='home__skills--icons'>
            <img src={html5} alt="html5 logo" />
            <img src={css} alt="html5 logo" />
            <img src={sass} alt="html5 logo" />
            <img src={bem} alt="html5 logo" />
            <img src={js} alt="html5 logo" />
            <img src={react} alt="html5 logo" />
            <img src={java} alt="html5 logo" />
            <img src={springboot} alt="html5 logo" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home;