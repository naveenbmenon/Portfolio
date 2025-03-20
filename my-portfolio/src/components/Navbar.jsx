import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useDarkMode } from "../context/DarkModeContext";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const highlightActiveLink = () => {
      let currentSection = null;
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", highlightActiveLink);
    highlightActiveLink();

    return () => {
      window.removeEventListener("scroll", highlightActiveLink);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate("/", { state: { sectionId } });
    }
    setIsMobileMenuOpen(false); // Close mobile menu on link click
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <a
          href="#hero_section"
          className={`nav-link naveen-menon ${activeSection === "hero_section" ? "active" : ""}`}
          onClick={(e) => handleSectionClick(e, "hero_section")}
        >
          <span className="text-wrapper">
            <span className="front-text">naveen menon</span>
            <span className="back-text">Home</span>
          </span>
        </a>
      </div>
      <div className="hamburger" onClick={toggleMobileMenu}>
        ☰
      </div>
      <div className={`nav-right ${isMobileMenuOpen ? "mobile-menu open" : "mobile-menu"}`}>
        <a
          href="#projects_section"
          className={`nav-link ${activeSection === "projects_section" ? "active" : ""}`}
          onClick={(e) => handleSectionClick(e, "projects_section")}
        >
          <span className="text-wrapper">
            <span className="front-text">Work</span>
            <span className="back-text">Work</span>
          </span>
        </a>
        <a
          href="#about_section"
          className={`nav-link ${activeSection === "about_section" ? "active" : ""}`}
          onClick={(e) => handleSectionClick(e, "about_section")}
        >
          <span className="text-wrapper">
            <span className="front-text">About</span>
            <span className="back-text">About</span>
          </span>
        </a>
        <a
          href="#footer_section"
          className={`nav-link ${activeSection === "footer_section" ? "active" : ""}`}
          onClick={(e) => handleSectionClick(e, "footer_section")}
        >
          <span className="text-wrapper">
            <span className="front-text">Let's Connect</span>
            <span className="back-text">Contact</span>
          </span>
        </a>
        

      </div>
    </nav>
  );
};

export default Navbar;
