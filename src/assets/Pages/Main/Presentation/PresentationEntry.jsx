import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { useLanguage } from '../../../../context/LanguageContext';
import buildingBg from './hero_building_bw.png';

const PresentationEntry = () => {
    const { t } = useLanguage();

    const handleOpenPresentation = () => {
        window.location.href = '/presentation';
    };

    return (
        <section className='presentation-section' id='presentation' style={{ marginBottom: '50px', padding: '0 20px' }}>
            <div className="container" data-aos="fade-up" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div className="presentation-entry-wrapper" style={{
                    position: 'relative',
                    width: '100%',
                    height: '500px',
                    backgroundImage: `url(${buildingBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    border: '1px solid #000',
                    overflow: 'hidden',
                    cursor: 'pointer'
                }} onClick={handleOpenPresentation}>

                    {/* Overlay */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(255, 255, 255, 0.85)',
                        zIndex: 1
                    }}></div>

                    {/* Content Layer */}
                    <div style={{ position: 'relative', zIndex: 2, padding: '20px' }}>
                        <h2 style={{
                            fontSize: 'clamp(3rem, 5vw, 5rem)',
                            fontWeight: '900',
                            color: '#000',
                            textTransform: 'uppercase',
                            letterSpacing: '-2px',
                            marginBottom: '20px',
                            lineHeight: '1'
                        }}>
                            DOCTOR ENERGY
                        </h2>
                        <p style={{
                            fontSize: '1.2rem',
                            color: '#003366',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            letterSpacing: '3px',
                            background: '#fff',
                            padding: '10px 20px',
                            border: '1px solid #000',
                            display: 'inline-block',
                            marginBottom: '40px'
                        }}>
                            {t('presentation.entry.tagline')}
                        </p>

                        <div>
                            <button style={{
                                background: '#000',
                                color: '#fff',
                                border: 'none',
                                padding: '15px 40px',
                                fontSize: '1rem',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                margin: '0 auto'
                            }}>
                                <FaPlay size={14} /> {t('presentation.entry.openBtn')}
                            </button>
                        </div>
                    </div>

                    {/* Decor elements */}
                    <div style={{
                        position: 'absolute',
                        bottom: '20px',
                        right: '20px',
                        fontSize: '0.8rem',
                        color: '#000',
                        fontWeight: '600',
                        zIndex: 2,
                        letterSpacing: '1px'
                    }}>
                        {t('presentation.entry.portfolioLabel')}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PresentationEntry;
