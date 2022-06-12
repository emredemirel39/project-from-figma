import styles from './DialogueSection.module.scss';

//images
import dialogueSectionBgLines from '../../assets/images/dialogue-section-bg-lines.png';
import dialogueSectionBgLinesDesktop from '../../assets/images/dialogue-section-bg-lines-desktop.png';
import dialogue1 from '../../assets/images/dialogue-1.png';
import dialogue2 from '../../assets/images/dialogue-2.png';
import dialogue3 from '../../assets/images/dialogue-3.png';
import dialogue4 from '../../assets/images/dialogue-4.png';

const DialogueSection = () => {
  return (
    <div className={styles.dialogueSection}>
        <div className={styles.dialogueSectionBg}>
            <img src={dialogueSectionBgLines} alt="background-img" />
        </div>
        <div className={styles.dialogueSectionBgDesktop}>
            <img src={dialogueSectionBgLinesDesktop} alt="background-img" />
        </div>
        <div className={styles.textBox}>
            <h1>
                - ןוכסיחל םיבייחתמ
                <br /> ךכב םידמועו    
            </h1>    
            <p>
                <br /> םכל איבנש ךכב םיחוטב ונא םיצורמ תוחוקל     
                <br /> יפלא ירחא
                <br /> :בייחתהל םינכומ ךכיפלו
                <br /> <span>יתועמשמ ךרע .םולשת לכ םכמ הבגנ אל ,ףסכ םכל ךוסחל חילצנ אל םא תישיא</span>
                <br /> הטלחה ולבקת םניח תוריש לש םיישדוח רחאל ילבו תובייחתה ילב
                <br /> וא ונתיא ךישמהל וצרת םאה .םכלש דצב ונחנא יכ <b>.תונטק תויתוא</b> 
            </p>
        </div>
        <div className={styles.dialogueScreenShot}>
            <img src={dialogue1} alt="whatsapp-dialogue" />
            <img src={dialogue2} alt="whatsapp-dialogue" />
            <img src={dialogue3} alt="whatsapp-dialogue" />
            <img src={dialogue4} alt="whatsapp-dialogue" />
        </div>
        <div className={styles.ball}>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default DialogueSection