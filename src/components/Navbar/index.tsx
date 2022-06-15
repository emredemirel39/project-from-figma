// styles
import styles from './Navbar.module.scss';

//components
import IconBox from '../IconBox';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <nav>
            <ul>
                <li><NavLink to='/how-works'>?דבוע הז ךיא </NavLink> </li>
                <li><NavLink to='/about-us'>ונילע</NavLink></li>
                <li><NavLink to='/FAQ'>תובושתו תולאש</NavLink></li>
                <li><NavLink to='security-and-privacy'>תויטרפו החטבא</NavLink></li>
                <li><NavLink to='/contact'>רשק ורצ</NavLink></li>
            </ul>
        </nav>
        <IconBox/>
    </div>
  )
}

export default Navbar;