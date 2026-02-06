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

  const projects = [
    {
      id: 1,
      title: t('projects.items.1.title'),
      description: t('projects.items.1.desc'),
      image: mallImg,
      gallery: projectsData[1].gallery
    },
    {
      id: 2,
      title: t('projects.items.2.title'),
      description: t('projects.items.2.desc'),
      image: solarImg,
      gallery: projectsData[2].gallery
    },
    {
      id: 3,
      title: t('projects.items.3.title'),
      description: t('projects.items.3.desc'),
      image: dangaraImg,
      gallery: projectsData[3].gallery
    },
    {
      id: 4,
      title: t('projects.items.4.title'),
      description: t('projects.items.4.desc'),
      image: asakaBackup,
      gallery: projectsData[4].gallery
    },
    {
      id: 5,
      title: t('projects.items.5.title'),
      description: t('projects.items.5.desc'),
      image: margilanImg,
      gallery: projectsData[5].gallery
    },
    {
      id: 6,
      title: t('projects.items.6.title'),
      description: t('projects.items.6.desc'),
      image: project116Img,
      gallery: projectsData[6].gallery
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
