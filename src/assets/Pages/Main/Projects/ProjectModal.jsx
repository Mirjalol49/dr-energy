import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
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
                                <video src={item} className="carousel-media" controls muted autoPlay loops playsInline />
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

                    <div className="modal-text-section">
                        <h3 className="modal-subtitle">Project Details</h3>
                        <p className="modal-description">
                            {/* Use a longer description or repeating the current one to simulate the 'text' look requested if needed, 
                                but essentially relying on the 'desc' prop. 
                                Ideally, we would have a 'longDesc' field. 
                                For now, ensuring it displays prominently. */}
                            {project.description}
                        </p>

                        {/* Placeholder for "Loyiha Haqida" style extra info if available in future */}
                        {/* <div className="modal-meta-info">...</div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
