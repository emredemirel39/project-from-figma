import styles from './HowWorksPage.module.scss';

import howWorksHeroImage from '../../assets/images/how-works-hero-image.png';
import heroBgLines from '../../assets/images/hero-bg-lines.png';
import videoCallSectionBgLines from '../../assets/images/videocall-section-bg-lines.png';
import videoCallSectionImage from '../../assets/images/videocall-section-image.png';
import commitSectionImage from '../../assets/images/hero-image.png';

import VideoCallBtn from '../../components/VideoCallBtn';
import SecurityAndPrivacySection from '../../components/SecurityAndPrivacySection';
import CalendlyWidget from '../../components/CalendlyWidget';


const HowWorksPage = () => {
  return (
    <div className={styles.howWorksPageWrapper}>
          <div className={`${styles.howWorksHeroBgLines} no-mobile`}>
            <img src={heroBgLines} alt="" />
        </div>
      <div className={styles.heroContainer}>
          <div className={styles.heroContainerInfoWrapper}>
          <div className={styles.heroContainerTitle}>
          <h1>
              ,ישונא תוריש
              <br />
              תרשפאמ היגולונכט
          </h1>
        </div>
        <div className={styles.heroContainerTextWrapper}>
          <p>
            <span>Better.</span> םיסנניפ יחמומ ידי לע המקוה                    
            .ןויסינ תונש -15מ רתוי םע דחא לכ ,היגולונכטו 
          </p>
          <p>
            הדובעה לכ תא השועש תידוחיי היגולונכט ונחתיפ
            תושעל םיכירצ אל םהש ךכ ,ונלש תוחוקלה רובע
            יטמוטוא ןפואב עדימה תא םיגישמ ונחנא :םולכ
            לכב ףסכ ךוסחל רשפא ךיא ןותנ עגר לכב םיקרוסו
            ,תועקשהב ,אתנכשמב ,היסנפב ,חוטיבב ,סמב - םוקמ
            .םיסנניפל רושקש םוחת לכב - לודגבו 
          </p>
        </div>
          </div>
        <div className={styles.heroContainerImageBox}>
          <div></div>
          <img src={howWorksHeroImage} alt="hero-img" />
        </div>
        <div className={`${styles.heroBallBlue} no-mobile`}>
          <div></div>
          <div></div>
        </div>
        <div className={`${styles.heroBallEmpty} no-mobile`}></div>
      </div>

      <div className={styles.videoCallSectionContainer}>
        <div className={styles.videoCallSectionBgLines}>
          <img src={videoCallSectionBgLines} alt="bg-lines" />
        </div>
        <div className={`${styles.videoCallSectionImageBox} no-mobile`}>
            <img src={videoCallSectionImage} alt="videocall-section-img" />
        </div>
        <div className={styles.videoCallInfo}>
          <h2> 
            יתועמשמ ןוכסיח
            טקש שארב
          </h2>
          <p>
            לש  עצוממ םוכס  םוכס100,000 םויה דע ונכסח
            ,לוהינ ימדבו תולמעב חוקלל רבטצמב ח"ש
            הלאכ אוצמל לכונש םיחינמ ונחנא ןכלו
            .םכליבשב םג תונוכסח
          </p>
            <div className={styles.videoCallBtnWrapper}>
              <VideoCallBtn text='םוזב תורכיה םואית'/>
            </div>
        </div>
      </div>

      <SecurityAndPrivacySection/>

      <div className={styles.commitSection}>
        <div className={styles.commitSectionInfoBox}>
          <h2>
            - ןוכסיחל םיבייחתמ  
            ךכב םידמועו
          </h2>
          <p>
            <b>םכל איבנש ךכב םיחוטב ונא םיצורמ תוחוקל יפלא ירחא
            :בייחתהל םינכומ ךכיפלו יתועמשמ ךרע</b>
            .םולשת לכ םכמ הבגנ אל ,ףסכ םכל ךוסחל חילצנ אל םא
            תישיא הטלחה ולבקת םניח תוריש לש םיישדוח רחאל
            ילבו תובייחתה ילב .אל וא ונתיא ךישמהל וצרת םאה
            .םכלש דצב ונחנא יכ .תונטק תויתוא
          </p>
        </div>
        <div className={styles.commitSectionImageBox}>
          <div></div>
          <img src={commitSectionImage} alt="commit-img" />
        </div>
      </div>

      <CalendlyWidget/>

    </div>
  )
}

export default HowWorksPage