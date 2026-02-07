import React, { useState, useEffect } from 'react';
import './Presentation.css';
import { useLanguage } from '../../../../context/LanguageContext';
import { FaPlay, FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import buildingBg from './hero_building_bw.png';
import aboutBg from './about_construction_bw.png';
import pipelineBg from './about_pipeline_bw.png';
import visionBg from './about_vision_bw.png';
import project116Bg from './project_116.jpg';
import project160Bg from './project_160.jpg';
import project222Bg from './project_222.jpg';
import pdf116 from './permission_116.pdf';
import pdf160 from './permission_160.pdf';
import pdf222 from './permission_222.pdf';
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

// Tashkent City Mall Gallery
import tashkentmall1 from './projects/mall/tashkentmall1.jpg';
import tashkentmall2 from './projects/mall/tashkentmall2.jpg';
import tashkentmall3 from './projects/mall/tashkentmall3.jpg';
import tashkentmall4 from './projects/mall/tashkentmall4.jpg';
import tashkentmall5 from './projects/mall/tashkentmall5.jpg';
import tashkentmall6 from './projects/mall/tashkentmall6.jpg';
import tashkentmall7 from './projects/mall/tashknetmall7.jpg'; // Note typo in filename
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

// SOHO Gallery
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
import soho14 from './projects/soho/soho14.jpg'; // soho13 missing based on find results

// ASAKA BANK
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
// ALOQA BANK
import aloqa1 from './projects/aloqa bank/aloqa_bank.jpg';
import aloqa2 from './projects/aloqa bank/aloqa_bank2.mp4';
import aloqa3 from './projects/aloqa bank/aloqa_bank3.jpg';
import aloqa4 from './projects/aloqa bank/aloqa_bank4.jpg';
import aloqa5 from './projects/aloqa bank/aloqa_bank5.jpg';
import aloqa6 from './projects/aloqa bank/aloqa_bank6.jpg';
import aloqa7 from './projects/aloqa bank/aloqa_bank7.mp4';

// PSB BANK
import psb1 from './projects/psb bank/psb_bank.mp4';
import psb2 from './projects/psb bank/psb_bank1.mp4';
import psb3 from './projects/psb bank/psb_bank2.MOV';

// COLLEAGUES
import xurshid from './collegues/Xurshid_Misliddinov.png';
import yunus from './collegues/Kasimov_Yunus.jpg';
import umid from './collegues/umid_mirzayev.png';
import bobur from './collegues/bobur_xalikov.jpg';
import farxod from './collegues/farxod_abduraximov.jpg';
import jabir from './collegues/jabir_xalikov.jpg';
import sevara from './collegues/sevara_tamilova.png';

// CERTIFICATES
import certSlide from './guvohnoma.jpg';
import certBackground from './about_construction_bw.png';
import license2 from './license_de2.pdf';
import license3 from './license_de3.pdf';
import license4 from './license_de4.pdf';

import masdarLogo from './masdar_logo.png';
import decLogo from './dec_logo.png';


// --- ANIMATION VARIANTS ---
const slideVariants = {
    enter: (direction) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.95
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
        }
    },
    exit: (direction) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.95,
        transition: {
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
        }
    })
};

const textVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
};

// --- SUB-COMPONENTS ---

/* 
 * 1. Animated Content Paginator (Sub-slides)
 * NOW CONTROLLED BY PARENT
 */
const ContentPaginator = ({ content, page, direction }) => {
    // Helper to get chunks from content
    const chunks = Array.isArray(content) ? content : (typeof content === 'string' ? content.replace(/\r\n/g, '\n').split(/\n\n+/) : []);

    if (!chunks.length || !chunks[page]) return null;

    return (
        <div className="access-paginator">
            <div className="access-text-block" style={{ position: 'relative', overflow: 'hidden' }}>
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={page}
                        custom={direction}
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        style={{ height: '100%' }}
                    >
                        {chunks[page].split('\n').map((line, i) => {
                            const parts = line.split(': ');
                            if (parts.length > 1 && parts[0].length < 50) {
                                return (
                                    <p key={i}>
                                        <strong>{parts[0]}:</strong> {parts.slice(1).join(': ')}
                                    </p>
                                )
                            }
                            return <p key={i}>{line}</p>;
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>
            {/* Internal controls removed - logic lifted to Global Nav */}
        </div>
    );
};


/* 
 * 2. Main Presentation Component
 */
const Presentation = ({ standalone = false }) => {
    const { t } = useLanguage();
    const [isFullscreen, setIsFullscreen] = useState(standalone);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [internalPage, setInternalPage] = useState(0); // Lifted State
    const [direction, setDirection] = useState(0);
    const [detailContent, setDetailContent] = useState(null);

    const [zoomedImage, setZoomedImage] = useState(null);
    const slideCount = 43;

    const getSlideData = (index) => {
        const key = `presentation.slides.${index + 1}`;
        const style = t(`${key}.style`);
        const rawContent = t(`${key}.content`);
        // Fix for multiple parts in slide 10: if style is documents-grid, treat content as single page
        const contentChunks = (style === 'documents-grid' || style === 'default')
            ? [rawContent]
            : (Array.isArray(rawContent) ? rawContent : (typeof rawContent === 'string' ? rawContent.replace(/\r\n/g, '\n').split(/\n\n+/) : []));

        return {
            title: t(`${key}.title`),
            subtitle: t(`${key}.subtitle`),
            content: rawContent,
            chunks: contentChunks,
            style: t(`${key}.style`),
            roleLabel: t(`${key}.roleLabel`),
            roleValue: t(`${key}.roleValue`),
            customerLabel: t(`${key}.customerLabel`),
            customerValue: t(`${key}.customerValue`),
            contractorLabel: t(`${key}.contractorLabel`),
            contractorValue: t(`${key}.contractorValue`),
            capacityLabel: t(`${key}.capacityLabel`),
            capacityValue: t(`${key}.capacityValue`),
            locationLabel: t(`${key}.locationLabel`),
            locationValue: t(`${key}.locationValue`),
            tasksLabel: t(`${key}.tasksLabel`),
            tasksValue: t(`${key}.tasksValue`),
            imageFit: t(`${key}.imageFit`), // Valid CSS object-fit value (cover, contain, etc.)
            imagePadding: t(`${key}.imagePadding`), // Optional padding for the image container
            image: index === 0 ? buildingBg :
                index === 1 ? aboutBg :
                    index === 2 ? pipelineBg :
                        index === 3 ? aboutBg : // Reusing Construction BG for Services
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
                                                                                (index === 34 || index === 35) ? aboutBg : null, // Media Facade
            logo: (index === 26) ? tashkentCityLogo : null, // Add logo specifically for Slide 27
            projectImages: index === 4 || index === 34 || index === 35 ? [aboutBg, pipelineBg, buildingBg] : [], // Reuse project images for Media Facade if needed
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
            ] : index === 22 ? [
                // Text Slide Part 1 (No gallery)
            ] : index === 23 ? [
                // Text Slide Part 2 (No gallery)
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
                // SEQ: 1, 2, 3, 4, 5, 6, 7, 8, 10
                asakaBank1, asakaBank2, asakaBank3, asakaBank4, asakaBank5,
                asakaBank6, asakaBank7, asakaBank8, asakaBank10
            ] : index === 37 ? [
                // SEQ: 11, 12, 13, 14, 16, 16mp4, 18, 19, 21
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
            pdfFiles: index === 9 ? {
                "116": pdf116,
                "160": pdf160,
                "222": pdf222
            } : null,
            // Hide Masdar/DEC logos for Tashkent City Mall AND SOHO gallery slides AND Media Facade
            // Tashkent: 29-32
            // SOHO: 33
            // Media Facade: 34-35
            // Asaka Bank: 36-37
            // Aloqa Bank: 38
            // PSB Bank: 39
            // Colleagues: 40
            // Certificates: 41
            // Contact: 42
            showPartners: !(index >= 29 && index <= 42)
        };
    };

    const slideData = getSlideData(currentSlide);

    const openPresentation = () => {
        setIsFullscreen(true);
        document.body.style.overflow = 'hidden';
    };

    const closePresentation = () => {
        if (standalone) {
            window.location.href = '/';
            return;
        }
        setIsFullscreen(false);
        setCurrentSlide(0);
        setInternalPage(0);
        setDetailContent(null);
        setZoomedImage(null);
        document.body.style.overflow = 'auto';
    };

    // SMART PAGINATION LOGIC
    const paginate = (newDirection) => {
        setDirection(newDirection);

        const currentChunks = slideData.chunks || [];
        const totalInternalPages = currentChunks.length;

        // FORWARD
        if (newDirection > 0) {
            // If we have more internal pages to show
            if (totalInternalPages > 0 && internalPage < totalInternalPages - 1) {
                setInternalPage(prev => prev + 1);
            } else {
                // Determine next slide index
                const nextSlideIndex = (currentSlide + 1) % slideCount;
                setCurrentSlide(nextSlideIndex);
                setInternalPage(0); // Reset internal page for new slide
            }
        }
        // BACKWARD
        else {
            // If we are deep in internal pages
            if (internalPage > 0) {
                setInternalPage(prev => prev - 1);
            } else {
                // Go to previous slide
                const prevSlideIndex = (currentSlide - 1 + slideCount) % slideCount;

                // Robustly get previous slide data
                const prevSlideData = getSlideData(prevSlideIndex);
                const prevChunks = prevSlideData?.chunks || [];
                const prevTotalPages = prevChunks.length;

                setCurrentSlide(prevSlideIndex);
                // If previous slide has pages, go to the last one. If not, go to 0.
                setInternalPage(Math.max(0, prevTotalPages - 1));
            }
        }
    };

    // Keyboard support and External Event Listener
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isFullscreen) return;
            if (detailContent) {
                if (e.key === 'Escape') setDetailContent(null);
                return;
            }
            if (zoomedImage) {
                if (e.key === 'Escape') setZoomedImage(null);
                return;
            }
            if (e.key === 'Escape') closePresentation();
            if (e.key === 'ArrowRight') paginate(1);
            if (e.key === 'ArrowLeft') paginate(-1);
        };

        const handleExternalOpen = (e) => {
            const { index } = e.detail;
            if (typeof index === 'number' && index >= 0 && index < slideCount) {
                setCurrentSlide(index);
                setInternalPage(0);
                setIsFullscreen(true);
                document.body.style.overflow = 'hidden';
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('open-project-slide', handleExternalOpen);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('open-project-slide', handleExternalOpen);
        };
    }, [isFullscreen, detailContent, currentSlide, internalPage]);

    return (
        <>
            {/* ENTRY BUTTON - ARCHITECTURAL STYLE */}
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
                        border: '1px solid #000', // Architectural Border
                        overflow: 'hidden',
                        cursor: 'pointer'
                    }} onClick={openPresentation}>

                        {/* Overlay to ensure text readability */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(255, 255, 255, 0.85)', // Light technical overlay
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
                                color: '#003366', // Architectural Blue
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

            {/* FULL SCREEN MODAL */}
            <AnimatePresence>
                {isFullscreen && (
                    <motion.div
                        className="presentation-modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >

                        {/* TOP BAR */}
                        <div className="presentation-top-bar">
                            <div className="slide-counter">
                                SLIDE {currentSlide + 1} OF {slideCount}
                                {/* Optional: Show Internal Page Count if relevant */}
                                {slideData.chunks.length > 1 && (
                                    <span style={{ opacity: 0.7, fontSize: '0.9em', marginLeft: '10px' }}>
                                        (PART {internalPage + 1}/{slideData.chunks.length})
                                    </span>
                                )}
                            </div>
                            <button className="btn-close-access" onClick={closePresentation}>
                                CLOSE PRESENTATION <FaTimes />
                            </button>
                        </div>

                        {/* DETAIL OVERLAY */}
                        <AnimatePresence>
                            {detailContent && (
                                <motion.div
                                    className="access-overlay"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 50 }}
                                >
                                    <div className="access-overlay-card">
                                        <button className="btn-close-overlay" onClick={() => setDetailContent(null)}>
                                            CLOSE DETAILS X
                                        </button>
                                        <h2 className="access-overlay-title">{detailContent.title}</h2>
                                        <div className="access-overlay-body">
                                            {detailContent.desc.split('\n').map((line, i) => <p key={i} style={{ marginBottom: '10px' }}>{line}</p>)}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* LIGHTBOX OVERLAY */}
                        <AnimatePresence>
                            {zoomedImage && (
                                <motion.div
                                    className="lightbox-overlay"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setZoomedImage(null)}
                                    style={{
                                        position: 'fixed',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: 'rgba(0,0,0,0.9)',
                                        zIndex: 10000,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'zoom-out'
                                    }}
                                >
                                    {typeof zoomedImage === 'string' && (zoomedImage.toLowerCase().endsWith('.mp4') || zoomedImage.toLowerCase().endsWith('.mov')) ? (
                                        <motion.video
                                            src={zoomedImage}
                                            controls
                                            autoPlay
                                            initial={{ scale: 0.8, rotate: -90 }}
                                            animate={{ scale: 1, rotate: -90 }}
                                            exit={{ scale: 0.8, rotate: -90 }}
                                            style={{
                                                height: '80vw', // Video height becomes width after rotation
                                                width: '45vh', // Video width becomes height after rotation
                                                maxHeight: '90vh',
                                                maxWidth: '160vh',
                                                borderRadius: '5px',
                                                objectFit: 'contain'
                                            }}
                                            onClick={(e) => e.stopPropagation()}
                                        />
                                    ) : (
                                        <motion.img
                                            src={zoomedImage}
                                            initial={{ scale: 0.8 }}
                                            animate={{ scale: 1 }}
                                            exit={{ scale: 0.8 }}
                                            style={{
                                                maxWidth: '90%',
                                                maxHeight: '90%',
                                                objectFit: 'contain',
                                                borderRadius: '5px'
                                            }}
                                        />
                                    )}
                                    <button
                                        style={{
                                            position: 'absolute',
                                            top: '20px',
                                            right: '20px',
                                            background: 'transparent',
                                            border: 'none',
                                            color: 'white',
                                            fontSize: '2rem',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <FaTimes />
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* MAIN SLIDE AREA */}
                        <div className="slide-container" style={{ position: 'relative', overflow: 'hidden' }}>
                            <AnimatePresence initial={false} custom={direction} mode="wait">
                                <motion.div
                                    key={`slide-${currentSlide}`}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={1}
                                    onDragEnd={(e, { offset, velocity }) => {
                                        const swipe = offset.x; // Just detecting swipe distance
                                        if (swipe < -100) paginate(1);
                                        else if (swipe > 100) paginate(-1);
                                    }}
                                    className="access-slide-wrapper"
                                    style={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        paddingLeft: '40px',
                                        paddingRight: '40px',
                                        boxSizing: 'border-box'
                                    }}
                                >

                                    {/* SLIDE CONTENT RENDERING LOGIC */}
                                    {currentSlide === 0 ? (
                                        <div className="access-hero">
                                            <img src={buildingBg} className="access-hero-img-bg" alt="" />
                                            <div className="access-hero-content">
                                                <h1 className="access-hero-title">DOCTOR ENERGY</h1>
                                                <div className="access-hero-subtitle">Engineering the Future since 2009</div>
                                            </div>
                                        </div>
                                    ) : slideData.style === 'centered-title' ? (
                                        <div className="access-centered-title">
                                            <h1 className="access-big-title">{slideData.title}</h1>
                                            {slideData.subtitle && <h2 className="access-big-subtitle">{slideData.subtitle}</h2>}
                                        </div>
                                    ) : (slideData.style === 'about-split' || slideData.style === 'services-split') ? (
                                        <div className="access-split">
                                            {/* Left Image */}
                                            <div className="access-split-img" style={{ padding: slideData.imagePadding || '0', position: 'relative' }}>
                                                {/* Optional Logo Badge */}
                                                {slideData.logo && (
                                                    <div style={{
                                                        position: 'absolute',
                                                        top: '30px',
                                                        left: '30px',
                                                        background: 'white',
                                                        padding: '15px',
                                                        borderRadius: '12px',
                                                        boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                                                        zIndex: 10,
                                                        width: '120px',
                                                        height: '120px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        opacity: 0.95
                                                    }}>
                                                        <img
                                                            src={slideData.logo}
                                                            alt="Logo"
                                                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                                        />
                                                    </div>
                                                )}
                                                <img
                                                    src={slideData.image}
                                                    alt={slideData.title}
                                                    style={{ objectFit: slideData.imageFit || 'cover' }}
                                                />
                                            </div>

                                            {/* Right Content */}
                                            <div className="access-split-content">
                                                <h3 className="access-title">{slideData.title}</h3>
                                                {slideData.subtitle && <h4 className="access-subtitle">{slideData.subtitle}</h4>}

                                                {/* Logic Branch: Text Paginator OR Services Grid */}
                                                {slideData.style === 'services-split' ? (
                                                    <div className="services-text-grid">
                                                        {/* PAGINATED SERVICES: Render only current internalPage chunk */}
                                                        {slideData.chunks && slideData.chunks[internalPage] && Array.isArray(slideData.chunks[internalPage]) &&
                                                            slideData.chunks[internalPage].map((item, idx) => (
                                                                <div className="service-item" key={idx}>
                                                                    <h4>{item.title}</h4>
                                                                    <p>{item.desc}</p>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                ) : (
                                                    <ContentPaginator
                                                        content={slideData.chunks}
                                                        page={internalPage}
                                                        direction={direction}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    ) : slideData.style === 'centered-grid' ? (
                                        <div className="access-centered-grid">
                                            <div className="access-centered-header">
                                                <h3 className="access-title">{slideData.title}</h3>
                                                {slideData.subtitle && <h4 className="access-subtitle">{slideData.subtitle}</h4>}
                                            </div>
                                            <div className="services-text-grid full-width-grid">
                                                {slideData.chunks && slideData.chunks[internalPage] && Array.isArray(slideData.chunks[internalPage]) &&
                                                    slideData.chunks[internalPage].map((item, idx) => (
                                                        <div className="service-item" key={idx}>
                                                            <h4>{item.title}</h4>
                                                            <p>{item.desc}</p>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    ) : slideData.style === 'documents-grid' ? (
                                        <div className="access-centered-grid">
                                            <div className="access-centered-header">
                                                <h3 className="access-title">{slideData.title}</h3>
                                                {slideData.subtitle && <h4 className="access-subtitle">{slideData.subtitle}</h4>}
                                            </div>
                                            <div className="documents-grid-container" style={{
                                                display: 'grid',
                                                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                                gap: '20px',
                                                marginTop: '40px',
                                                width: '100%'
                                            }}>
                                                {slideData.content && Array.isArray(slideData.content) && slideData.content.map((doc, idx) => (
                                                    <motion.a
                                                        key={idx}
                                                        href={slideData.pdfFiles[doc.file]}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="document-card"
                                                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                                                        whileTap={{ scale: 0.95 }}
                                                        style={{
                                                            padding: '30px',
                                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                                            borderRadius: '15px',
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            textDecoration: 'none',
                                                            color: 'inherit',
                                                            backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                                            cursor: 'pointer'
                                                        }}
                                                    >
                                                        <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📄</div>
                                                        <h4 style={{ textAlign: 'center', margin: 0 }}>{doc.label}</h4>
                                                        <span style={{ marginTop: '10px', fontSize: '0.9rem', opacity: 0.7 }}>OPEN PDF →</span>
                                                    </motion.a>
                                                ))}
                                            </div>
                                        </div>
                                    ) : slideData.style === 'project-gallery' ? (
                                        <div className="access-gallery-slide" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                            <div className="gallery-header" style={{ marginBottom: '10px' }}>
                                                <h3 className="access-title" style={{ fontSize: '1.8rem', marginBottom: '5px' }}>{slideData.title}</h3>
                                                <div className="project-details" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '15px', backgroundColor: 'rgba(0,0,0,0.2)', padding: '10px', borderRadius: '10px' }}>
                                                    <div>
                                                        <span style={{ color: '#aaa', fontSize: '0.8rem', display: 'block' }}>{t(`presentation.slides.${currentSlide + 1}.customerLabel`)}</span>
                                                        <strong style={{ fontSize: '1rem' }}>{t(`presentation.slides.${currentSlide + 1}.customerValue`)}</strong>
                                                    </div>
                                                    <div>
                                                        <span style={{ color: '#aaa', fontSize: '0.8rem', display: 'block' }}>{t(`presentation.slides.${currentSlide + 1}.worksLabel`)}</span>
                                                        <p style={{ margin: 0, lineHeight: 1.3, fontSize: '0.9rem' }}>{t(`presentation.slides.${currentSlide + 1}.worksValue`)}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="gallery-grid" style={{
                                                display: 'grid',
                                                gridTemplateColumns: 'repeat(4, 1fr)',
                                                gap: '12px',
                                                flex: 1,
                                                overflowY: 'hidden', // Should fit now without scroll
                                                alignContent: 'center', // Center vertically if less rows
                                                padding: '0 5px'
                                            }}>
                                                {slideData.galleryImages && slideData.galleryImages.map((img, idx) => {
                                                    const isVideo = typeof img === 'string' && img.endsWith('.mp4');
                                                    return (
                                                        <motion.div
                                                            key={idx}
                                                            className="gallery-item"
                                                            whileHover={{ scale: 1.05, zIndex: 10 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            onClick={() => setZoomedImage(img)}
                                                            style={{
                                                                borderRadius: '8px',
                                                                overflow: 'hidden',
                                                                cursor: 'zoom-in',
                                                                boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                                                                height: '140px',
                                                                width: '100%',
                                                                border: isVideo ? '2px solid #0056b3' : '1px solid rgba(255,255,255,0.1)',
                                                                backgroundColor: 'rgba(0,0,0,0.3)',
                                                                position: 'relative',
                                                                gridColumn: isVideo ? 'span 2' : 'span 1' // Video spans 2 columns
                                                            }}
                                                        >
                                                            {isVideo ? (
                                                                <>
                                                                    <video
                                                                        src={img}
                                                                        muted
                                                                        loop
                                                                        onMouseOver={e => e.target.play()}
                                                                        onMouseOut={e => e.target.pause()}
                                                                        style={{
                                                                            width: '100%',
                                                                            height: '100%',
                                                                            objectFit: 'cover'
                                                                        }}
                                                                    />
                                                                    {/* Play button overlay */}
                                                                    <div style={{
                                                                        position: 'absolute',
                                                                        top: '50%',
                                                                        left: '50%',
                                                                        transform: 'translate(-50%, -50%)',
                                                                        width: '50px',
                                                                        height: '50px',
                                                                        borderRadius: '50%',
                                                                        backgroundColor: 'rgba(0, 86, 179, 0.8)',
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center',
                                                                        pointerEvents: 'none',
                                                                        boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
                                                                    }}>
                                                                        <div style={{
                                                                            width: 0,
                                                                            height: 0,
                                                                            borderLeft: '15px solid white',
                                                                            borderTop: '10px solid transparent',
                                                                            borderBottom: '10px solid transparent',
                                                                            marginLeft: '3px'
                                                                        }} />
                                                                    </div>
                                                                    {/* Video label */}
                                                                    <div style={{
                                                                        position: 'absolute',
                                                                        top: '8px',
                                                                        right: '8px',
                                                                        backgroundColor: 'rgba(0, 86, 179, 0.9)',
                                                                        color: 'white',
                                                                        padding: '4px 8px',
                                                                        borderRadius: '4px',
                                                                        fontSize: '0.75rem',
                                                                        fontWeight: 'bold',
                                                                        pointerEvents: 'none'
                                                                    }}>
                                                                        VIDEO
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <img
                                                                    src={img}
                                                                    alt={`Project ${idx}`}
                                                                    style={{
                                                                        width: '100%',
                                                                        height: '100%',
                                                                        objectFit: 'cover',
                                                                        transition: 'transform 0.3s ease'
                                                                    }}
                                                                />
                                                            )}
                                                            <div className="hover-overlay" style={{
                                                                position: 'absolute',
                                                                top: 0,
                                                                left: 0,
                                                                width: '100%',
                                                                height: '100%',
                                                                backgroundColor: 'rgba(0,0,0,0.0)',
                                                                transition: 'background-color 0.3s'
                                                            }} />
                                                        </motion.div>
                                                    );
                                                })}
                                            </div>
                                            <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '0.8rem', opacity: 0.6 }}>
                                                Click any image to enlarge
                                            </div>
                                        </div>
                                    ) : slideData.style === 'team-grid' ? (
                                        <div className="access-team-grid" style={{ padding: '40px', height: '100%', width: '100%', flex: 1, overflowY: 'auto', boxSizing: 'border-box' }}>
                                            <h1 style={{
                                                fontSize: 'clamp(2rem, 5vw, 3rem)',
                                                fontWeight: '800',
                                                marginBottom: '40px',
                                                textAlign: 'left',
                                                color: '#222'
                                            }}>
                                                {slideData.title}
                                            </h1>
                                            <div style={{
                                                display: 'grid',
                                                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                                                gap: '30px',
                                                alignItems: 'start'
                                            }}>
                                                {slideData.teamMembers && slideData.teamMembers.map((member, idx) => {
                                                    const memberData = t(`presentation.slides.41.members.${member.id}`);
                                                    return (
                                                        <div key={idx} style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                                            <div style={{
                                                                width: '100px',
                                                                height: '100px',
                                                                flexShrink: 0,
                                                                borderRadius: '8px',
                                                                overflow: 'hidden',
                                                                backgroundColor: '#f0f0f0'
                                                            }}>
                                                                <img
                                                                    src={member.img}
                                                                    alt={memberData.name}
                                                                    style={{
                                                                        width: '100%',
                                                                        height: '100%',
                                                                        objectFit: 'cover'
                                                                    }}
                                                                />
                                                            </div>
                                                            <div style={{ textAlign: 'left' }}>
                                                                <h3 style={{
                                                                    margin: '0 0 5px 0',
                                                                    fontSize: '1.1rem',
                                                                    fontWeight: 'bold',
                                                                    color: '#333'
                                                                }}>
                                                                    {memberData.name}
                                                                </h3>
                                                                <p style={{
                                                                    margin: 0,
                                                                    fontSize: '0.95rem',
                                                                    color: '#666',
                                                                    fontStyle: 'italic',
                                                                    lineHeight: '1.2'
                                                                }}>
                                                                    {memberData.role}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                    ) : slideData.style === 'certificates' ? (
                                        <div className="access-certificates" style={{
                                            position: 'relative',
                                            width: '100%',
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: '#1a1a1a',
                                            overflow: 'hidden'
                                        }}>
                                            {/* Background Image */}
                                            <div style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                backgroundImage: `url(${certBackground})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                opacity: 0.2,
                                                zIndex: 0
                                            }} />

                                            {/* Content */}
                                            <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '20px' }}>
                                                <h1 style={{
                                                    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                                                    fontWeight: '800',
                                                    color: '#fff',
                                                    marginBottom: '20px',
                                                    textAlign: 'center',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '2px',
                                                    flexShrink: 0
                                                }}>
                                                    {slideData.title}
                                                </h1>

                                                <div style={{
                                                    display: 'flex',
                                                    flex: 1,
                                                    gap: '30px',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    overflow: 'hidden',
                                                    paddingBottom: '20px'
                                                }}>
                                                    {/* Left: Guvohnoma Image */}
                                                    <div
                                                        onClick={() => setZoomedImage(certSlide)}
                                                        style={{
                                                            flex: '1',
                                                            height: '100%',
                                                            maxWidth: '50%',
                                                            backgroundColor: 'rgba(255,255,255,0.05)',
                                                            padding: '20px',
                                                            borderRadius: '12px',
                                                            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                                                            cursor: 'zoom-in',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            transition: 'transform 0.3s ease'
                                                        }}
                                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                                    >
                                                        <img
                                                            src={certSlide}
                                                            alt="Guvohnoma"
                                                            style={{
                                                                maxHeight: '100%',
                                                                maxWidth: '100%',
                                                                objectFit: 'contain',
                                                                borderRadius: '4px'
                                                            }}
                                                        />
                                                    </div>

                                                    {/* Right: PDF Links */}
                                                    <div style={{
                                                        flex: '1',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        gap: '20px',
                                                        height: '100%',
                                                        justifyContent: 'center',
                                                        maxWidth: '400px'
                                                    }}>
                                                        {[
                                                            { label: t('presentation.slides.42.license2'), file: license2 },
                                                            { label: t('presentation.slides.42.license3'), file: license3 },
                                                            { label: t('presentation.slides.42.license4'), file: license4 }
                                                        ].map((doc, idx) => (
                                                            <a
                                                                key={idx}
                                                                href={doc.file}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                style={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    padding: '20px',
                                                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                                    borderRadius: '12px',
                                                                    textDecoration: 'none',
                                                                    color: 'white',
                                                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                                                    transition: 'all 0.3s ease'
                                                                }}
                                                                onMouseEnter={(e) => {
                                                                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                                                                    e.currentTarget.style.transform = 'translateX(5px)';
                                                                }}
                                                                onMouseLeave={(e) => {
                                                                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                                                                    e.currentTarget.style.transform = 'translateX(0)';
                                                                }}
                                                            >
                                                                <div style={{ fontSize: '2rem', marginRight: '20px' }}>📄</div>
                                                                <div>
                                                                    <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{doc.label}</div>
                                                                    <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>{t('presentation.slides.42.viewDocument')}</div>
                                                                </div>
                                                                <div style={{ marginLeft: 'auto', opacity: 0.5 }}>→</div>
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : slideData.style === 'contact' ? (
                                        <div className="access-contact" style={{
                                            width: '100%',
                                            height: '100%',
                                            display: 'flex',
                                            backgroundColor: '#fff',
                                            color: '#000',
                                            position: 'relative',
                                            padding: '80px',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            overflow: 'hidden'
                                        }}>
                                            {/* Top Left Logo Label */}
                                            <div style={{
                                                position: 'absolute',
                                                top: '60px',
                                                left: '60px',
                                                backgroundColor: '#1a1a1a',
                                                color: '#fff',
                                                padding: '10px 20px',
                                                fontWeight: 'bold',
                                                letterSpacing: '1px',
                                                fontSize: '0.9rem'
                                            }}>
                                                DOCTOR ENERGY
                                            </div>

                                            <div style={{
                                                display: 'flex',
                                                width: '100%',
                                                maxWidth: '1200px',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                gap: '60px'
                                            }}>
                                                {/* Left: Huge Title */}
                                                <div style={{ flex: 1 }}>
                                                    <h1 style={{
                                                        fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                                                        fontWeight: '900',
                                                        lineHeight: '1.1',
                                                        marginBottom: '0',
                                                        textTransform: 'uppercase',
                                                        color: '#1a1a1a'
                                                    }}>
                                                        {slideData.title}
                                                    </h1>

                                                    {/* Bottom Decoration: 3 squares */}
                                                    <div style={{
                                                        display: 'flex',
                                                        gap: '10px',
                                                        marginTop: '60px'
                                                    }}>
                                                        {[1, 2, 3].map(i => (
                                                            <div key={i} style={{ width: '15px', height: '15px', backgroundColor: '#1a1a1a' }} />
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Right: Contact Card */}
                                                <div style={{
                                                    flex: 1,
                                                    backgroundColor: '#f5f5f5',
                                                    padding: '60px',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '30px',
                                                    minWidth: '400px',
                                                    borderRadius: '24px',
                                                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
                                                }}>
                                                    {/* Phone */}
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                                        <div style={{
                                                            backgroundColor: '#fff', // White background
                                                            width: '56px',
                                                            height: '56px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            flexShrink: 0,
                                                            borderRadius: '16px',
                                                            fontSize: '1.5rem',
                                                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)' // Slightly lighter shadow
                                                        }}>
                                                            <span style={{ color: '#1a1a1a' }}>📞</span>
                                                        </div>
                                                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                                                            {t(`presentation.slides.43.phone`)}
                                                        </div>
                                                    </div>

                                                    {/* Web */}
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                                        <div style={{
                                                            backgroundColor: '#fff', // White background
                                                            width: '56px',
                                                            height: '56px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            flexShrink: 0,
                                                            borderRadius: '16px',
                                                            fontSize: '1.5rem',
                                                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                                        }}>
                                                            <span style={{ color: '#1a1a1a' }}>🌐</span>
                                                        </div>
                                                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
                                                            {t(`presentation.slides.43.website`)}
                                                        </div>
                                                    </div>

                                                    {/* Email */}
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                                        <div style={{
                                                            backgroundColor: '#fff', // White background
                                                            width: '56px',
                                                            height: '56px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            flexShrink: 0,
                                                            borderRadius: '16px',
                                                            fontSize: '1.5rem',
                                                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                                        }}>
                                                            <span style={{ color: '#1a1a1a' }}>✉️</span>
                                                        </div>
                                                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', whiteSpace: 'pre-line', lineHeight: '1.4' }}>
                                                            {t(`presentation.slides.43.email`)}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : slideData.style === 'brands-gallery' ? (
                                        <div className="access-brands-gallery">
                                            {/* Dedicated Title for Gallery Slides */}
                                            <h1 style={{
                                                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                                                fontWeight: '800',
                                                marginBottom: '10px',
                                                whiteSpace: 'pre-line',
                                                lineHeight: '1.2',
                                                padding: '0 10px',
                                                color: '#222'
                                            }}>
                                                {slideData.title}
                                            </h1>

                                            {slideData.showPartners && (
                                                <div className="brands-header">
                                                    <div className="brand-box masdar">
                                                        <img src={masdarLogo} alt="MASDAR" />
                                                    </div>
                                                    <div className="brand-box dec">
                                                        <img src={decLogo} alt="DEC" />
                                                    </div>
                                                </div>
                                            )}

                                            <div className="brands-content-layout">
                                                <div className="brands-grid" style={{
                                                    gridTemplateRows: slideData.galleryImages && slideData.galleryImages.length <= 4 ? '1fr' :
                                                        slideData.galleryImages && slideData.galleryImages.length <= 8 ? 'repeat(2, minmax(140px, 1fr))' :
                                                            'repeat(auto-fill, minmax(130px, 1fr))', // Auto-fill allowing rows to define their height
                                                    overflowY: 'auto' // Safety scroll if it overflows
                                                }}>
                                                    {slideData.galleryImages && slideData.galleryImages.map((img, idx) => (
                                                        <motion.div
                                                            key={idx}
                                                            className="brand-gallery-item"
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            onClick={() => setZoomedImage(img)}
                                                            style={{
                                                                background: '#f8f9fa',
                                                                borderRadius: '8px',
                                                                overflow: 'hidden',
                                                                border: '1px solid #eee',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center'
                                                            }}
                                                        >
                                                            {(typeof img === 'string' && (img.toLowerCase().endsWith('.mp4') || img.toLowerCase().endsWith('.mov'))) ? (
                                                                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                                                    <video
                                                                        src={img}
                                                                        muted
                                                                        playsInline
                                                                        style={{
                                                                            width: '100%',
                                                                            height: '100%',
                                                                            objectFit: 'contain'
                                                                        }}
                                                                    />
                                                                    <div style={{
                                                                        position: 'absolute',
                                                                        top: '50%',
                                                                        left: '50%',
                                                                        transform: 'translate(-50%, -50%)',
                                                                        fontSize: '2rem',
                                                                        color: 'rgba(255,255,255,0.8)',
                                                                        background: 'rgba(0,0,0,0.4)',
                                                                        borderRadius: '50%',
                                                                        width: '50px',
                                                                        height: '50px',
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center'
                                                                    }}>
                                                                        ▶
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <img
                                                                    src={img}
                                                                    alt={`Gallery Item ${idx}`}
                                                                    style={{
                                                                        width: '100%',
                                                                        height: '100%',
                                                                        objectFit: 'contain',
                                                                        padding: '5px' // Padding to ensure image isn't edge-to-edge
                                                                    }}
                                                                />
                                                            )}
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ) : slideData.style === 'default' ? (
                                        <div className="access-hero" style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '30px 40px', justifyContent: 'flex-start', overflow: 'hidden' }}>
                                            <div className="access-hero-content" style={{ textAlign: 'left', alignItems: 'flex-start', height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
                                                {/* Header Section */}
                                                <div style={{ marginBottom: '20px', flexShrink: 0 }}>
                                                    <h1 className="access-title" style={{ fontSize: '2.2rem', marginBottom: '5px', color: 'var(--access-primary)' }}>{slideData.title}</h1>
                                                    <h2 className="access-subtitle" style={{ fontSize: '1.3rem', color: '#555', margin: 0 }}>{slideData.subtitle}</h2>
                                                </div>

                                                {/* Main Content Split */}
                                                <div style={{ display: 'flex', width: '100%', height: '100%', gap: '30px', overflow: 'hidden' }}>
                                                    {/* LEFT: Text Content */}
                                                    <div style={{ flex: '1.5', fontSize: '1.1rem', lineHeight: '1.5', whiteSpace: 'pre-wrap', color: '#333', overflowY: 'auto', paddingRight: '10px' }}>
                                                        {slideData.content}
                                                    </div>

                                                    {/* RIGHT: Project Details */}
                                                    <div style={{
                                                        flex: '1',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        gap: '15px',
                                                        backgroundColor: 'rgba(255,255,255,0.9)',
                                                        padding: '20px',
                                                        borderRadius: '12px',
                                                        border: '1px solid #eee',
                                                        height: 'fit-content',
                                                        boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                                                    }}>
                                                        <div>
                                                            <strong style={{ display: 'block', color: '#666', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{slideData.customerLabel}</strong>
                                                            <span style={{ fontSize: '1.05rem', fontWeight: 'bold', color: '#004d80' }}>{slideData.customerValue}</span>
                                                            <div style={{ height: '1px', background: '#eee', marginTop: '8px' }}></div>
                                                        </div>
                                                        <div>
                                                            <strong style={{ display: 'block', color: '#666', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{slideData.contractorLabel}</strong>
                                                            <span style={{ fontSize: '1.05rem', fontWeight: 'bold', color: '#004d80' }}>{slideData.contractorValue}</span>
                                                            <div style={{ height: '1px', background: '#eee', marginTop: '8px' }}></div>
                                                        </div>
                                                        <div>
                                                            <strong style={{ display: 'block', color: '#666', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{slideData.roleLabel}</strong>
                                                            <span style={{ fontSize: '1.05rem', fontWeight: 'bold', color: '#004d80' }}>{slideData.roleValue}</span>
                                                            <div style={{ height: '1px', background: '#eee', marginTop: '8px' }}></div>
                                                        </div>
                                                        <div>
                                                            <strong style={{ display: 'block', color: '#666', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{slideData.locationLabel}</strong>
                                                            <span style={{ fontSize: '1.05rem', fontWeight: 'bold', color: '#333' }}>{slideData.locationValue}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="access-hero">
                                            <div className="access-hero-content">
                                                <h1 className="access-hero-title" style={{ color: 'var(--access-primary)' }}>{slideData.title}</h1>
                                                <p style={{ fontSize: '1.5rem', maxWidth: '600px', lineHeight: '1.6' }}>{slideData.content}</p>
                                            </div>
                                        </div>
                                    )}

                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* BOTTOM NAV */}
                        <div className="presentation-bottom-nav">
                            <button className="btn-nav-access" onClick={() => paginate(-1)}>
                                <FaArrowLeft /> PREVIOUS
                            </button>
                            <button className="btn-nav-access" onClick={() => paginate(1)}>
                                NEXT <FaArrowRight />
                            </button>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence >
        </>
    );
};

export default Presentation;
