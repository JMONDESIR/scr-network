
import React from 'react';
import './Banner.css';

const Banner = ({ title, image, altText }) => {
  return (
    <div className="banner-container"
      style={{ backgroundImage: `url(${image})` }}
      alt={altText} >
      <div className="banner-polygon">
        <h2 className="banner-sm-title">{title}</h2>
      </div>
    </div>
  );
};

export default Banner;


