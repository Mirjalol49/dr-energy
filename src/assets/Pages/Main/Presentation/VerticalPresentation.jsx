import React, { useState } from 'react';
import './VerticalPresentation.css';
import './BackButton.css';
import { useLanguage } from '../../../../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

// --- IMPORTS ---
import buildingBg from './hero_building_bw.png';
import aboutBg from './about_construction_bw.png';
import pipelineBg from './about_pipeline_bw.png';
import visionBg from './about_vision_bw.png';
import project116Bg from './project_116.jpg';
import project160Bg from './project_160.jpg';
import project222Bg from './project_222.jpg';
import margilan1 from './projects/margilan1.jpg';
import margilan2 from './projects/margilan2.jpg';
import margilan3 from './projects/margilan3.jpg';
import margilan5 from './projects/margilan5.jpg';
import margilan6 from './projects/margilan6.jpg';
import margilan7 from './projects/margilan7.jpg';
import margilan8 from './projects/margilan8.jpg';
import margilan9 from './projects/margilan9.jpg';
import margilan10 from './projects/margilan10.jpg';
import margilan11 from './projects/margilan11.jpg';
import margilan12 from './projects/margilan12.jpg';
import margilan13 from './projects/margilan13.jpg';
import dangara1 from './projects/dangara1.jpg';
import dangara2 from './projects/dangara2.jpg';
import dangara3 from './projects/dangara3.jpg';
import dangara4 from './projects/dangara4.jpg';
import dangara5 from './projects/dangara5.jpg';
import dangara6 from './projects/dangara6.jpg';
import dangara7 from './projects/dangara7.jpg';
import dangara8 from './projects/dangara8.jpg';
import dangara9 from './projects/dangara9.jpg';
import dangara10 from './projects/dangara10.jpg';
import dangara11 from './projects/dangara11.jpg';
import dangaraVideo from './projects/dangara13.mp4';
import asaka1 from './projects/asaka1.jpg';
import asaka2 from './projects/asaka2.jpg';
import asaka3 from './projects/asaka3.jpg';
import asaka4 from './projects/asaka4.jpg';
import asaka5 from './projects/asaka5.jpg';
import asaka6 from './projects/asaka6.jpg';
import asaka7 from './projects/asaka7.jpg';
import asaka8 from './projects/asaka8.jpg';
import asaka9 from './projects/asaka9.jpg';
import solar1 from './projects/solar_jizzakh.jpg';
import solar2 from './projects/solar_jizzakh2.jpg';
import solar3 from './projects/solar_jizzakh3.jpg';
import solar4 from './projects/solar_jizzakh4.jpg';
import solar5 from './projects/solar_jizzakh5.jpg';
import solar6 from './projects/solar_jizzakh6.jpg';
import solar7 from './projects/solar_jizzakh7.jpg';
import solar8 from './projects/solar_jizzakh8.jpg';
import solar9 from './projects/solar_jizzakh9.jpg';
import solar10 from './projects/solar_jizzakh10.jpg';
import solar11 from './projects/solar_jizzakh11.jpg';
import solar12 from './projects/solar_jizzakh12.jpg';
import solarSamarkand1 from './projects/solar_samarkand.jpg';
import solarSamarkand2 from './projects/solar_samarkand2.jpg';
import solarSamarkand3 from './projects/solar_samarkand3.jpg';
import solarSamarkand4 from './projects/solar_samarkand4.jpg';
import solarSamarkand5 from './projects/solar_samarkand5.jpg';
import solarSamarkand6 from './projects/solar_samarkand6.jpg';
import tashkentCityMall from './projects/tashkent_city_mall.jpg';
import tashkentCityLogo from './projects/tashkent_city_logo.png';
import tashkentmall1 from './projects/mall/tashkentmall1.jpg';
import tashkentmall2 from './projects/mall/tashkentmall2.jpg';
import tashkentmall3 from './projects/mall/tashkentmall3.jpg';
import tashkentmall4 from './projects/mall/tashkentmall4.jpg';
import tashkentmall5 from './projects/mall/tashkentmall5.jpg';
import tashkentmall6 from './projects/mall/tashkentmall6.jpg';
import tashkentmall7 from './projects/mall/tashknetmall7.jpg';
import tashkentmall8 from './projects/mall/tashkentmall8.jpg';
import tashkentmall9 from './projects/mall/tashkentmall9.jpg';
import tashkentmall10 from './projects/mall/tashkentmall10.jpg';
import tashkentmall11 from './projects/mall/tashkentmall11.jpg';
import tashkentmall12 from './projects/mall/tashkentmall12.jpg';
import tashkentmall13 from './projects/mall/tashkentmall13.jpg';
import tashkentmall14 from './projects/mall/tashkentmall14.jpg';
import tashkentmall15 from './projects/mall/tashkentmall15.jpg';
import tashkentmall16 from './projects/mall/tashkentmall16.jpg';
import tashkentmall18 from './projects/mall/tashkentmall18.jpg';
import tashkentmall19 from './projects/mall/tashkentmall19.jpg';
import tashkentmall20 from './projects/mall/tashkentmall20.jpg';
import tashkentmall21 from './projects/mall/tashkentmall21.jpg';
import tashkentmall22 from './projects/mall/tashkentmall22.jpg';
import tashkentmall23 from './projects/mall/tashkentmall23.jpg';
import tashkentmall24 from './projects/mall/tashkentmall24.jpg';
import tashkentmall25 from './projects/mall/tashkentmall25.jpg';
import tashkentmall26 from './projects/mall/tashkentmall26.jpg';
import tashkentmall27 from './projects/mall/tashkentmall27.jpg';
import tashkentmall28 from './projects/mall/tashkentmall28.jpg';
import tashkentmall29 from './projects/mall/tashkentmall29.jpg';
import tashkentmall30 from './projects/mall/tashkentmall30.jpg';
import tashkentmall31 from './projects/mall/tashkentmall31.jpg';
import tashkentmall32 from './projects/mall/tashkentmall32.jpg';
import tashkentmall34 from './projects/mall/tashkentmall34.jpg';
import tashkentmall35 from './projects/mall/tashkentmall35.jpg';
import soho1 from './projects/soho/soho1.jpg';
import soho2 from './projects/soho/soho2.jpg';
import soho3 from './projects/soho/soho3.jpg';
import soho4 from './projects/soho/soho4.jpg';
import soho5 from './projects/soho/soho5.jpg';
import soho6 from './projects/soho/soho6.jpg';
import soho7 from './projects/soho/soho7.jpg';
import soho8 from './projects/soho/soho8.jpg';
import soho9 from './projects/soho/soho9.jpg';
import soho10 from './projects/soho/soho10.jpg';
import soho11 from './projects/soho/soho11.jpg';
import soho12 from './projects/soho/soho12.jpg';
import soho14 from './projects/soho/soho14.jpg';

import asakaBank1 from './projects/asaka bank/asaka_bank1.mp4';
import asakaBank2 from './projects/asaka bank/asaka_bank2.mp4';
import asakaBank3 from './projects/asaka bank/asaka_bank3.mp4';
import asakaBank4 from './projects/asaka bank/asaka_bank4.mp4';
import asakaBank5 from './projects/asaka bank/asaka_bank5.jpg';
import asakaBank6 from './projects/asaka bank/asaka_bank6.jpg';
import asakaBank7 from './projects/asaka bank/asaka_bank7.jpg';
import asakaBank8 from './projects/asaka bank/asaka_bank8.MOV';
import asakaBank10 from './projects/asaka bank/asaka_bank10.MOV';
import asakaBank11 from './projects/asaka bank/asaka_bank11.MOV';
import asakaBank12 from './projects/asaka bank/asaka_bank12.MOV';
import asakaBank13 from './projects/asaka bank/asaka_bank13.MOV';
import asakaBank14 from './projects/asaka bank/asaka_bank14.MOV';
import asakaBank16 from './projects/asaka bank/asaka_bank16.MOV';
import asakaBank16mp4 from './projects/asaka bank/asaka_bank16.MP4';
import asakaBank18 from './projects/asaka bank/asaka_bank18.jpg';
import asakaBank19 from './projects/asaka bank/asaka_bank19.mp4';
import asakaBank21 from './projects/asaka bank/asaka_bank21.jpg';
import aloqa1 from './projects/aloqa bank/aloqa_bank.jpg';
import aloqa2 from './projects/aloqa bank/aloqa_bank2.mp4';
import aloqa3 from './projects/aloqa bank/aloqa_bank3.jpg';
import aloqa4 from './projects/aloqa bank/aloqa_bank4.jpg';
import aloqa5 from './projects/aloqa bank/aloqa_bank5.jpg';
import aloqa6 from './projects/aloqa bank/aloqa_bank6.jpg';
import aloqa7 from './projects/aloqa bank/aloqa_bank7.mp4';
import psb1 from './projects/psb bank/psb_bank.mp4';
import psb2 from './projects/psb bank/psb_bank1.mp4';
import psb3 from './projects/psb bank/psb_bank2.MOV';
import xurshid from './collegues/Xurshid_Misliddinov.png';
import yunus from './collegues/Kasimov_Yunus.jpg';
import umid from './collegues/umid_mirzayev.png';
import bobur from './collegues/bobur_xalikov.jpg';
import farxod from './collegues/farxod_abduraximov.jpg';
import jabir from './collegues/jabir_xalikov.jpg';
import sevara from './collegues/sevara_tamilova.png';
import certSlide from './guvohnoma.jpg';

// --- ANIMATION VARIANTS (Apple Style) ---
const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const VerticalSlide = ({ index, data, onMediaClick }) => {
    return (
        <section className="vertical-slide">
            <motion.div
                className="slide-content"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={staggerContainer}
            >
                {index === 0 ? (
                    <div className="vertical-hero">
                        <motion.h1 className="hero-title" variants={fadeInUp}>
                            DOCTOR ENERGY
                        </motion.h1>
                        <motion.p className="hero-subtitle" variants={fadeInUp}>
                            Engineering the Future since 2009
                        </motion.p>
                    </div>
                ) : (
                    <>
                        {data.image && (
                            <motion.div
                                className="slide-bg-container"
                                variants={fadeInUp}
                                onClick={() => onMediaClick(data.image, 'image')}
                            >
                                <div
                                    className="slide-bg-img"
                                    style={{ backgroundImage: `url(${data.image})`, backgroundSize: data.imageFit || 'cover', backgroundPosition: 'center' }}
                                />
                            </motion.div>
                        )}

                        {data.logo && (
                            <motion.img
                                src={data.logo}
                                alt="Logo"
                                className="slide-logo"
                                variants={fadeInUp}
                            />
                        )}

                        <motion.div variants={fadeInUp}>
                            <h2 className="slide-title">{data.title}</h2>
                            {data.subtitle && <h3 className="slide-subtitle">{data.subtitle}</h3>}
                        </motion.div>

                        <motion.div className="slide-text" variants={fadeInUp}>
                            {(() => {
                                const renderContent = (content) => {
                                    if (!content) return null;

                                    // RECURSIVE ARRAY HANDLING
                                    if (Array.isArray(content)) {
                                        // CHECK IF THIS IS A DOCUMENT LIST (contains objects with 'file' key)
                                        const isDocList = content.some(item => typeof item === 'object' && item.file);

                                        if (isDocList) {
                                            return (
                                                <div className="documents-grid">
                                                    {content.map((item, idx) => (
                                                        <React.Fragment key={idx}>
                                                            {renderContent(item)}
                                                        </React.Fragment>
                                                    ))}
                                                </div>
                                            );
                                        }

                                        return content.map((item, idx) => (
                                            <div key={idx} className="content-block">
                                                {renderContent(item)}
                                            </div>
                                        ));
                                    }

                                    // STRING HANDLING
                                    if (typeof content === 'string') {
                                        return content.split('\n').map((line, idx) => <p key={idx}>{line}</p>);
                                    }

                                    // OBJECT HANDLING
                                    if (typeof content === 'object') {
                                        if (content.title || content.desc) {
                                            return (
                                                <div className="content-item-obj">
                                                    {content.title && <h4>{content.title}</h4>}
                                                    {content.desc && <p>{content.desc}</p>}
                                                    {content.cat && <span className="content-cat">{content.cat}</span>}
                                                </div>
                                            );
                                        }
                                        if (content.label && content.file) {
                                            return (
                                                <a
                                                    href={`/documents/${content.file}.pdf`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="content-doc-item"
                                                    style={{ textDecoration: 'none' }}
                                                >
                                                    <span className="doc-icon">📄</span>
                                                    <span className="doc-label">{content.label}</span>
                                                    <span className="doc-link">
                                                        Download PDF
                                                    </span>
                                                </a>
                                            );
                                        }
                                        if (content.name && content.role) {
                                            return (
                                                <div className="content-team-item">
                                                    <strong>{content.name}</strong>
                                                    <span>{content.role}</span>
                                                </div>
                                            );
                                        }
                                    }
                                    return null;
                                };
                                return renderContent(data.content);
                            })()}
                        </motion.div>

                        {/* GALLERIES */}
                        {data.galleryImages && data.galleryImages.length > 0 && (
                            <motion.div className="vertical-gallery-grid" variants={staggerContainer}>
                                {data.galleryImages.map((src, i) => {
                                    const isVideo = typeof src === 'string' && (src.endsWith('.mp4') || src.endsWith('.MOV') || src.endsWith('.MP4'));
                                    return (
                                        <motion.div
                                            key={i}
                                            className="gallery-item"
                                            variants={fadeInUp}
                                            onClick={() => onMediaClick(src, isVideo ? 'video' : 'image')}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {isVideo ? (
                                                <video
                                                    src={src}
                                                    muted
                                                    loop
                                                    autoPlay
                                                    playsInline
                                                    style={{ pointerEvents: 'none', width: '100%', height: '100%', objectFit: 'cover' }}
                                                />
                                            ) : (
                                                <img src={src} alt={`Gallery ${i}`} />
                                            )}
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        )}

                        {data.teamMembers && data.teamMembers.length > 0 && (
                            <motion.div className="vertical-team-grid" variants={staggerContainer}>
                                {data.teamMembers.map(member => (
                                    <motion.div key={member.id} className="team-member" variants={fadeInUp}>
                                        <img src={member.img} alt="Team Member" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </>
                )}
            </motion.div>
        </section>
    );
};

const VerticalPresentation = () => {
    const { t } = useLanguage();
    const slideCount = 43;

    // LIGHTBOX STATE
    const [lightboxMedia, setLightboxMedia] = useState(null);
    const [lightboxType, setLightboxType] = useState(null); // 'image' or 'video'

    const openLightbox = (media, type) => {
        setLightboxMedia(media);
        setLightboxType(type);
    };

    const closeLightbox = () => {
        setLightboxMedia(null);
        setLightboxType(null);
    };

    // Helper to get slide data (reused logic)
    const getSlideData = (index) => {
        const key = `presentation.slides.${index}`; // Use provided index directly (presentation array is likely 0-indexed in code but mapped differently)
        // Wait, the original code used index+1. I should double check logic.
        // Original: const key = `presentation.slides.${index + 1}`;
        // Let's stick to the original logic for the key construction, but add the check.

        const safeT = (k) => {
            const val = t(k);
            return val === k ? null : val;
        };

        const slideKey = `presentation.slides.${index + 1}`;
        const rawContent = safeT(`${slideKey}.content`);

        return {
            title: safeT(`${slideKey}.title`),
            subtitle: safeT(`${slideKey}.subtitle`),
            content: rawContent,
            style: safeT(`${slideKey}.style`),
            imageFit: safeT(`${slideKey}.imageFit`),
            image: index === 0 ? buildingBg :
                index === 1 ? aboutBg :
                    index === 2 ? pipelineBg :
                        index === 3 ? aboutBg :
                            index === 4 ? aboutBg :
                                index === 5 ? buildingBg :
                                    index === 6 ? project116Bg :
                                        index === 7 ? project160Bg :
                                            index === 8 ? project222Bg :
                                                index === 9 ? buildingBg :
                                                    index === 10 ? pipelineBg :
                                                        index === 11 ? null :
                                                            index === 18 ? solar5 :
                                                                index === 19 ? visionBg :
                                                                    (index === 22 || index === 23) ? solarSamarkand1 :
                                                                        (index === 26 || index === 28) ? tashkentCityMall :
                                                                            (index === 27) ? tashkentCityLogo :
                                                                                (index === 34 || index === 35) ? aboutBg : null,
            logo: (index === 26) ? tashkentCityLogo : null,
            galleryImages: index === 11 ? [
                margilan1, margilan2, margilan3, margilan5, margilan6, margilan7,
                margilan8, margilan9
            ] : index === 12 ? [
                margilan10, margilan11, margilan12, margilan13
            ] : index === 13 ? [
                dangara1, dangara2, dangara3, dangara4, dangara5, dangara6,
                dangara7, dangara8
            ] : index === 14 ? [
                dangara9, dangara10, dangara11, dangaraVideo
            ] : index === 15 ? [
                asaka1, asaka2, asaka3, asaka4, asaka5, asaka6,
                asaka7, asaka8
            ] : index === 16 ? [
                asaka9
            ] : index === 19 ? [
                solar1, solar2, solar3, solar4
            ] : index === 20 ? [
                solar5, solar6, solar7, solar8
            ] : index === 21 ? [
                solar9, solar10, solar11, solar12
            ] : index === 24 ? [
                solarSamarkand1, solarSamarkand2, solarSamarkand3
            ] : index === 25 ? [
                solarSamarkand4, solarSamarkand5, solarSamarkand6
            ] : index === 29 ? [
                tashkentmall1, tashkentmall2, tashkentmall3, tashkentmall4,
                tashkentmall5, tashkentmall6, tashkentmall7, tashkentmall8, tashkentmall9
            ] : index === 30 ? [
                tashkentmall10, tashkentmall11, tashkentmall12, tashkentmall13,
                tashkentmall14, tashkentmall15, tashkentmall16, tashkentmall18
            ] : index === 31 ? [
                tashkentmall19, tashkentmall20, tashkentmall21, tashkentmall22,
                tashkentmall23, tashkentmall24, tashkentmall25, tashkentmall26
            ] : index === 32 ? [
                tashkentmall27, tashkentmall28, tashkentmall29, tashkentmall30,
                tashkentmall31, tashkentmall32, tashkentmall34, tashkentmall35
            ] : index === 33 ? [
                soho1, soho2, soho3, soho4, soho5, soho6, soho7,
                soho8, soho9, soho10, soho11, soho12, soho14
            ] : index === 36 ? [
                asakaBank1, asakaBank2, asakaBank3, asakaBank4, asakaBank5,
                asakaBank6, asakaBank7, asakaBank8, asakaBank10
            ] : index === 37 ? [
                asakaBank11, asakaBank12, asakaBank13, asakaBank14, asakaBank16,
                asakaBank16mp4, asakaBank18, asakaBank19, asakaBank21
            ] : index === 38 ? [
                aloqa1, aloqa2, aloqa3, aloqa4, aloqa5, aloqa6, aloqa7
            ] : index === 39 ? [
                psb1, psb2, psb3
            ] : [],
            teamMembers: index === 40 ? [
                { id: '1', img: xurshid },
                { id: '2', img: yunus },
                { id: '3', img: umid },
                { id: '4', img: bobur },
                { id: '5', img: farxod },
                { id: '6', img: jabir },
                { id: '7', img: sevara }
            ] : [],
        };
    };

    return (
        <div className="vertical-presentation-container">
            <button
                onClick={() => window.location.href = '/'}
                className="presentation-back-button"
            >
                ← Back to Landing Page
            </button>
            {Array.from({ length: slideCount }).map((_, index) => (
                <VerticalSlide
                    key={index}
                    index={index}
                    data={getSlideData(index)}
                    onMediaClick={openLightbox}
                />
            ))}

            <AnimatePresence>
                {lightboxMedia && (
                    <motion.div
                        className="lightbox-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                    >
                        <div className="lightbox-close" onClick={closeLightbox}>&times;</div>
                        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                            {lightboxType === 'video' ? (
                                <video src={lightboxMedia} controls autoPlay className="lightbox-video" />
                            ) : (
                                <img src={lightboxMedia} alt="Full view" className="lightbox-image" />
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default VerticalPresentation;
