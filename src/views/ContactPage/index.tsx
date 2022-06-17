import React, { useLayoutEffect } from 'react'
import CalendlyWidget from '../../components/CalendlyWidget';
import ContactForm from '../../components/ContactForm';

const ContactPage = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <div>
      <ContactForm/>
      <CalendlyWidget/>
    </div>
  )
}

export default ContactPage