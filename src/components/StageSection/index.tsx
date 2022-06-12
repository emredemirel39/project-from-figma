import styles from './StageSection.module.scss';
import stageSectionBgLines from '../../assets/images/stage-section-bg-lines.png';

const StageSection = () => {
  return (
    <div className={styles.stageSection}>
        <h1>?דבוע הז ךיא</h1>
        <div className={styles.stageSectionItems}>
            <div className={styles.stageSectionCard}>
                <div className={styles.stageSectionCardTitle}>
                    <h3>1.</h3>
                    <h3>קמועל םכתא םיריכמ</h3>
                </div>
                <div className={styles.stageSectionCardText}>
                        <p>
                            תוקד 30 תב םוז תחישב םיליחתמ    
                            תא םכליבשב םיפסוא ונא הב
                            ךירצש המ לכ
                        </p>
                </div>
            </div>
            <div className={styles.stageSectionCard}>
                <div className={styles.stageSectionCardTitle}>
                    <h3>2.</h3>
                    <h3>םכליבשב דובעל םיכלוה</h3>
                </div>
                <div className={styles.stageSectionCardText}>
                    <p>
                        ההזמ תיגולונכטה תכרעמה רשאכ
                        ונתיאמ ולבקת ,ןוכסיחל תונמדזה
                        הטושפ פאסטאוו תעדוה
                    </p>
                </div>
            </div>
            <div className={styles.stageSectionCard}>
                <div className={styles.stageSectionCardTitle}>
                    <h3>3.</h3>
                    <h3>םכרובע םיכסוח</h3>
                </div>
                <div className={styles.stageSectionCardText}>
                        <p>
                            ילטיגיד רושיא םכמ םילבקמ ונחנא
                            םילקש יפלא תורשע םכל םיכסוחו
                            רבד תושעל וכרטצתש ילב  
                        </p>
                </div>
            </div>
        </div>
        <div className={styles.stageSectionBgLines}>
            <img src={stageSectionBgLines} alt="section-img" />
        </div>
        <div className={styles.ball}>
                <div></div>
                <div></div>
        </div>
    </div>
  )
}

export default StageSection;