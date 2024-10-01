import React from 'react';
import './Skills.css';

const skills = [
  { id: 1, name: 'Python', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
  { id: 2, name: 'CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
  { id: 3, name: 'Adobe Suite', icon: 'https://img.icons8.com/color/48/000000/adobe-creative-cloud--v1.png' },
  { id: 4, name: 'Compilación', icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg' }
];

const Skills = () => {
  return (
    <section className="skills">
      <h2>Habilidades</h2>
      <div className="skills-container">
        {skills.map(skill => (
          <div className="skill" key={skill.id}>
            <img src={skill.icon} alt={skill.name} className="icon" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
