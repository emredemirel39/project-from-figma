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



function App() {
  return (
    <div className="App">
      <Header/>
      <main>
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
      <Footer/>
    </div>
  );
}

export default App;
