import React, { useEffect, useState } from "react";
import { animated } from 'react-spring';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from "../../../context/LanguageContext";
import { useBoop } from '../../../hooks/useBoop';
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion';
import "./Hero.css";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();
  const [boopStyle, triggerBoop] = useBoop({ x: 5, timing: 200 });
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-bg-layer" />
      <div className="hero-overlay backdrop-blur-[2px]" />
      
      <div className="relative z-20 container mx-auto px-6 md:px-12 lg:px-20 w-full max-w-7xl flex flex-col items-start justify-center text-left">
        
        {/* Sleek pill badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-slate-100 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(255,255,255,0.05)] ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <Sparkles className="w-4 h-4 text-[#ccfc4d]" />
          <span>{t('hero.span')}</span>
        </div>

        {/* Main Heading */}
        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-extrabold text-white tracking-tight leading-[1.1] mb-8 max-w-4xl whitespace-pre-line ${isVisible ? 'animate-slide-up delay-200' : 'opacity-0'}`}>
          {t('hero.title').split('Doctor Energy').map((part, index, array) => {
            const hasHangingPreposition = part.trim().endsWith("с");
            let renderPart = part;
            let preposition = "";

            if (hasHangingPreposition && part.endsWith("с ")) {
              renderPart = part.slice(0, -2);
              preposition = "с ";
            }

            return (
              <React.Fragment key={index}>
                {renderPart}
                {index < array.length - 1 && (
                  <span className="whitespace-nowrap">
                    {preposition}
                    <span className="inline-block text-[#ccfc4d] drop-shadow-[0_2px_10px_rgba(204,252,77,0.2)]">
                      Doctor Energy
                    </span>
                  </span>
                )}
              </React.Fragment>
            )
          })}
        </h1>

        {/* Dynamic CTA Button */}
        <button 
          onMouseEnter={triggerBoop}
          className={`relative isolate inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 bg-[#ccfc4d] hover:bg-[#d6ff66] text-[#0b2c3d] rounded-2xl font-bold transition-all duration-300 active:scale-[0.98] shadow-[0_8px_30px_rgba(204,252,77,0.2)] hover:shadow-[0_12px_40px_rgba(204,252,77,0.35)] overflow-hidden group ${isVisible ? 'animate-slide-up delay-400' : 'opacity-0'}`}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent -z-10" />
          
          <span className="tracking-wide uppercase text-sm sm:text-base">{t('hero.btn')}</span>
          {!prefersReducedMotion ? (
            <animated.div style={boopStyle} className="flex">
              <ArrowRight className="w-5 h-5 text-[#0b2c3d]" />
            </animated.div>
          ) : (
            <div className="flex">
              <ArrowRight className="w-5 h-5 text-[#0b2c3d]" />
            </div>
          )}
        </button>

      </div>
    </section>
  );
};

export default Hero;
