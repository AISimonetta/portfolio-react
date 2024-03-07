import './SideBar.scss';
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
  const location = useLocation();

  return (
    <div className='sideBar'>
      {location.pathname !== "/" && (
      <Link to='/' className='home__links--portfolio'>
        <button>Home</button>
      </Link>
         )}
      {location.pathname !== "/portfolio" && (
        <Link to='/portfolio' className='home__links--portfolio'>
          <button>Projects</button>
        </Link>
      )}
      {location.pathname !== "/contact" && (
        <Link to='/contact' className='home__links--contact'>
          <button>Contact</button>
        </Link>
      )}
      {location.pathname !== "/about" && (
        <Link to='/about' className='home__links--about'>
          <button>About</button>
        </Link>
      )}
    </div>
  );
};

export default SideBar;