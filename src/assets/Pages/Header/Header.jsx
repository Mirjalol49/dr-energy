import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./Header.css";
import Logo from "../../images/drenergy_logo.png";
import { useLanguage } from "../../../context/LanguageContext";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const { language, changeLanguage, t } = useLanguage();
  const langRef = useRef(null);
  const langButtonRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside both the button and the dropdown menu
      if (
        langRef.current &&
        !langRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsLangOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isLangOpen && langButtonRef.current) {
      const rect = langButtonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 8,
        left: rect.left + rect.width / 2
      });
    }
  }, [isLangOpen]);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const menuItems = [
    { href: "#services", text: t('nav.services') },
    { href: "#about", text: t('nav.about') },
    { href: "#projects", text: t('nav.projects') },
    { href: "#faq", text: t('nav.faq') }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-wrapper">
          <a href="https://www.enercon.uz/" className="logo-link">
            <img src={Logo} width={250} height={150} alt="Dr Energy Logo" />
          </a>

          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              {menuItems.map((item, index) => (
                <li key={item.href} className="nav-item" style={{ "--item-index": index }}>
                  <a className="nav-item_link" href={item.href} onClick={closeMenu}>
                    {item.text}
                  </a>
                </li>
              ))}
              <li className="nav-item" style={{ "--item-index": menuItems.length }}>
                <div className="language-dropdown" ref={langRef}>
                  <button
                    ref={langButtonRef}
                    className="current-lang-btn"
                    onClick={() => setIsLangOpen(!isLangOpen)}
                  >
                    {language.toUpperCase()}
                    <ChevronDown className={`lang-arrow ${isLangOpen ? 'open' : ''}`} size={16} />
                  </button>
                </div>
              </li>
              <li className="nav-item" style={{ "--item-index": menuItems.length + 1 }}>
                <a className="nav-item_btn" href="#contact" onClick={closeMenu}>
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </nav>

          <button
            className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          </button>

          {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
        </div>
      </div>

      {isLangOpen && ReactDOM.createPortal(
        <div
          ref={dropdownRef}
          className="lang-dropdown-menu-portal"
          style={{
            position: 'fixed',
            top: `${dropdownPosition.top}px`,
            left: `${dropdownPosition.left}px`,
            transform: 'translateX(-50%)',
            zIndex: 99999
          }}
        >
          <div className="lang-dropdown-menu">
            {['ru', 'en', 'uz'].map((lang) => (
              <button
                key={lang}
                className={`lang-option ${language === lang ? 'active' : ''}`}
                onClick={() => {
                  changeLanguage(lang);
                  setIsLangOpen(false);
                }}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>,
        document.body
      )}
    </header>
  );
};

export default Header;
