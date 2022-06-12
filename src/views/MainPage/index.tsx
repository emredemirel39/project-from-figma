import React from 'react'
import styles from './MainPage.module.scss';
import Hero from '../../components/Hero'
import HeroBottom from '../../components/HeroBottom'
import StageSection from '../../components/StageSection'


const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <Hero/>
      <HeroBottom/>
      <StageSection/>
    </div>
  )
}

export default MainPage