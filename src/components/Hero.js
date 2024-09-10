import React from 'react';
import './Hero.css';

const Hero = ({ title }) => {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <h2 className="hero-title">{title}</h2>
      </div>
    </section>
  );
};

export default Hero;
