import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    { id: 1, title: 'Trabajo 1', description: 'Descripción breve del trabajo 1', link: '#' },
    { id: 2, title: 'Trabajo 2', description: 'Descripción breve del trabajo 2', link: '#' },
    { id: 3, title: 'Trabajo 3', description: 'Descripción breve del trabajo 3', link: '#' }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section className="projects">
      <h2>Mis Proyectos</h2>
      <div className="slider">
        <button className="prev" onClick={prevSlide}>&#10094;</button>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="slide"
        >
          <h3>{projects[currentSlide].title}</h3>
          <p>{projects[currentSlide].description}</p>
          <a href={projects[currentSlide].link}>Ver Proyecto</a>
        </motion.div>
        <button className="next" onClick={nextSlide}>&#10095;</button>
      </div>
    </section>
  );
};

export default Projects;
