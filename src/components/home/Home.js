import React from 'react';
import NetworkImg from '../../assets/network_I.jpg';
import HeaderLg from '../headerLg/HeaderLg';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className='hero'>
        <img src={NetworkImg} className="hero-img" alt="Server room" />
        <div className="hero-overlay">
          <h1 className="hero-text">Empower Your Business with On-Demand IT Solutions</h1>
        </div>
      </div>
      <HeaderLg />
    </div>
  );
};

export default Home;


