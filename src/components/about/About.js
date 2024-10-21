import React from 'react';
import './About.css'
import Banner from '../banner/Banner'
import Aboutimg from '../../assets/about.jpg'
import DynamicTextbox from '../dynamicTextbox/DynamicTextbox';

const About = () => {
  const Text = (
    <>
      <p>
        Established in 2003, Scott's Computer Repair experienced remarkable growth, evolving from its humble
        beginnings into a robust enterprise. In response to this expansion, the company transitioned into SCR
        Network, LLC. Following its acquisition in 2017, SCR delivered top-tier Managed Service Provider (MSP)
        solutions for two years. However, due to overwhelming customer demand, we reestablished our independent
        operations in 2019—stronger and more committed to excellence than ever.
      </p>
  
      <p>
        Scott Hill, the founder and owner of SCR, holds a bachelor's degree in computer science and is CompTIA
        certified. More significantly, Hill and his team of seasoned professionals bring over 20 years of combined
        experience in building and managing networks of varying complexities and scales.
      </p>
  
      <p>
        SCR Network, LLC is equipped with the necessary security clearances and proprietary encryption software,
        allowing us to provide secure services to government entities, military organizations, law enforcement
        agencies, healthcare providers, and financial institutions. Our clearance certifications include, but are
        not limited to, CJIS Security Policy, SECRET Security Clearance, HIPAA, and PCI. A comprehensive list of
        credentials is available upon request.
      </p>
  
      <p>
        Regardless of the size or scope of your organization, SCR’s experts are well-prepared to offer seamless,
        tailored IT solutions.
      </p>
    </>
  );
  return (
    <div className='about-container'>             
      <Banner 
        title="About Us"
        image={Aboutimg}
        altText="About us"
        />
      <div className="video-container">
        <iframe 
        className="about-video" 
        src="https://www.youtube.com/embed/LDmHtCiKPjU?si=-yG2qksynJAlk76a"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen>
        </iframe>
      </div>
        <DynamicTextbox 
          text={Text}
        />

    </div>
  );
};

export default About;

