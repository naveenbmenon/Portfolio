import React from "react";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import About from "../components/AboutSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Projects />
      <About />
      <Footer />
    </>
  );
};

export default Home;
