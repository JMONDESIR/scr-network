import React from 'react';
import Banner from '../banner/Banner';
import AboutImg from '../../assets/about.jpg'; 

const About = () => {
  return (
    <div className='main-container'>
      <Banner 
        title="About SCR" 
        image={AboutImg}
        altText="About SCR"
      />
    </div>
  );
};

export default About;

