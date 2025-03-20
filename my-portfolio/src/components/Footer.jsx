import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer_section">
      <div className="footer-separator"></div>
      <div className="top-footer">
        <span className="nm">NM/</span>
        <span className="twentyfive">/25</span>
      </div>

      {/* Get in Touch and Contact Me */}
      <div className="contact-info">
        <div className="get-in-touch">Get in Touch</div>
        <div className="contact-me">Contact Me</div>
      </div>

      <div className="middlefooter">
        <div className="social-links">
          <a href="https://www.linkedin.com/in/naveen-menon-b1a28a330/" target="_blank" rel="noopener noreferrer">
            <span role="img" aria-label="LinkedIn">🔗</span> LinkedIn
          </a>
          <a href="https://github.com/naveenbmenon" target="_blank" rel="noopener noreferrer">
            <span role="img" aria-label="GitHub">💻</span> GitHub
          </a>
          <a href="mailto:naveenbijulalmenon@gmail.com">
            <span role="img" aria-label="Email">✉️</span> Email
          </a>
        </div>
      </div>

      {/* Thin Line Separator */}
      <div className="footer-separator"></div>

      <div className="bottom-footer">
        <p className="portfolio">&lt;/Naveen's Portfolio&gt; | EST. 2025</p>
        <p className="updated">Copyright © 2025| All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
