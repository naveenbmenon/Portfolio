import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/avatar.json"; // Import local JSON file

const HeroAnimation = () => {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}
      style={{ width: 300, height: 300 }}
    />
  );
};

export default HeroAnimation;
