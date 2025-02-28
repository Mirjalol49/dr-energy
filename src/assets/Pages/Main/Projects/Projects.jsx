import React, { useEffect, useRef } from 'react';
import './Projects.css';

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.project-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate');
              }, index * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
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
      title: "Commercial Electrical Installation",
      description: "Complete electrical system installation for a modern office building, including smart lighting controls, energy-efficient solutions, and backup power systems. Our team ensured minimal disruption while maintaining the highest safety standards.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
      link: "#"
    },
    {
      id: 2,
      title: "Residential Smart Home Setup",
      description: "Comprehensive smart home installation featuring automated lighting, climate control, and security systems. We integrated cutting-edge technology with existing infrastructure to create a seamless, energy-efficient living space.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      link: "#"
    },
    {
      id: 3,
      title: "Industrial Power Solutions",
      description: "Large-scale industrial electrical system upgrade, including power distribution, machinery connections, and emergency backup systems. Our expertise ensured uninterrupted operations while improving energy efficiency.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      link: "#"
    }
  ];

  return (
    <section className='projects-section' ref={sectionRef} id='projects'>
      <div className="container">
        <h2 className='project-title'>Featured Projects</h2>
        <div className="projects-wrapper">
          {projects.map((project) => (
            <div className="project-item" key={project.id}>
              <div className="projects-img-wrapper">
                <img className='projects-img' src={project.image} alt={project.title} />
              </div>
              <div className="project-item-content">
                <h3 className='project-item-title'>{project.title}</h3>
                <p className='project-item-text'>{project.description}</p>
                <a href={project.link} className="project-item-link">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
