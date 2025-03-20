// App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { DarkModeProvider } from "./context/DarkModeContext";

import Home from "./pages/Home";
import FinanceManager from "./pages/FinanceManager";
import DriverFatigueDetection from "./pages/DriverFatigueDetection"; 
import CaseStudy from "./pages/CaseStudy";
import Work from "./pages/Work";
import About from "./pages/About";

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.sectionId) {
      const section = document.getElementById(location.state.sectionId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 200); 
      }
    }
  }, [location]);

  return null;
};

const App = () => {
  return (
    <DarkModeProvider>
    <Router>
      <Navbar />
      <ScrollToSection /> {/* Ensure location handling inside Router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/finance-manager" element={<FinanceManager />} />
        <Route path="/driver-fatigue-detection" element={<DriverFatigueDetection />} />
        <Route path="/case-study" element={<CaseStudy />} />
      </Routes>
    </Router>
    </DarkModeProvider>
  );
};

export default App;
