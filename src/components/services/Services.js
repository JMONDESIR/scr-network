import React from 'react';
import Banner from '../banner/Banner';
import ServicesImg from '../../assets/services.jpg'; 

const Services = () => {

  return (
    <div className='main-container'>
      <Banner 
        title="Services" 
        image={ServicesImg}
        altText="Services"
      />
    </div>
  );
};

export default Services;

