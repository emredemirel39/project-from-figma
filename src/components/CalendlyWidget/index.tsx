import styles from './CalendlyWidget.module.scss';
import { InlineWidget } from 'react-calendly';

const CalendlyWidget = () => {

  return (
    <div className={styles.calendlyWidget}>
        <InlineWidget url='https://calendly.com/emredemirel39/demo-clone' />
    </div>
  )
}

export default CalendlyWidget;