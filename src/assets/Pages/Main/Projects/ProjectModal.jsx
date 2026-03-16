import React, { useEffect, useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useLanguage } from '../../../../context/LanguageContext';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
    const { t } = useLanguage();

    if (!project) return null;

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const mediaItems = project.gallery || [project.image];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
    };

    let richData = {};
    if (project.slideId) {
        const key = `presentation.slides.${project.slideId}`;
        const safeT = (k) => {
            const val = t(k);
            return val !== k ? val : null;
        };
        const rawContent = safeT(`${key}.content`);
        let structuredContent = [];

        if (Array.isArray(rawContent)) {
            const flat = rawContent.flat();
            flat.forEach(item => {
                if (typeof item === 'string') {
                    const lines = item.split('\n').filter(l => l.trim());
                    lines.forEach(line => structuredContent.push({ type: 'text', value: line }));
                } else if (typeof item === 'object' && item.title && item.desc) {
                    structuredContent.push({ type: 'feature', title: item.title, desc: item.desc });
                }
            });
        } else if (typeof rawContent === 'string') {
            const lines = rawContent.split('\n').filter(l => l.trim());
            lines.forEach(line => structuredContent.push({ type: 'text', value: line }));
        }

        richData = {
            role: safeT(`${key}.roleValue`),
            location: safeT(`${key}.locationValue`),
            capacity: safeT(`${key}.capacityValue`),
            customer: safeT(`${key}.customerValue`),
            works: safeT(`${key}.worksValue`),
            content: structuredContent.length > 0 ? structuredContent : null,
            fallbackDesc: project.description
        };
    } else {
        richData = {
            fallbackDesc: project.description,
            content: null
        };
    }

    const completedText = t('projects.completed');
    const categoryText = richData.role || t('projects.categoryFallback');

    return (
        <div className="pm-overlay" onClick={onClose}>
            <div className="pm-container" onClick={(e) => e.stopPropagation()}>
                <button className="pm-close" onClick={onClose}>
                    <FaTimes />
                </button>

                <div className="pm-header">
                    <h2 className="pm-title">{project.title}</h2>
                    <div className="pm-badges">
                        <span className="pm-badge pm-category">{categoryText}</span>
                        <span className="pm-badge pm-status">{completedText}</span>
                    </div>
                </div>

                <div className="pm-carousel">
                    {mediaItems.length > 1 && (
                        <button className="pm-nav prev" onClick={prevSlide}>
                            <FaChevronLeft />
                        </button>
                    )}
                    
                    <div className="pm-media-wrapper">
                        {(() => {
                            const item = mediaItems[currentIndex];
                            const isVideo = typeof item === 'string' && (item.endsWith('.mp4') || item.endsWith('.MOV'));
                            return isVideo ? (
                                <video src={item} className="pm-media" controls muted autoPlay loop playsInline />
                            ) : (
                                <img src={item} alt={`${project.title} - ${currentIndex}`} className="pm-media" />
                            );
                        })()}
                    </div>

                    {mediaItems.length > 1 && (
                        <button className="pm-nav next" onClick={nextSlide}>
                            <FaChevronRight />
                        </button>
                    )}

                    {mediaItems.length > 1 && (
                        <div className="pm-dots">
                            {mediaItems.map((_, idx) => (
                                <span
                                    key={idx}
                                    className={`pm-dot ${idx === currentIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentIndex(idx)}
                                />
                            ))}
                        </div>
                    )}
                </div>

                <div className="pm-body">
                    <h3 className="pm-subtitle">{t('projects.aboutProject')}</h3>
                    <p className="pm-desc">{richData.fallbackDesc}</p>
                    
                    {richData.works && (
                        <div className="pm-works">
                            <h4 className="pm-works-title">{t('projects.scopeOfWork')}</h4>
                            <p className="pm-desc">{richData.works}</p>
                        </div>
                    )}

                    {richData.content && (
                        <div className="pm-rich-content">
                            {richData.content.map((block, idx) => {
                                if (block.type === 'feature') {
                                    return (
                                        <div key={idx} className="pm-feature">
                                            <span className="pm-feature-title">{block.title}:</span>
                                            <span className="pm-feature-desc"> {block.desc}</span>
                                        </div>
                                    );
                                }
                                return <p key={idx} className="pm-desc">{block.value}</p>;
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
