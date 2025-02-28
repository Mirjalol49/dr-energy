import React, { useEffect, useRef } from 'react';
import "./AboutUs.css"

const AboutUs = () => {
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  const animateNumber = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = Math.floor(progress * (end - start) + start);
      element.textContent = `${current}+`;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.about-us-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate');
                const numberElement = item.querySelector('h3');
                animateNumber(numberElement, 0, 90, 2000);
              }, index * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className='about-us-section' ref={sectionRef} id='about'>
      <div className="container">
        <h3 className='about-us-title'>At Electrician, we pride ourselves on our unwavering commitment to quality. With a team of highly trained and certified electricians, we are dedicated to delivering top-notch electrical solutions for both residential and commercial clients.</h3>
        <div className="about-us-wrapper">
          <div className='about-us-item'>
            <h3>0+</h3>
            <p>Years of Experience</p>
          </div>
          <div className='about-us-item'>
            <h3>0+</h3>
            <p>Projects Completed</p>
          </div>
          <div className='about-us-item'>
            <h3>0+</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
