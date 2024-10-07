import React, { Component } from 'react';
import './Footer.css';

export class Footer extends Component {
  render() {
    return (
      <div className="footer-Container">
        <div className="footer">
        <span className="footer-box-1" >
          <h4>Resources</h4>
        </span>
        <span className="footer-box-2">
          <h4>Useful Links</h4>
        </span>
        <span className="footer-box-3">
          <h4>Contact</h4>
        </span>
        </div>
      </div>
    )
  }
}

export default Footer
