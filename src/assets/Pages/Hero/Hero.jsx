import React, { useEffect, useState } from "react";
import "./Hero.css";
import heroImage from '../../images/bg.webp';

import { useLanguage } from "../../../context/LanguageContext";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero-section">
      <div className="container">
        <div className={`hero-wrapper ${isVisible ? 'fade-in' : ''}`}>
          <div className="hero-content">
            <p className="hero-span animate-slide-up">{t('hero.span')}</p>
            <h1 className="hero-title animate-slide-up delay-200">{t('hero.title')}</h1>
            <button className="hero-btn animate-slide-up delay-400 hover-effect">
              {t('hero.btn')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
