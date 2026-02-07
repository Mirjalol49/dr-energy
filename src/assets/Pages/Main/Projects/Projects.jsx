import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';
import { useLanguage } from '../../../../context/LanguageContext';
import ProjectModal from './ProjectModal';
import { projectsData } from './projectsData';

import mallImg from '../Presentation/projects/tashkent_city_mall.jpg';
import solarImg from '../Presentation/projects/solar_jizzakh.jpg';
import dangaraImg from '../Presentation/projects/dangara1.jpg';
import asakaImg from '../Presentation/projects/asaka1.jpg'; // Correct file import
import margilanImg from '../Presentation/projects/margilan1.jpg';
import project116Img from '../Presentation/project_116.jpg'; // Correct file import
import asakaBackup from '../Presentation/projects/asaka1.jpg'; // Fallback for Asaka

const Projects = () => {
  const sectionRef = useRef(null);
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.project-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate');
              }, index * 100); // Faster stagger for more items
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /* 
    MAPPING PROJECTS TO PRESENTATION SLIDES:
    1. Tashkent City Mall -> Slide 29
    2. Solar Jizzakh -> Slide 19
    3. Dangara -> Slide 13
    4. Asaka Bank -> Slide 36 (Media Facade)
    5. Margilan -> Slide 11
    6. 116 -> Slide 9
    7. Solar Samarkand -> Slide 24
    8. Soho -> Slide 33
    9. Aloqa Bank -> Slide 38
    10. PSB Bank -> Slide 39
  */

  const projects = [
    {
      id: 1,
      slideId: 29,
      title: t('projects.items.1.title'),
      description: t('projects.items.1.desc'),
      image: mallImg,
      gallery: projectsData[1].gallery
    },
    {
      id: 2,
      slideId: 19,
      title: t('projects.items.2.title'),
      description: t('projects.items.2.desc'),
      image: solarImg,
      gallery: projectsData[2].gallery
    },
    {
      id: 3,
      slideId: 14, // Fixed: Dangara is Slide 14
      title: t('projects.items.3.title'),
      description: t('projects.items.3.desc'),
      image: dangaraImg,
      gallery: projectsData[3].gallery
    },
    {
      id: 4,
      slideId: 36,
      title: t('projects.items.4.title'),
      description: t('projects.items.4.desc'),
      image: asakaBackup,
      gallery: projectsData[4].gallery
    },
    {
      id: 5,
      slideId: 12, // Fixed: Margilan is Slide 12
      title: t('projects.items.5.title'),
      description: t('projects.items.5.desc'),
      image: margilanImg,
      gallery: projectsData[5].gallery
    },
    {
      id: 6,
      slideId: 7, // Fixed: 116 is Slide 7
      title: t('projects.items.6.title'),
      description: t('projects.items.6.desc'),
      image: project116Img,
      gallery: projectsData[6].gallery,
      documents: projectsData[6].documents
    },
    {
      id: 7,
      slideId: 24,
      title: t('projects.items.7.title'),
      description: t('projects.items.7.desc'),
      image: projectsData[7].gallery[0],
      gallery: projectsData[7].gallery
    },
    {
      id: 8,
      slideId: 33,
      title: t('projects.items.8.title'),
      description: t('projects.items.8.desc'),
      image: projectsData[8].gallery[0],
      gallery: projectsData[8].gallery
    },
    {
      id: 9,
      slideId: 38,
      title: t('projects.items.9.title'),
      description: t('projects.items.9.desc'),
      image: projectsData[9].gallery[0],
      gallery: projectsData[9].gallery
    },
    {
      id: 10,
      slideId: 39,
      title: t('projects.items.10.title'),
      description: t('projects.items.10.desc'),
      image: projectsData[10].gallery[0],
      gallery: projectsData[10].gallery
    },
    {
      id: 11,
      slideId: 16, // Asaka GRS
      title: t('projects.items.11.title'),
      description: t('projects.items.11.desc'),
      image: projectsData[11].gallery[0],
      gallery: projectsData[11].gallery
    },
    {
      id: 12,
      slideId: 8, // Residential 160
      title: t('projects.items.12.title'),
      description: t('projects.items.12.desc'),
      image: projectsData[12].gallery[0],
      gallery: projectsData[12].gallery,
      documents: projectsData[12].documents
    },
    {
      id: 13,
      slideId: 9, // Residential 222
      title: t('projects.items.13.title'),
      description: t('projects.items.13.desc'),
      image: projectsData[13].gallery[0],
      gallery: projectsData[13].gallery,
      documents: projectsData[13].documents
    }
  ];

  return (
    <section className='projects-section' ref={sectionRef} id='projects'>
      <div className="container">
        <h2 className='project-title'>{t('projects.title')}</h2>
        <div className="projects-wrapper">
          {projects.map((project) => (
            <div className="project-item" key={project.id}>
              <div className="projects-img-wrapper">
                <img className='projects-img' src={project.image} alt={project.title} />
              </div>
              <div className="project-item-content">
                <h3 className='project-item-title'>{project.title}</h3>
                <p className='project-item-text'>{project.description}</p>
                <button
                  className="project-item-link"
                  onClick={() => setSelectedProject(project)}
                >{t('projects.learnMore')}</button>
              </div>
            </div>
          ))}
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
