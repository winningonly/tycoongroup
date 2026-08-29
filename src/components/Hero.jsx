import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-content container fade-in">
        <h1 className="hero-title">Building Empires.<br/>Quietly.</h1>
        <p className="hero-subtitle">The digital headquarters for a powerful, discreet empire.</p>
        <button className="btn-primary">Request Access</button>
      </div>
    </section>
  );
};

export default Hero;
