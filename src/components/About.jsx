import React from 'react';
import myPhoto from '../assets/MyPhoto.jpeg';

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <img src={myPhoto} alt="Arpit Shukla" className="about-img" />
        <div className="about-text">
          <h2>About Myself.</h2>
          <p>
            Hi, I’m <b>Arpit Shukla</b>, a 20-year-old budding software developer from the vibrant city of Chhindwara. 
            Currently pursuing a B.Tech in Computer Science at Baderia Global Institute of Engineering and Management, 
            I’m passionate about crafting innovative solutions through code. With a strong focus on web development, 
            I’m building a skill set that combines creativity with technology to design user-centric digital experiences. 
            Fueled by curiosity and a drive for excellence, I’m on a journey for making meaningful contributions in the software world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;