import React from 'react'
import NetworkImg from '../../assets/network_I.jpg'
import HeaderLg from '../headerLg/HeaderLg';
import './Home.css'

const Home = () => {

    return (
      <div className="home_container">
        <img src={NetworkImg} className="home_img" alt="Server room" />
        <HeaderLg />
      </div>
    );
};

export default Home

