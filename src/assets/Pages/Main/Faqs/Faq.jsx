import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import './Faq.css';
import { useLanguage } from '../../../../context/LanguageContext';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef(null);

  return (
    <div className="faq-item" id='faq'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="faq-question"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <ChevronDown
          className={`faq-icon ${isOpen ? 'open' : ''}`}
        />
      </button>

      <div
        className={`faq-answer ${isOpen ? 'open' : ''}`}
        ref={answerRef}
      >
        {answer}
      </div>
    </div>
  );
};

const FAQ = () => {
  const sectionRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const items = document.querySelectorAll('.faq-item');
    items.forEach((item, index) => {
      item.style.transitionDelay = `${index * 100}ms`;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const faqs = [1, 2, 3, 4, 5].map(id => ({
    question: t(`faq.items.${id}.q`),
    answer: t(`faq.items.${id}.a`)
  }));

  return (
    <section className="faq-section" ref={sectionRef}>
      <div className="container">
        <h2 className="faq-title">
          {t('faq.title')}
        </h2>

        <div className="faq-wrapper">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;