import React from 'react';
import './Footer.css';
import logo from '../../images/logo_winter.png';

import { useLanguage } from '../../../context/LanguageContext';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { t } = useLanguage();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <img src={logo} alt="Doctor Energy Logo" />
                        </div>
                        <p>{t('footer.description')}</p>
                    </div>

                    <div className="footer-section">
                        <h4>{t('footer.quickLinks')}</h4>
                        <ul>
                            <li><a href="#about">{t('nav.about')}</a></li>
                            <li><a href="#services">{t('nav.services')}</a></li>
                            <li><a href="#projects">{t('nav.projects')}</a></li>
                            <li><a href="#contact">{t('nav.contact')}</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>{t('footer.contactInfo')}</h4>
                        <ul className="contact-info">
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                {t('footer.addr')}
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
                        <h4>{t('footer.businessHours')}</h4>
                        <ul className="business-hours">
                            <li>
                                <span>{t('footer.monFri')}</span>
                                <span>9:00 AM - 6:00 PM</span>
                            </li>
                            <li>
                                <span>{t('footer.sat')}</span>
                                <span>10:00 AM - 4:00 PM</span>
                            </li>
                            <li className='footer-li'>
                                <span>{t('footer.sun')}</span>
                                <span className='footer-span'>{t('footer.closed')}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">
                        © {currentYear} Dr Energy. {t('footer.rights')}
                    </div>
                    <div className="footer-links">
                        <a href="/privacy">{t('footer.privacy')}</a>
                        <a href="/terms">{t('footer.terms')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
