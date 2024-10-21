import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Scott from '../../assets/id.webp';

export class Footer extends Component {
  render() {
    return (
      <div className='footer'>
      <div className='footer-background'>
      <div className='footer-content'>
        <div div className='footer-box-1'>
          <img className="id-card" src={Scott} alt="Baby Scott" />
        </div>
        <div className='footer-box-2'>
          <Link to="/faq"><button className='footer-button'>FAQ</button></Link>
          <Link to="/downloads"><button className='footer-button'>DOWNLOADS</button></Link>
        </div>
        <div className='footer-box-3'>

        </div>
        <div className='footer-box-4'>

        </div>
      </div>
      </div>
      <div className='footer-polygon'>
        <div className="footer-polygon-box">
          <h2>SCR Network Headquarters</h2>
          <p>
            <strong>P.O. Box 212 <br/></strong>
            <strong>Camden, TN 38320 <br /></strong>
            <strong>731-213-2255 (Office) <br /></strong>
            <strong>731-213-2130 (Fax) <br /></strong>
            <a href="mailto:support@scrnetwork.com?subject=I have a Question / Appointment" target="_self" aria-disabled="false"><span className='footer-button'>Email Us</span></a>
          </p>
        </div>
      </div>
    </div>
    )
  }
}

export default Footer
