import React, { useLayoutEffect } from 'react'
import styles from './AboutUsPage.module.scss';
import aboutUsImage from '../../assets/images/about-us-image.png';
import heroBgLines from '../../assets/images/hero-bg-lines.png';
import CalendlyWidget from '../../components/CalendlyWidget';

const AboutUsPage = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <div className={styles.aboutUsPageContainer} >
      <div className={styles.aboutUsPageHero}>
        <div className={`${styles.heroBgLines}`}>
            <img src={heroBgLines} alt="" />
        </div>

        <div className={`${styles.darkBlueBall} no-mobile`}>
          <div></div>
          <div></div>
        </div>
        <div className={`${styles.emptyBall} no-mobile`}></div>
        <div className={`${styles.shineBlueBall} no-mobile`}>
          <div></div>
          <div></div>
        </div>

        <div className={styles.titleAndMainTextWrapper}>
          <h1>
            ?ונחנא ימ
          </h1>
          <p>
            םיסנניפ יחמומ ידי לע המקוה                     
            .ןויסינ תונש -15מ רתוי םע דחא לכ ,היגולונכטו
          </p>
          <br className='no-mobile' />
          <p>
            םהילא םינופ םירבחהו החפשמה לכש םישנאה ונחנא
            םאה ,היסנפה םע תושעל המ - ףסכה לע תולאש םע
            .'וכו תונוכסחה תא עיקשהל ךיא ,אתנכשמה תא רזחמל
          </p>
        </div>
        <div className={styles.imageBox}>
          <div></div>
          <img src={aboutUsImage} alt="about-us-img" />
        </div>
        <div className={styles.aboutUsPageHeroSubTexts}>
          <p>
            םירבחש קנבהמ םיבתכמ פאסטאוול ונלביק
            רעששכ תושעל המ ונתוא ולאש ,וניבה אל ונלש
            דימתו ,הלוע היצלפניאהשכ וא דרוי רלודה
            .ךרדה לע םלוכל ונרזע
          </p>
          <p>
            ונטלחהו תינדי הרוצב הז תא תושעל ונל סאמנ ףוסב
            תידוחיי היגולונכט ונחתיפ                       תא םיקהל
            ,ונלש תוחוקלה רובע תאזה הדובעה לכ תא השועש
            :םולכ תושעל םיכירצ אל םהש ךכ
          </p>
      </div>
      </div>
      
      <CalendlyWidget/>
    </div>
  )
}

export default AboutUsPage