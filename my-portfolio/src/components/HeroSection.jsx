import React from "react";
import "./hero.css";
import HeroAnimation from "./HeroAnimation";

const HeroSection = () => {
  return (
    <>
      <section id="hero_section" className="hero flex justify-between items-center p-10">
        <section className="hero-container">
          <h1 className="hero-title">
            Crafting <span className="underline-effect">experiences</span>, one pixel at a time.
          </h1>
          <p className="hero-subtitle">
            I'm Naveen <span className="wave">👋</span>, a 
            <span className="oval-effect"> second-year student </span>  
            <span className="underline-effect">passionate</span> about turning ideas into  
            <span className="oval-effect"> interactive</span>, <span >user-friendly</span> designs. Let’s build something awesome!
          </p>
          
          {/* Download CV Button */}
          <div className="cta-button-container">
            <a href="/path-to-your-cv.pdf" download className="cta-button">
              Download CV
            </a>
          </div>
        </section>

        {/* Right Side - Lottie Animation */}
        <div className="hero-animation">
          <HeroAnimation />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
