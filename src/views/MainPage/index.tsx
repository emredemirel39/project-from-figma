import React, { useLayoutEffect } from 'react'
import styles from './MainPage.module.scss';
import Hero from '../../components/Hero'
import HeroBottom from '../../components/HeroBottom'
import StageSection from '../../components/StageSection'
import DialogueSection from '../../components/DialogueSection';
import CalendlyWidget from '../../components/CalendlyWidget';


const MainPage = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <div className={styles.mainPage}>
      <Hero/>
      <HeroBottom/>
      <StageSection/>
      <DialogueSection/>
      <CalendlyWidget/>
    </div>
  )
}

export default MainPage