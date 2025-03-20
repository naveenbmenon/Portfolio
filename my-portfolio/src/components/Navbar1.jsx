// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // Ensure the styles are properly linked

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav ul li a");

    // Function to highlight the active link based on scroll position
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
    highlightActiveLink(); // Call once on mount to set the initial active link

    return () => {
      window.removeEventListener("scroll", highlightActiveLink);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link
          to="/"
          className={`nav-link naveen-menon ${activeSection === "hero_section" ? "active" : ""}`}
          onClick={() => {
            // After navigation, scroll to hero_section
            setTimeout(() => {
              const section = document.getElementById("hero_section");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }, 500); // delay to ensure page navigation before scrolling
          }}
        >
          <span className="text-wrapper">
            <span className="front-text">naveen menon</span>
            <span className="back-text">Home</span>
          </span>
        </Link>
      </div>
      <div className="nav-right">
        {/* Other nav links */}
      </div>
    </nav>
  );
};

export default Navbar;
