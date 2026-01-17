import React from 'react';

const Skills = () => {
  const skills = [
    { name: "C / C++", icon: "fa-file-code-o", level: "Advanced" }, // Replaced Java
    { name: "React", icon: "fa-code", level: "Intermediate" },
    { name: "JavaScript", icon: "fa-jsfiddle", level: "Advanced" },
    { name: "HTML5/CSS3", icon: "fa-html5", level: "Expert" },
    { name: "Git/GitHub", icon: "fa-github", level: "Advanced" },
    { name: "Problem Solving", icon: "fa-puzzle-piece", level: "Advanced" }
    // Removed Node & MongoDB to keep it symmetrical (6 items = 2 perfect rows)
  ];

  return (
    <section id="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="icon-box">
              <i className={`fa ${skill.icon}`}></i>
            </div>
            <h3>{skill.name}</h3>
            {/* The "Catchy Line" - A glowing progress bar */}
            <div className="skill-bar">
              <div className="level"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;