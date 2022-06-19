import styles from './CalendlyWidget.module.scss';
import calendlyWidgetImage from '../../assets/images/calendly-widget-image.png';
import { InlineWidget } from 'react-calendly';

const CalendlyWidget = () => {

  return (
    <div className={styles.calendlyWidgetContainer}>
      <div className={`${styles.ballBlue} no-mobile`}>
        <div></div>
        <div></div>
      </div>
      <div className={styles.calendlyInfoWrapper}>
        <div className={styles.title}>
            <h2>
              Zoom םואית
              תורכיה
            </h2>
          </div>
          <div className={styles.text}>
            <p>
              תוקד 30 תב החישל רתויב חונה דעומה תא ורחב
              םכל חלשנ ונאו ,ונלש םיסנניפה יחמומ םע
              ליימל ןומיז 
            </p>
        </div>
        <div className={`${styles.imageBox} no-mobile`}>
          <img src={calendlyWidgetImage} alt="img" />
          <div></div>
        </div>   
      </div>  
      <div className={styles.calendlyWidgetWrapper}>
        <InlineWidget styles={{height: '100%', width: '100%'}} url='https://calendly.com/emredemirel39/demo-clone' />
      </div>
      
      <div className={`${styles.ballGreen} no-mobile`}>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default CalendlyWidget;