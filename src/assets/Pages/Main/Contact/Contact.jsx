import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const sectionRef = useRef(null);

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
        <section className="contact-section" ref={sectionRef}>
            <div className="container">
                <h2 className="contact-title">Get in Touch</h2>
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h3>Let&apos;s Connect</h3>
                        <p>Have a question or want to discuss a project? Send us a message and we&apos;ll get back to you as soon as possible.</p>
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
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Type your message here"
                                required
                            />
                        </div>
                        <button 
                            type="submit" 
                            className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
