import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A high-performance personal portfolio built with React and interactive particle physics. Features a responsive glassmorphism design and custom animations.",
      tech: ["React", "CSS3", "HTML5"],
      link: "https://github.com/Shuklaarpitt/portfolio"
    },
    {
      title: "Artist Home",
      desc: "Its a platform where artists can showcase there work and get to reach a wider audience from the three gerne Music, Art & Craft and Writting.",
      tech: ["Angular", "Bootstrap", "TypeScript"],
      link: "https://github.com/Shuklaarpitt/artist-home"
    },
    {
      title: "Coming Soon App",
      desc: "Please stay tuned! More exciting projects are on the way.",
      tech: [],
      link: "https://github.com/Shuklaarpitt"
    }
  ];

  return (
    <section id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-header">
              <div className="folder-icon">
                <i className="fa fa-folder-open"></i>
              </div>
              <div className="links">
                <a href={project.link} target="_blank" rel="noreferrer"><i className="fa fa-external-link"></i></a>
                <a href={project.link} target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
              </div>
            </div>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="tech-stack">
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;