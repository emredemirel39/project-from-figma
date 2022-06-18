import logo from '../../assets/images/main-logo.png';
import menuIcon from '../../assets/icons/menu-icon.png';
import menuCloseIcon from '../../assets/icons/menu-close-icon.png';

//style
import styles from './Header.module.scss';
import Navbar from '../Navbar';
import VideoCallBtn from '../VideoCallBtn';
import { NavLink } from 'react-router-dom';

interface IHeaderProps {
  mobileMenu: boolean,
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC <IHeaderProps> = ({mobileMenu, setMobileMenu}) => {

  const handleMobileMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();

    setMobileMenu(!mobileMenu);
  };

  return (
    <header>
        <div className={styles.headerContainer}>
          <div className={styles.logoBox}> 
              <NavLink to='/'><img src={logo} alt="logo" /></NavLink>
          </div>
          <div className='no-mobile'><Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} /></div>
          <div onClick={e => handleMobileMenu(e)} className={styles.menuIcon}>
              <img src={mobileMenu ? menuCloseIcon : menuIcon} alt="menu-icon" />
          </div>
          <div className={styles.videoCallBtn}><VideoCallBtn text='םוזב תורכיה םואית'/></div>
      </div>
    </header>
  )
}

export default Header