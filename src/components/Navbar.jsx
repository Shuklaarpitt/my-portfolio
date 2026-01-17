import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const closeMenu = () => setIsOpen(false);

  // Scroll Logic: Hide on Down, Show on Up
  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Scrolling DOWN -> Hide
        setShowNavbar(false);
      } else {
        // Scrolling UP -> Show
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
    // eslint-disable-next-line
  }, [lastScrollY]);

  // If menu is OPEN, force navbar to show (so you can see the X button)
  const navVisibilityClass = !showNavbar && !isOpen ? 'navbar-hidden' : '';

  return (
    <nav className={`navbar ${navVisibilityClass}`}>
      <div className="nav-container">
        
        {/* 1. Signature Logo */}
        <div className="nav-logo">
          <h1>Arpit Shukla</h1>
        </div>

        {/* 2. Desktop Menu */}
        <ul className="nav-menu-desktop">
          <li><Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li>
          <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link></li>
          <li><Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={500}>Projects</Link></li>
          <li><Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500}>Skills</Link></li>
          <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link></li>
        </ul>

        {/* 3. Mobile Hamburger */}
        <div className="nav-icon" onClick={() => setIsOpen(!isOpen)}>
          <i className={isOpen ? "fa fa-times" : "fa fa-bars"}></i>
        </div>

        {/* 4. Mobile Overlay */}
        <div className={`nav-overlay ${isOpen ? "active" : ""}`}>
          <ul className="nav-menu-mobile">
            {/* Added offset={-70} to account for mobile header height */}
            <li><Link to="home" onClick={closeMenu} smooth={true} offset={-70} duration={500}>Home</Link></li>
            <li><Link to="about" onClick={closeMenu} smooth={true} offset={-70} duration={500}>About</Link></li>
            <li><Link to="projects" onClick={closeMenu} smooth={true} offset={-70} duration={500}>Projects</Link></li>
            <li><Link to="skills" onClick={closeMenu} smooth={true} offset={-70} duration={500}>Skills</Link></li>
            <li><Link to="contact" onClick={closeMenu} smooth={true} offset={-70} duration={500}>Contact</Link></li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;