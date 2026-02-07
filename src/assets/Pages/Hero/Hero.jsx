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
            <h1 className="hero-title animate-slide-up delay-200">
              {t('hero.title').split('Doctor Energy').map((part, index, array) => {
                // Check if the part ends with "с " (Cyrillic "es" + space)
                // This is a specific fix for Russian grammar "with Doctor Energy" hanging
                const hasHangingPreposition = part.trim().endsWith("с");

                let renderPart = part;
                let preposition = "";

                if (hasHangingPreposition && part.endsWith("с ")) {
                  renderPart = part.slice(0, -2); // Remove "с "
                  preposition = "с ";
                }
                // Handle newlines explicitly if not using pre-line CSS everywhere, 
                // but we enabled pre-line.

                return (
                  <React.Fragment key={index}>
                    {renderPart}
                    {index < array.length - 1 && (
                      <span style={{ whiteSpace: 'nowrap' }}>
                        {preposition}
                        <span className="brand-name">Doctor Energy</span>
                      </span>
                    )}
                  </React.Fragment>
                )
              })}
            </h1>
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
