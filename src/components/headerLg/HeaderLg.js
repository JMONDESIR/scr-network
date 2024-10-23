import React from 'react';
import './HeaderLg.css';

const HeaderLg = () => {
    return (
        <div className="slant-box-container">

          <section className="box-inner box-1">
          <div className="inner-box-align">
            <h2 className="box-title">SERVERS</h2>
            <div className='box-text-cont'>
              <p className='box-desc'>We fix, maintain, & setup all makes and models of servers.
              </p>
            </div>
            </div>
          </section>

          <section className="box-inner box-2">
          <div className="inner-box-align">
              <h2 className="box-title">NETWORKING</h2>
              <div className='box-text-cont'>
              <p className='box-desc'>Everything from home wireless routers to enterpise grade networks we can help you get connected.
                </p>
              </div>
              </div>
          </section>

          <section className="box-inner box-3">
            <div className="inner-box-align">
              <h2 className="box-title">COMPUTERS</h2>
              <div className='box-text-cont'>
                <p className='box-desc'>From upgrades to virus removal, we can help up with your computers.</p>
              </div>
            </div>

          </section>
          
        </div>
    );
}

export default HeaderLg
