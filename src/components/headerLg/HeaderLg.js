import React from 'react';
import './HeaderLg.css';

const HeaderLg = ({ title }) => {
    return (
        <div className="large-hero-container">
          <section className="box-inner box-1">
            <h2 className="pro-text">Servers</h2>
          </section>
          <section className="box-inner box-2">
            <h2 className="pro-text">Networking</h2>
          </section>
          <section className="box-inner box-3">
            <h2 className="pro-text">Personal Computers</h2>
          </section>
        </div>

    );
}

export default HeaderLg
