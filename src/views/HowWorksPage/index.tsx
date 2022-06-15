// style
import styles from './HowWorksPage.module.scss';

//images
import howWorksHeroImage from '../../assets/images/how-works-hero-image.png';
import heroBgLines from '../../assets/images/hero-bg-lines.png';
import videoCallSectionBgLines from '../../assets/images/videocall-section-bg-lines.png';
import videoCallSectionImage from '../../assets/images/videocall-section-image.png';
import commitSectionImage from '../../assets/images/hero-image.png';

//Components
import VideoCallBtn from '../../components/VideoCallBtn';
import SecurityAndPrivacySection from '../../components/SecurityAndPrivacySection';
import CalendlyWidget from '../../components/CalendlyWidget';
import AccordionItem from '../../components/AccordionItem';

//types
import { IAccordionItem } from '../../types';


const HowWorksPage = () => {

  const accordionItems: IAccordionItem [] = [
      {
        id: 1,
        title: '?טעפוצ עהלוק תילא גניסיפידא טמא טיס רולוד םוספיא םרול',
        text: `Better הוקמה על ידי מומחי פיננסים וטכנולוגיה, כל אחד עם יותר מ-15 שנות ניסיון. אנחנו אלו שכל המשפחה והחברים פונים אליהם עם שאלות על הכסף - מה לעשות עם הפנסיה, האם למחזר את המשכנתא, איך להשקיע את הכסף וכו'. כל היום קיבלנו לוואטסאפ מכתבים מהבנק שחברים שלנו לא הבינו מה הם אומרים, שאלו אותנו מה לעשות כששער הדולר יורד או כשהאינפלציה עולה, ותמיד עזרנו לכולם על הדרך.
בסוף נמאס לנו לעשות את זה בצורה ידנית והחלטנו להקים את Better. פיתחנו טכנולוגיה ייחודית שעושה את כל העבודה הזאת עבור הלקוחות שלנו, ככה שהם לא צריכים לעשות כלום.`
      },
      {
        id: 2,
        title: '?טעפוצ עהלוק תילא גניסיפידא טמא טיס רולוד םוספיא םרול',
        text: `תימאהל ףונעו - קרלב ןוסמל טקפנ תפנב ,רילק ץפונומ קיטסאלב ופידוא .ףודומ רמב יזאווק ןמזווקא ,סיווק סיליסופ - ןאיפאס סוורא םולונ
        ,לוהי קצבש םרול טרבוס ררפנומ רלוג .ךרונמ יאושנ ןיכטמל םכנמ ,אמ זד טיעכס קשהרק`
      },
      {
        id: 3,
        title: '?טעפוצ עהלוק תילא גניסיפידא טמא טיס רולוד םוספיא םרול',
        text: `תימאהל ףונעו - קרלב ןוסמל טקפנ תפנב ,רילק ץפונומ קיטסאלב ופידוא .ףודומ רמב יזאווק ןמזווקא ,סיווק סיליסופ - ןאיפאס סוורא םולונ
        ,לוהי קצבש םרול טרבוס ררפנומ רלוג .ךרונמ יאושנ ןיכטמל םכנמ ,אמ זד טיעכס קשהרק`
      },
      {
        id: 4,
        title: '?טעפוצ עהלוק תילא גניסיפידא טמא טיס רולוד םוספיא םרול',
        text: `תימאהל ףונעו - קרלב ןוסמל טקפנ תפנב ,רילק ץפונומ קיטסאלב ופידוא .ףודומ רמב יזאווק ןמזווקא ,סיווק סיליסופ - ןאיפאס סוורא םולונ
        ,לוהי קצבש םרול טרבוס ררפנומ רלוג .ךרונמ יאושנ ןיכטמל םכנמ ,אמ זד טיעכס קשהרק`
      }
  ]

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

      <div className={styles.accordionSection}>
        <h2>תובושתו תולאש</h2>
        <div className={styles.accordionWrapper}>
          {
            accordionItems.map(item => <AccordionItem key={item.id} item={item}/>)
          }
        </div>
      </div>

      <CalendlyWidget/>

    </div>
  )
}

export default HowWorksPage