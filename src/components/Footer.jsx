import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com/Shuklaarpitt" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
          <a href="mailto:shuklaarpit383@zohomail.in"><i className="fa fa-envelope"></i></a>
          <a href="https://www.linkedin.com/in/arpit-s-5207a4253/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
          <a href="https://www.instagram.com/arpittshuklaa/" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
        </div>
        
        <p className="copyright">
          Made with <i className="fa fa-heart" style={{color: '#ff004f'}}></i> by <span>Arpit Shukla</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;