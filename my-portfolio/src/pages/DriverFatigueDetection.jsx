import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Lottie from "lottie-react";
import animationData from "../assets/driver-animation.json"; // Replace with relevant animation
import Footer from "../components/Footer"; // Importing the footer component

import "./DriverFatigueDetection.css";

const DriverFatigueDetection = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 200);
  }, []);

  return (
    <div className="fatigue-detection">
      {/* Project Title and Summary */}
      <section className={`fatigue-intro ${fadeIn ? "fade-in" : ""}`}>
        <div className="text-content">
          <h1>Driver Fatigue Detection</h1>
          <p className="tagline">Enhancing Road Safety with AI & EEG Signals</p>
          <p className="intro">
            This project focuses on preventing road accidents by detecting driver fatigue using EEG signals and machine learning models.
          </p>
          <p className="role">
            Utilizing advanced algorithms, real-time EEG analysis, and predictive modeling to alert drivers before fatigue-related incidents occur.
          </p>
        </div>
        <div className="animation">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </section>

      {/* Merged Problem Statement & Dataset Section */}
      <section className="problem-dataset-section">
        <h2>Understanding the Problem & Dataset</h2>
        <p>
          Fatigue contributes to around <strong>20-25% of road accidents</strong> worldwide. Traditional detection methods lack accuracy, 
          necessitating an AI-driven EEG-based solution to monitor driver alertness in real-time.
        </p>
        <p>
          To tackle this issue, we utilize a dataset from <strong>FigShare</strong>, titled <i>"The original EEG data for driver fatigue detection."</i> 
          This dataset includes EEG recordings from <strong>12 drivers</strong> in both normal and fatigued states, stored in <code>.cnt</code> format.
        </p>
      </section>

      {/* Algorithm Calibration */}
      <section className="algorithms-section">
        <h2>Algorithm Calibration</h2>

        <h3>Supervised Learning Algorithms</h3>
        <ul>
          <li><strong>Support Vector Machines (SVM)</strong>: Classifies fatigue states based on EEG features.</li>
          <li><strong>Logistic Regression</strong>: Estimates fatigue probability using statistical patterns.</li>
          <li><strong>Random Forest</strong>: Uses multiple decision trees for accurate classification.</li>
          <li><strong>K-Nearest Neighbors (KNN)</strong>: Compares EEG feature vectors to detect fatigue.</li>
        </ul>

        <h3>Unsupervised Learning Algorithms</h3>
        <ul>
          <li><strong>K-Means Clustering</strong>: Segments EEG signals into different fatigue levels.</li>
        </ul>

        <h3>Neural Networks</h3>
        <ul>
          <li><strong>Artificial Neural Networks (ANNs)</strong>: Learns complex EEG signal patterns for fatigue detection.</li>
        </ul>
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
                <img src="/images/eeg-signal.png" alt="EEG Signal Processing" className="demo-image" />
                <p className="demo-caption">EEG Signal Processing</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/model-training.png" alt="Model Training Process" className="demo-image" />
                <p className="demo-caption">Machine Learning Model Training</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/fatigue-alert.png" alt="Fatigue Alert System" className="demo-image" />
                <p className="demo-caption">Real-Time Fatigue Alert System</p>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="demo-description">
            <h3>See Driver Fatigue Detection in Action</h3>
            <p>
              This system processes EEG signals in real-time, applies machine learning models, and triggers alerts when fatigue is detected, ensuring safer driving.
            </p>
            <p>
              The platform leverages AI-driven analytics to provide accurate fatigue assessment, reducing the risk of fatigue-related accidents.
            </p>
            <div className="project-links">
              <a href="https://github.com/naveenbmenon/Driver-Fatigue-Detection" className="github-link" target="_blank" rel="noopener noreferrer">
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

export default DriverFatigueDetection;
