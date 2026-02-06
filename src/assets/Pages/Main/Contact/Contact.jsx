import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';
import { useLanguage } from '../../../../context/LanguageContext';

const Contact = () => {
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const sectionRef = useRef(null);
    const { t } = useLanguage();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Add your form submission logic here
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="contact-section" ref={sectionRef} id='contact'>
            <div className="container">
                <h2 className="contact-title">{t('contact.title')}</h2>
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h3>{t('contact.connect')}</h3>
                        <p>{t('contact.desc')}</p>
                        <div className="contact-details">
                            <div className="contact-detail-item">
                                <i className="fas fa-envelope"></i>
                                info@enercon.uz
                            </div>
                            <div className="contact-detail-item">
                                <a href="tel:++998909177144" className="fas fa-phone"></a>
                                +998 90 917 71 44
                            </div>
                        </div>
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">{t('contact.email')}</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder={t('contact.emailPh')}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">{t('contact.message')}</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder={t('contact.messagePh')}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? t('contact.sending') : t('contact.send')}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
