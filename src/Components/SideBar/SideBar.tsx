import'./SideBar.scss'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='sideBar'>
        <Link to='/portfolio' className='home__links--portfolio'>
          <button>Projects</button>
        </Link>
        <Link to='/contact' className='home__links--contact'>
          <button>Contact</button>
        </Link>
        <Link to='/about' className='home__links--about'>
          <div className='video-container'>
            <button>About</button>
          </div>
        </Link>

    </div>
  )
}

export default SideBar