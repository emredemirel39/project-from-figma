import { Route, Routes } from "react-router";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainPage from "./views/MainPage";

import './styles/main.scss';


function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
