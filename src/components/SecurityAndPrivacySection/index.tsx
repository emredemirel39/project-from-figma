import styles from './SecurityAndPrivacySection.module.scss'
import secondLogo from '../../assets/images/secondary-logo.png';

// certificates
import certificate1 from '../../assets/images/security-certificate-1.png';
import certificate2 from '../../assets/images/security-certificate-2.png';
import certificate3 from '../../assets/images/security-certificate-3.png';
import certificate4 from '../../assets/images/security-certificate-4.png';

//icons
import securityIcon1 from '../../assets/icons/security-icon-1.png';
import securityIcon2 from '../../assets/icons/security-icon-2.png';
import securityIcon3 from '../../assets/icons/security-icon-3.png';
import securityIcon4 from '../../assets/icons/security-icon-4.png';

const SecurityAndPrivacySection = () => {
  return (
    <div className={styles.securityAndPrivacySection}>
        <div className={styles.securityTitleAndFirstParagraph}>
            <h1>
                תויטרפו החטבא 
            </h1>
            <p>
                <span><img src={secondLogo} alt="secondary-logo" /></span> דחוימב בושקו ישיא תוריש הקינעמ                      
                םירוטלוגר 4 ידי לע תחקופמ תויהל האגו ,היתוחוקלל
                חוטיב ,ןוהה קוש תושר ,לארשי קנב :םיסנניפ  
                .הסנכהה סמו ךרע תוריינל תושרה ,ןוכסיחו 
            </p>
        </div>
        <div className={styles.securityCertificates}>
            <div><img src={certificate1} alt="certificate" /></div>
            <div><img src={certificate2} alt="certificate" /></div>
            <div><img src={certificate3} alt="certificate" /></div>
            <div><img src={certificate4} alt="certificate" /></div>
        </div>
        <div className={styles.securitySecondParagraph}>
            <p>
            ןפצומ יסנניפה עדימה לכ ,םהיתוארוה יפל
            ידבוע תוכרעממ יטמרה ןפואב דרפומו
            תיגולונכטה תכרעמלו םכל קרש ךכ ,הרבחה
            לוכי אל ונתיאמ דחא ףא .וילא השיג שי
            !םכרושיא ילב עדימל תשגל
            </p>
        </div>
        <div className={styles.securityIconsBox}>
            <div><img src={securityIcon1} alt="security-icon" /></div>
            <div><img src={securityIcon2} alt="security-icon" /></div>
            <div><img src={securityIcon3} alt="security-icon" /></div>
            <div><img src={securityIcon4} alt="security-icon" /></div>
        </div>
        <div className={styles.securityThirdParagraph}>
            <p>
                <span><img src={secondLogo} alt="secondary-logo" /></span> עדימ תחטבא יעצמא הליעפמ                   
                תויסנניפה תורבחה לש שומישב רשא םימדקתמ
                עדימה תחטבא ינקת .םלועבו לארשיב תולודגה
                ...... TLS ןקתבו .......ל םאתהב םניה ונלש
            </p>
        </div>
  </div>
  )
}

export default SecurityAndPrivacySection