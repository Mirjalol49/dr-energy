import React from 'react';
import './Footer.css';
import logo from '../../images/logo_winter.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <img src={logo} alt="Doctor Energy Logo" />
                        </div>
                        <p>Empowering homes and businesses with innovative energy solutions for a sustainable future.</p>
                        {/* <div className="social-links">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </div> */}
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contact Info</h4>
                        <ul className="contact-info">
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                123 Energy Street, City, Country
                            </li>
                            <li>
                                <a href="tel:+998909177144" className="fas fa-phone"></a>
                                +998 90 917 71 44
                            </li>
                            <li>
                                <i className="fas fa-envelope"></i>
                                info@enercon.uz
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Business Hours</h4>
                        <ul className="business-hours">
                            <li>
                                <span>Monday - Friday</span>
                                <span>9:00 AM - 6:00 PM</span>
                            </li>
                            <li>
                                <span>Saturday:</span>
                                <span>10:00 AM - 4:00 PM</span>
                            </li>
                            <li className='footer-li'>
                                <span>Sunday:</span>
                                <span className='footer-span'>Closed</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">
                        © {currentYear} Dr Energy. All rights reserved.
                    </div>
                    <div className="footer-links">
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/terms">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
