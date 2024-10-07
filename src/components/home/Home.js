import React from 'react'
import NetworkImg from '../../assets/network_I.jpg'
import HeaderLg from '../headerLg/HeaderLg';
import Footer from '../footer/Footer';
import { useState } from "react";
import './Home.css'

const Home = () => {
  
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {setShowVideo(true);};

  return (
    <div className="home-container">
      {showVideo ? (
        <iframe 
        className="about-video" 
        src="https://www.youtube.com/embed/LDmHtCiKPjU?si=-yG2qksynJAlk76a"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen>
        </iframe> 
        ) : (
        <img
          src={NetworkImg}
          className="home-img"
          alt="Server room"
          onClick={handleClick}
        />
      )}
      <HeaderLg />
      <Footer />
    </div>
  );
};

export default Home;

