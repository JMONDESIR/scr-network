import React from 'react'
import NetworkComputers from '../../assets/network_I.jpg'
import './Hero.css'

const Hero = () => {

    return (
      <div className="hero_container">
        <img src={NetworkComputers} className="hero_img" alt="Network computers" />
      </div>
    );
};

export default Hero

