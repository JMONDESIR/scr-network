import React from 'react';
import Banner from '../banner/Banner';
import ContactImg from '../../assets/contact.jpg';
import './Contact.css';
import Footer from '../footer/Footer';

const Contact = () => {
  return (
    <div className='main-container'>
      <Banner 
        title="Contact" 
        image={ContactImg}
        altText="Contact Us" 
      />
      <Footer />
      <div className='footer-bottom'>© Copyright 2003-2024 SCR Network  All rights Reserved.</div>
    </div>
  );
};

export default Contact;