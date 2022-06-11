import logo from '../../assets/images/main-logo.png';
import menuIcon from '../../assets/icons/menu-icon.png';

//style
import styles from './Header.module.scss';
import Navbar from '../Navbar';
import VideoCallBtn from '../VideoCallBtn';

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.logoBox}>
            <img src={logo} alt="logo" />
        </div>
        <Navbar/>
        <div className={styles.menuIcon}>
            <img src={menuIcon} alt="menu-icon" />
        </div>
        <div className={styles.videoCallBtn}><VideoCallBtn text='םוזב תורכיה םואית'/></div>
    </header>
  )
}

export default Header