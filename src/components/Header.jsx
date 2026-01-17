import React from 'react';
import ParticleBackground from './ParticleBackground';

const Header = () => {
  return (
    <header id="home">
      {/* 1. The Background Animation (Sits behind everything) */}
      <ParticleBackground />

      {/* 2. The Text (Left Side) */}
      <div className="header-text">
        <p>YOO! I AM A CODER.</p>
        <h1>Hi, I'm <span>Arpit</span><br />from Chhindwara</h1>
      </div>

      {/* 3. The Code Terminal (Right Side - RESTORED) */}
      <div className="header-visual">
        <div className="code-window">
          <div className="window-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="window-body">
            <p><span className="keyword">const</span> <span className="variable">developer</span> = <span className="brace">{'{'}</span></p>
            <p className="indent">name: <span className="string">"Arpit Shukla"</span>,</p>
            <p className="indent">role: <span className="string">"Full Stack Dev"</span>,</p>
            <p className="indent">passion: <span className="string">"Coding"</span>,</p>
            <p className="indent">location: <span className="string">"MP, India"</span></p>
            <p><span className="brace">{'}'}</span>;</p>
            <p className="cursor">_</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;