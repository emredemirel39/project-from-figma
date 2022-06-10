// styles
import styles from './Navbar.module.scss';

//components
import IconBox from '../IconBox';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <nav>
            <ul>
                <li>?דבוע הז ךיא</li>
                <li>ונילע</li>
                <li>תובושתו תולאש</li>
                <li>תויטרפו החטבא</li>
                <li>רשק ורצ</li>
            </ul>
        </nav>
        <IconBox/>
    </div>
  )
}

export default Navbar;