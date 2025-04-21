// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Pages/SharedSections/Footer";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Services from "./Pages/services";
import Contact_us from "./Pages/Contact_us";
function App() {
  

  

  return (
    <Router>
      {/* Shared Nav */}
      <div
        className={`absolute top-0`}
        
      >
        <NavBar />
      </div>

      {/* Route switching section */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact_us />} />
        
      </Routes>

      {/* Shared Footer */}
      <Footer />
    </Router>
  );
}

export default App;
