
import React from 'react';
import './Banner.css';

const Banner = ({ title, image, altText }) => {
    return (
      <div className="banner-container">
        <div className="banner-image"
          style={{ backgroundImage: `url(${image})` }}
          alt={altText}
        >
        </div>
        <div className="banner-polygon">
        <h2 className="banner-sm-title">{title}</h2>
        </div>

      </div>
  );
};

export default Banner;



