import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Cardsec from './Components/Cardsec';
import Conta from "./Components/Conta";

function App() {
  return (
    <>

      <Router>
        <Header />
            <Routes>
              <Route path="/" element={<></>} />
              <Route path="/Escocia" element={<></>} />
              <Route path="/Grandcanyon" element={<></>} />
              <Route path="/Muralhasdachina" element={<></>} />
              <Route path="/Aruba" element={<></>} />
            </Routes>
      </Router>

    <Main />

    <Cardsec />

    <Conta />
    </>
  );
}

export default App;
