import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./components/Home";
import History from "./components/History";
import Contactus from "./components/Contactus";
import Navigation from "./components/Navigation"
import Footer from "./components/Footer";


function App(){

  return (
  <>
    <Router>
    <Navigation />
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/history" element={<History/>}/>
    <Route exact path="/contact" element={<Contactus />} />
    </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;