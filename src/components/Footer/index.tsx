import IconBox from '../IconBox';
import logo from '../../assets/images/main-logo.png';
import styles from './Footer.module.scss';
import { NavLink } from 'react-router-dom';

const Footer
 = () => {
  return (
    <div>
        <div className={styles.footerContainer}>
            <div className={styles.footerTop}>
                <div className={`${styles.iconBox} no-mobile`}>
                    <IconBox/>
                </div>
                <div className={`${styles.footerInfoWrapper}`}>
                    <h4>םייסנניפ םיחקפמו תונוישר</h4>
                    <a href="#">הרומתב חוכ הפוימ - לארשי קנב ןוישיר</a>
                    <a href="#">ינויסנפ ןוישיר לעב - ןוכסיחו חוטיב ,ןוהה קוש ןוישיר</a>
                    <a href="#">יסנניפ עדימ יתוריש ןתונ - ךרע תוריינל תושרה ןוישיר</a>
                    <a href="#">סמ ץועיי תרבח - הסנכה סמ ןוישיר</a>
                    <a href="#">םושר עדימ רגאמ - םיטפשמה דרשמ</a>
                </div>
                <div className={`${styles.footerNav} no-mobile`}>
                    <h4>חוקלל עדימ</h4>
                    <NavLink to="/how-works">?דבוע הז ךיא</NavLink>
                    <NavLink to="/FAQ">תובושתו תולאש</NavLink>
                    <NavLink to="/companies">תורבחל תוריש</NavLink>
                    <NavLink to="/contact">רשק ורצ</NavLink>
                </div>
                <div className={styles.footerIconWrapper}>
                    <div className={styles.logoBox}>
                        <NavLink to='/'>
                            <img src={logo} alt="logo" />
                        </NavLink>
                    </div>
                    <div className={`${styles.footerIconWrapperLinks} no-mobile`}>
                        <NavLink to="#">ונחנא ימ</NavLink>
                        <NavLink to="#">תויטרפו החטבא</NavLink>
                        <a href="#">Careers</a>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <div className={`${styles.iconBox} no-desktop`}>
                    <IconBox/>
                </div>
                <ul>
                    <li><a href="mailto:support@allbetter.co.il">support@allbetter.co.il</a><span>•</span></li>
                    <li><a href="#">ופי-ביבא לת 32 ףוהנמז</a><span className='no-mobile'>•</span></li>
                    <li><a href="#">תויטרפ תוינידמ</a><span>•</span></li>
                    <li><a href="#">שומיש יאנת</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
