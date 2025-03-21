import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Lottie from "lottie-react";
import animationData from "../assets/animation.json";
import Footer from "../components/Footer"; // Importing the footer component

import "./FinanceManager.css";

const FinanceManager = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);
  
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 200);
  }, []);

  return (
    <div className="finance-manager">
      {/* Project Title and Summary */}
      <section className={`finance-intro ${fadeIn ? "fade-in" : ""}`}>
        <div className="text-content">
          <h1>FINANCE MANAGER</h1>
          <p className="tagline">Your Personal & Business Financial Assistant</p>
          <p className="intro">
            Track expenses, budget efficiently, and make smarter financial decisions – all in one place.
          </p>
          <p className="role">
            Designed to simplify financial management by integrating <strong>expense tracking, budgeting,</strong> and <strong>investment insights</strong> seamlessly.
          </p>
        </div>
        <div className="animation">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </section>

      {/* Motivation and Challenges */}
      <section className="motivation-section">
        <h2>Why This Project?</h2>
        <div className="motivation-content">
          <div className="problem-box">
            <h3>The Problem</h3>
            <p>Handling finances manually or using multiple tools can be overwhelming and prone to errors.</p>
          </div>
          <div className="solution-box">
            <h3>Our Solution</h3>
            <p>A single platform that unifies expense tracking, budgeting, and investments.</p>
          </div>
        </div>
        <div className="motivation-stats">
          <div className="stat">
            <h3>80%</h3>
            <p>of individuals struggle with financial planning.</p>
          </div>
          <div className="stat">
            <h3>60%</h3>
            <p>find traditional budgeting tools too complex.</p>
          </div>
          <div className="stat">
            <h3>45%</h3>
            <p>lack a structured way to track expenses.</p>
          </div>
        </div>
      </section>

      {/* Features and Functionality */}
      <section className="features-tech-section">
        <h2>More about Finance Manager</h2>
        <p className="tech-description">
          Our <strong>Finance Manager</strong> is an AI-powered platform designed to help users manage finances with <strong>real-time analytics</strong>, <strong>expense tracking</strong>, <strong>goal-based saving</strong>, and <strong>investment insights</strong> in a user-friendly interface.
        </p>

        <p className="tech-description">
          Built with <strong>React.js</strong> for a responsive frontend, <strong>Node.js</strong> and <strong>Express.js</strong> for the backend, and <strong>MySQL</strong> for secure data storage. We integrate <strong>third-party financial APIs</strong> for market updates and smart expense categorization.
        </p>

        <p className="tech-description">
          With AI-driven insights and an intuitive dashboard, our platform empowers users to make informed financial decisions, from tracking expenses to optimizing investments.
        </p>

        <h2>Key Features</h2>

        <div className="image-container">
    <img src="/images/project-features.png" alt="Project Features" className="feature-image" />
  </div>
      </section>

      {/* Project Demo Section */}
      <section className="project-demo-section">
        <h2>Project Demo</h2>
        <div className="demo-container">
          <div className="demo-screenshots">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000 }}
              loop={true}
              className="demo-carousel"
            >
              <SwiperSlide>
                <img src="" alt="Dashboard View" className="demo-image" />
                <p className="demo-caption">Dashboard Overview</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="" alt="Expense Tracker" className="demo-image" />
                <p className="demo-caption">Expense Tracking Interface</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="" alt="Budget Planner" className="demo-image" />
                <p className="demo-caption">Budget Planning Tools</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="" alt="Investment Tracker" className="demo-image" />
                <p className="demo-caption">Investment Portfolio Tracker</p>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="demo-description">
            <h3>Experience the Finance Manager in Action</h3>
            <p>
              The Finance Manager application provides a comprehensive solution for personal and business
              financial management. The intuitive interface allows users to easily track expenses,
              plan budgets, and monitor investments all in one place.
            </p>
            <p>
              The platform includes features such as automated expense categorization, budget alerts,
              financial goal tracking, and investment performance analysis.
            </p>
            <div className="project-links">
              <a href="https://github.com/naveenbmenon/Finance-Manager" className="github-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> View on GitHub
              </a>
              
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FinanceManager;
