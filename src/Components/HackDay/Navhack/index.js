import React, { useState, useEffect } from 'react';
import './Navhack.css';

const Navhack = () => {
  const [activeSection, setActiveSection] = useState('');

  // Function to handle scroll and determine the active section
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
        setActiveSection(section.getAttribute("id"));
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{position:'fixed', width:'100vw', zIndex:'99999', backdropFilter:'blur(30px)'}}>
      <div>
        <h1 className='title'> HACKDAY </h1>
      </div>
      <nav className="navbar">
        <a href="#timeline" className={activeSection === 'timeline' ? 'active' : ''}>Timeline</a>
        <a href="#desc" className={activeSection === 'desc' ? 'active' : ''}>Description</a>
        <a href="#rewards" className={activeSection === 'rewards' ? 'active' : ''}>Rewards</a>
        <a href="#sponsor" className={activeSection === 'sponsor' ? 'active' : ''}>Sponsors</a>
        <a href="#faq" className={activeSection === 'faq' ? 'active' : ''}>FAQs</a>
        <a href="#sub" className={activeSection === 'sub' ? 'active' : ''}>Submission Format</a>
      </nav>
    </div>
  );
};

export default Navhack;
