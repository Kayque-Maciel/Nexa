import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import './App.css';
import Header from './Components/Header';
import Home from "./Components/Home";
import Conta from "./Components/Conta";

function App() {
  return (
    <>
      <Router>
        <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Conta" element={<Conta />} />
            </Routes>
      </Router>

    
    </>
  );
}

export default App;
