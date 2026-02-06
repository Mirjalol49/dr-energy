import React, { useEffect, useRef } from 'react';
import "./AboutUs.css"
import { useLanguage } from '../../../../context/LanguageContext';

const AboutUs = () => {
  const sectionRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.fade-in');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className='about-us-section' ref={sectionRef} id='about'>
      <div className="container">
        <div className="about-us-header fade-in">
          <h2 className='about-us-main-title'>DOCTOR ENERGY</h2>
          <div className="about-us-subtitle-box">
            <span className="about-us-year">2009</span>
            <div className="about-us-divider"></div>
            <p className="about-us-subtitle">{t('aboutUs.subtitle')}</p>
          </div>
        </div>

        <div className="about-us-content fade-in">
          <p className="about-us-description">
            {t('aboutUs.description')}
          </p>
        </div>

        <div className="about-us-projects fade-in">
          <h3 className="projects-title">{t('aboutUs.projectsTitle')}</h3>
          <p className="projects-intro">{t('aboutUs.projectsIntro')}</p>

          <div className="projects-grid">
            <div className="project-card">
              <div className="project-number">160</div>
              <p className="project-location">{t('aboutUs.project1')}</p>
            </div>
            <div className="project-card">
              <div className="project-number">222</div>
              <p className="project-location">{t('aboutUs.project2')}</p>
            </div>
            <div className="project-card">
              <div className="project-number">116</div>
              <p className="project-location">{t('aboutUs.project3')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
