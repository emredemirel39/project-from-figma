import { Route, Routes } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./views/MainPage";

import './styles/main.scss';
import HowWorksPage from "./views/HowWorksPage";


function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="how-works" element={<HowWorksPage/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
