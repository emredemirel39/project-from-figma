// styles
import styles from './Navbar.module.scss';

//components
import IconBox from '../IconBox';
import { NavLink } from 'react-router-dom';

interface INavbarProps {
  mobileMenu: boolean,
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC <INavbarProps> = ({mobileMenu, setMobileMenu}) => {
  return (
    <div className={styles.navbar}>
        <nav>
            <ul>
                <li><NavLink onClick={() => setMobileMenu(!mobileMenu)} to='/how-works'>?דבוע הז ךיא </NavLink> </li>
                <li><NavLink onClick={() => setMobileMenu(!mobileMenu)} to='/about-us'>ונילע</NavLink></li>
                <li><NavLink onClick={() => setMobileMenu(!mobileMenu)} to='/FAQ'>תובושתו תולאש</NavLink></li>
                <li><NavLink onClick={() => setMobileMenu(!mobileMenu)} to='security-and-privacy'>תויטרפו החטבא</NavLink></li>
                <li><NavLink onClick={() => setMobileMenu(!mobileMenu)} to='/contact'>רשק ורצ</NavLink></li>
            </ul>
        </nav>
        <div>
          <IconBox/>
        </div>
    </div>
  )
}

export default Navbar;