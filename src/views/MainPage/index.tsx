import React from 'react'
import styles from './MainPage.module.scss';
import Hero from '../../components/Hero'
import HeroBottom from '../../components/HeroBottom'
import StageSection from '../../components/StageSection'
import DialogueSection from '../../components/DialogueSection';


const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <Hero/>
      <HeroBottom/>
      <StageSection/>
      <DialogueSection/>
    </div>
  )
}

export default MainPage