import React, { useEffect, useState } from "react";
import "./Hero.css";
import heroImage from '../../images/bg.webp';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero-section">
      <div className="container">
        <div className={`hero-wrapper ${isVisible ? 'fade-in' : ''}`}>
          <div className="hero-content">
            <p className="hero-span animate-slide-up">ELECTRICAL SOLUTIONS PROVIDER</p>
            <h1 className="hero-title animate-slide-up delay-200">Power Up Your Home with Doctor Energy</h1>
            <button className="hero-btn animate-slide-up delay-400 hover-effect">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
