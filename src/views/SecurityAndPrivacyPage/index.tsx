import React, { useLayoutEffect } from 'react'
import CalendlyWidget from '../../components/CalendlyWidget';
import SecurityAndPrivacySection from '../../components/SecurityAndPrivacySection';

const SecurityAndPrivacyPage = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <div>
      <SecurityAndPrivacySection/>
      <CalendlyWidget/>
    </div>
  )
}

export default SecurityAndPrivacyPage