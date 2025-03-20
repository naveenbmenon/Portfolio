import React from "react";
import "./AboutSection.css";

const About = () => {
  return (
    <section className="about-section" id="about_section">
      <div className="about-content">
        <p className="intro-text">A little insight into who I am...</p>
        <h2 className="section-title">Who I Am</h2>
        <p className="about-text">
          A second-year Computer & Communication Engineering student who enjoys experimenting with tech, learning new frameworks, and creating solutions that matter.
        </p>
        
        <h2 className="section-title">What Drives Me</h2>
        <p className="about-text">
          Seeing an idea go from a rough sketch to a functional product is what excites me the most. Whether it's a sleek web app, a data-driven model, or an optimized algorithm, I love making things work efficiently.
        </p>

        {/* Skills Section */}
  <h2 className="section-title">Skills & Tech Stack</h2>
  <ul className="skills-list">
    <li>⚡ React.js</li>
    <li>💻 HTML, CSS</li>
    <li>🛠️ C Programming</li>
    <li>🐍 Python</li>
  </ul>
      </div>
      

      <div className="img-container">
        <div className="profile-naveen">
          <img src="/images/bg.jpg" alt="profile" />
        </div>
      </div>
    </section>
  );
};

export default About;