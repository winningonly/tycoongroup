import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">TYCOON GROUP</div>
        <div className="nav-links">
          <a href="#group">The Group</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#insights">Insights</a>
          <a href="#access" className="nav-access">Access</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
