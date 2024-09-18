import React from 'react';
import Banner from '../banner/Banner';
import ContactImg from '../../assets/contact.jpg'; 

const Contact = () => {
  return (
    <div className='main-container'>
      <Banner 
        title="Contact" 
        image={ContactImg}
        altText="Contact Us"
      />
    </div>
  );
};

export default Contact;

