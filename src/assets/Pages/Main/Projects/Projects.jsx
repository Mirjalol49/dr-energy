import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { FaPlay } from 'react-icons/fa';
import './Projects.css';
import { useLanguage } from '../../../../context/LanguageContext';
import ProjectModal from './ProjectModal';
import { projectsData } from './projectsData';

import mallImg from '../Presentation/projects/tashkent_city_mall.jpg';
import solarImg from '../Presentation/projects/solar_jizzakh.jpg';
import dangaraImg from '../Presentation/projects/dangara1.jpg';
import margilanImg from '../Presentation/projects/margilan1.jpg';
import project116Img from '../Presentation/project_116.jpg';
import asakaBackup from '../Presentation/projects/asaka1.jpg';
import buildingBg from '../Presentation/hero_building_bw.png';

const Projects = () => {
  const sectionRef = useRef(null);
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.project-item, .featured-card');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate');
              }, index * 80);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1, slideId: 29,
      title: t('projects.items.1.title'),
      description: t('projects.items.1.desc'),
      image: mallImg,
      gallery: projectsData[1].gallery
    },
    {
      id: 2, slideId: 19,
      title: t('projects.items.2.title'),
      description: t('projects.items.2.desc'),
      image: solarImg,
      gallery: projectsData[2].gallery
    },
    {
      id: 3, slideId: 14,
      title: t('projects.items.3.title'),
      description: t('projects.items.3.desc'),
      image: dangaraImg,
      gallery: projectsData[3].gallery
    },
    {
      id: 4, slideId: 36,
      title: t('projects.items.4.title'),
      description: t('projects.items.4.desc'),
      image: asakaBackup,
      gallery: projectsData[4].gallery
    },
    {
      id: 5, slideId: 12,
      title: t('projects.items.5.title'),
      description: t('projects.items.5.desc'),
      image: margilanImg,
      gallery: projectsData[5].gallery
    },
    {
      id: 6, slideId: 7,
      title: t('projects.items.6.title'),
      description: t('projects.items.6.desc'),
      image: project116Img,
      gallery: projectsData[6].gallery,
      documents: projectsData[6].documents
    },
    {
      id: 7, slideId: 24,
      title: t('projects.items.7.title'),
      description: t('projects.items.7.desc'),
      image: projectsData[7].gallery[0],
      gallery: projectsData[7].gallery
    },
    {
      id: 8, slideId: 33,
      title: t('projects.items.8.title'),
      description: t('projects.items.8.desc'),
      image: projectsData[8].gallery[0],
      gallery: projectsData[8].gallery
    },
    {
      id: 9, slideId: 38,
      title: t('projects.items.9.title'),
      description: t('projects.items.9.desc'),
      image: projectsData[9].gallery[0],
      gallery: projectsData[9].gallery
    },
    {
      id: 10, slideId: 39,
      title: t('projects.items.10.title'),
      description: t('projects.items.10.desc'),
      image: projectsData[9].gallery[0], // Used a solid image from Lot-6 to fix gray/failed video loading
      gallery: projectsData[10].gallery
    },
    {
      id: 11, slideId: 16,
      title: t('projects.items.11.title'),
      description: t('projects.items.11.desc'),
      image: projectsData[11].gallery[0],
      gallery: projectsData[11].gallery
    },
    {
      id: 12, slideId: 8,
      title: t('projects.items.12.title'),
      description: t('projects.items.12.desc'),
      image: projectsData[12].gallery[0],
      gallery: projectsData[12].gallery,
      documents: projectsData[12].documents
    },
    {
      id: 13, slideId: 9,
      title: t('projects.items.13.title'),
      description: t('projects.items.13.desc'),
      image: projectsData[13].gallery[0],
      gallery: projectsData[13].gallery,
      documents: projectsData[13].documents
    }
  ];



  const handleOpenPresentation = () => {
    window.location.href = '/presentation';
  };

  const renderMedia = (src, title) => {
    if (!src) return null;
    const isVideo = src.match(/\.(mp4|webm|ogg|mov)$/i);
    if (isVideo) {
      return (
        <video
          className="featured-card-img"
          src={src}
          autoPlay
          loop
          muted
          playsInline
        />
      );
    }
    return (
      <img
        className="featured-card-img"
        src={src}
        alt={title}
        loading="lazy"
      />
    );
  };

  return (
    <section className='projects-section' ref={sectionRef} id='projects'>
      {/* Section Header */}
      <div className="projects-header">
        <h2 className='project-title'>{t('projects.title')}</h2>
      </div>

      {/* All Projects Grid */}
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            className="featured-card"
            key={project.id}
            onClick={() => setSelectedProject(project)}
          >
            {renderMedia(project.image, project.title)}
            <div className="featured-card-overlay">
              <h3 className="featured-card-title">{project.title}</h3>
              <p className="featured-card-desc">{project.description}</p>
              <button className="featured-card-link">
                {t('projects.learnMore')}
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Presentation CTA Banner */}
      <div className="projects-cta-banner">
        <div className="cta-banner-inner" onClick={handleOpenPresentation}>
          <div
            className="cta-banner-bg"
            style={{ backgroundImage: `url(${buildingBg})` }}
          />
          <div className="cta-banner-content">
            <span className="cta-banner-label">{t('presentation.entry.portfolioLabel')}</span>
            <h2 className="cta-banner-title">Doctor Energy</h2>
            <p className="cta-banner-tagline">{t('presentation.entry.tagline')}</p>
            <button className="cta-banner-btn">
              <FaPlay size={14} />
              {t('presentation.entry.openBtn')}
            </button>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
