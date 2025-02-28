import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import './Faq.css';

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

  const faqs = [
    {
      question: "What services do you provide?",
      answer: "We offer a comprehensive range of electrical services including residential and commercial wiring, electrical repairs, installation of energy-efficient systems, smart home automation, lighting solutions, and 24/7 emergency electrical services. Our team specializes in both modern installations and maintenance of existing systems."
    },
    {
      question: "Do you provide emergency electrical services?",
      answer: "Yes, we provide 24/7 emergency electrical services with rapid response times. Our team of certified electricians is always ready to handle urgent electrical issues, ensuring your safety and preventing further damage to your property. Contact our emergency hotline for immediate assistance."
    },
    {
      question: "How can I request a service or get a quote?",
      answer: "Requesting a service or getting a quote is simple. You can either fill out our online form, call our customer support team, or send us an email. We'll respond within 24 hours with a detailed estimate. For emergency services, we provide immediate phone support and quick on-site response."
    },
    {
      question: "Are your electricians licensed and insured?",
      answer: "Absolutely. All our electricians are fully licensed, certified, and insured. They undergo regular training to stay updated with the latest electrical codes and safety standards. We maintain comprehensive insurance coverage for all our work, giving you complete peace of mind."
    },
    {
      question: "What areas do you serve?",
      answer: "We provide electrical services throughout the metropolitan area and surrounding suburbs. Our service area includes both residential and commercial locations, and we're equipped to handle projects of any size within our coverage zone. Contact us to confirm service availability in your specific location."
    }
  ];

  return (
    <section className="faq-section" ref={sectionRef}>
      <div className="container">
        <h2 className="faq-title">
          Frequently Asked Questions
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