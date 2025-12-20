import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = {
    en: { name: 'English', flag: '🇬🇧' },
    uz: { name: 'O'zbek', flag: '🇺🇿' },
    ru: { name: 'Русский', flag: '🇷🇺' }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const currentLang = languages[i18n.language] || languages.en;

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button 
        className="language-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="language-flag">{currentLang.flag}</span>
        <span className="language-name">{currentLang.name}</span>
        <span className={`arrow-icon ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      
      <div className={`language-dropdown ${isOpen ? 'show' : ''}`}>
        {Object.entries(languages).map(([code, lang]) => (
          <button
            key={code}
            className={`language-option ${i18n.language === code ? 'active' : ''}`}
            onClick={() => changeLanguage(code)}
          >
            <span className="language-flag">{lang.flag}</span>
            <span className="language-name">{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher; 