import React from 'react'
import './MiniBanner.css'

const MiniBanner = ({ title }) => {
    return (
      <div className="mini-banner-container">
        <div className="mini-banner-polygon">
        <h2 className="mini-banner-sm-title">{title}</h2>
        </div>
      </div>
  );
};

export default MiniBanner
