import React from 'react';
import './HeaderSm.css';

const HeaderSm = ({ title }) => {
  return (
    <section className="header-banner">
      <div className="header-content">
        <h2 className="header-title">{title}</h2>
      </div>
    </section>
  );
};

export default HeaderSm;
