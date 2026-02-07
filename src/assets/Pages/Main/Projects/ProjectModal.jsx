import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useLanguage } from '../../../../context/LanguageContext';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
    const { t } = useLanguage();

    if (!project) return null;

    // Prevent background scrolling
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);


    // State for Carousel
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const mediaItems = project.gallery || [project.image];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
    };

    // --- FETCH RICH DATA FROM PRESENTATION SLIDES ---
    // If project has a slideId, we try to get more details from the presentation translations
    let richData = {};
    if (project.slideId) {
        const key = `presentation.slides.${project.slideId}`;

        // Helper to safely get translation or return null if key is missing/same as key
        const safeT = (k) => {
            const val = t(k);
            return val !== k ? val : null;
        };

        const rawContent = safeT(`${key}.content`);
        let structuredContent = [];

        // Parse content into structured format
        if (Array.isArray(rawContent)) {
            // Flatten one level if it's a split slide array format
            const flat = rawContent.flat();

            flat.forEach(item => {
                if (typeof item === 'string') {
                    // Split long strings by newlines
                    const lines = item.split('\n').filter(l => l.trim());
                    lines.forEach(line => structuredContent.push({ type: 'text', value: line }));
                } else if (typeof item === 'object' && item.title && item.desc) {
                    // Feature object
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
            participant: safeT(`${key}.participantValue`), // correct key might be participantValue? Checking presentation.jsx it uses participantValue sometimes
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


    return (
        <div className="project-modal-overlay" onClick={onClose}>
            <div className="project-modal-container" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>
                    <FaTimes />
                </button>

                {/* CAROUSEL SECTION */}
                <div className="modal-carousel-section">
                    <div className="carousel-wrapper">
                        {/* Media Item */}
                        {(() => {
                            const item = mediaItems[currentIndex];
                            const isVideo = typeof item === 'string' && (item.endsWith('.mp4') || item.endsWith('.MOV'));
                            return isVideo ? (
                                <video src={item} className="carousel-media" controls muted autoPlay loop playsInline />
                            ) : (
                                <img src={item} alt={`${project.title} - ${currentIndex}`} className="carousel-media" />
                            );
                        })()}

                        {/* Navigation Buttons (only if > 1 item) */}
                        {mediaItems.length > 1 && (
                            <>
                                <button className="carousel-nav-btn prev" onClick={prevSlide}>&#10094;</button>
                                <button className="carousel-nav-btn next" onClick={nextSlide}>&#10095;</button>
                            </>
                        )}

                        {/* Dots Indicator */}
                        {mediaItems.length > 1 && (
                            <div className="carousel-dots">
                                {mediaItems.map((_, idx) => (
                                    <span
                                        key={idx}
                                        className={`dot ${idx === currentIndex ? 'active' : ''}`}
                                        onClick={() => setCurrentIndex(idx)}
                                    ></span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* TEXT CONTENT SECTION */}
                <div className="modal-content-body">
                    <h2 className="modal-title">{project.title}</h2>

                    {/* Technical Details Grid */}
                    <div className="modal-details-grid">
                        {richData.customer && (
                            <div className="modal-detail-item">
                                <span className="detail-label">{t('presentation.slides.12.customerLabel') || 'Customer:'}</span>
                                <span className="detail-value">{richData.customer}</span>
                            </div>
                        )}
                        {richData.participant && (
                            <div className="modal-detail-item">
                                <span className="detail-label">Partners:</span>
                                <span className="detail-value">{richData.participant}</span>
                            </div>
                        )}
                        {richData.location && (
                            <div className="modal-detail-item">
                                <span className="detail-label">{t('presentation.slides.23.locationLabel') || 'Location:'}</span>
                                <span className="detail-value">{richData.location}</span>
                            </div>
                        )}
                        {richData.capacity && (
                            <div className="modal-detail-item">
                                <span className="detail-label">{t('presentation.slides.19.capacityLabel') || 'Capacity:'}</span>
                                <span className="detail-value">{richData.capacity}</span>
                            </div>
                        )}
                        {richData.role && (
                            <div className="modal-detail-item">
                                <span className="detail-label">{t('presentation.slides.19.roleLabel') || 'Role:'}</span>
                                <span className="detail-value">{richData.role}</span>
                            </div>
                        )}
                    </div>

                    <div className="modal-text-section">
                        {/* Scope of Work Highlight */}
                        {richData.works && (
                            <div className="modal-work-scope">
                                <h3 className="scope-title">{t('presentation.slides.12.worksLabel') || 'Scope of Work'}</h3>
                                <p className="scope-text">{richData.works}</p>
                            </div>
                        )}

                        {/* Dynamic Structured Content */}
                        <div className="modal-rich-content">
                            {richData.content ? (
                                richData.content.map((block, idx) => {
                                    if (block.type === 'feature') {
                                        return (
                                            <div key={idx} className="content-feature-card">
                                                <h4 className="feature-title">{block.title}:</h4>
                                                <span className="feature-desc">{block.desc}</span>
                                            </div>
                                        );
                                    }
                                    return (
                                        <p key={idx} className="content-paragraph">
                                            {block.value}
                                        </p>
                                    );
                                })
                            ) : (
                                <p className="modal-description">{richData.fallbackDesc}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
