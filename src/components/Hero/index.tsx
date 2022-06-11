import attacheIcon from '../../assets/icons/attache-icon.png';
import secondLogo from '../../assets/images/secondary-logo.png';
import VideoCallBtn from '../VideoCallBtn';
import heroBgLines from '../../assets/images/hero-bg-lines.png';

import styles from './Hero.module.scss';

import heroImage from '../../assets/images/hero-image.png';

const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.heroBgLines}>
            <img src={heroBgLines} alt="" />
        </div>
        <div className={styles.heroItems}>
                <div className={styles.heroTextItems}>
                    <div className={styles.heroTitle}>
                        <h1>
                            ןוכסיח ךל םירדסמ
                            <br />
                            100,000 ךסב<span><img src={attacheIcon} alt="attache-icon" /></span>
                            <br />
                            .תוחפל
                        </h1>
                    </div>
                    <div className={styles.heroParagraph}>
                        <p>
                            ,חוטיבב ,אתנכשמב וישכע לפטל שאר שי ימל
                            ?תואוולהב וא תועקשהב ,היסנפב
                        </p>
                        <p>
                            <span>
                                <img src={secondLogo} alt="logo" />
                            </span>
                            םילפטמו ,םכליבשב לכה תא םישוע                     
                            .םהב קסעתהל םכל אב אלש םירבדה לכב םכמוקמב 
                        </p>
                    </div>
                </div>
            <div className={styles.videoCallBtn}><VideoCallBtn text='םוזב תורכיה םואית'/></div>
        </div>
        <div className={styles.heroImageBox}>
            <img src={heroImage} alt="hero-img" />
            <div></div>
        </div>
        <div className={styles.ballImages}>
            <div className={styles.firstBall}>
                <div></div>
                <div></div>
            </div>
            <div className={styles.secondBall}>
                <div></div>
                <div></div>
            </div>
            <div className={styles.lastBall}></div>
        </div>
    </div>
  )
}

export default Hero;