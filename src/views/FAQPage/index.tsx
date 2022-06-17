import React from 'react'

//styles
import styles from './FAQPage.module.scss';

// components
import AccordionItem from '../../components/AccordionItem';
import CalendlyWidget from '../../components/CalendlyWidget';
import FAQAccordionIems from '../../utils/FAQPageAccordionItems';

const FAQPage = () => {
  return (
    <div>
      <div className={styles.accordionSection}>
        <h1>הלאש לכ לע תונעל חמשנ</h1>
        <div className={styles.accordionWrapper}>
          {
            FAQAccordionIems.map(item => <AccordionItem item={item} key={item.id}/>)
          }
        </div>
      </div>
      <CalendlyWidget/>
    </div>
  )
}

export default FAQPage