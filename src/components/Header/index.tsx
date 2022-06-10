import logo from '../../assets/images/logo.png';
import menuIcon from '../../assets/icons/menu-icon.png';

//style
import styles from './Header.module.scss';
import Navbar from '../Navbar';

const Header = () => {
  return (
    <header className={styles.header}>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <Navbar/>
        <div className={styles.menuIcon}>
            <img src={menuIcon} alt="menu-icon" />
        </div>
    </header>
  )
}

export default Header