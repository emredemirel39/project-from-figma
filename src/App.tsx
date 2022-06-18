import { Route, Routes } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./views/MainPage";
import HowWorksPage from "./views/HowWorksPage";
import ContactPage from "./views/ContactPage";
import AboutUsPage from "./views/AboutUsPage";

import './styles/main.scss';
import FAQPage from "./views/FAQPage";
import CompaniesPage from "./views/CompaniesPage";
import SecurityAndPrivacyPage from "./views/SecurityAndPrivacyPage";
import { useState } from "react";
import MobileMenu from "./components/MobileMenu";



function App() {

  const [ mobileMenu, setMobileMenu ] = useState <boolean> (false);

  return (
    <div className="App">
      <Header mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      { mobileMenu && <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />}
      <main className={`${mobileMenu && 'no-mobile'}`}>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="how-works" element={<HowWorksPage/>} />
          <Route path="about-us" element={<AboutUsPage/>} />
          <Route path="FAQ" element={<FAQPage/>} />
          <Route path="security-and-privacy" element={<SecurityAndPrivacyPage/>} />
          <Route path="contact" element={<ContactPage/>} />
          <Route path="companies" element={<CompaniesPage/>} />
        </Routes>
      </main>
      <footer className={`${mobileMenu && 'no-mobile'}`}>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
