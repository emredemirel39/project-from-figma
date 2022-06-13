import styles from './CalendlyWidget.module.scss';
import { InlineWidget } from 'react-calendly';

const CalendlyWidget = () => {

  return (
    <div className={styles.calendlyWidget}>
        <InlineWidget styles={{height: '100%', width: '100%'}} url='https://calendly.com/emredemirel39/demo-clone' />
    </div>
  )
}

export default CalendlyWidget;