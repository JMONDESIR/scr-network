import React, { Component } from 'react'
import './Downloads.css'
import GibsonLogo from '../../assets/gibson-research-corporation-logo.gif'
import AVGLogo from '../../assets/avg-logo.png'
import MicrosoftLogo from '../../assets/microsoft-logo-2.png'
import HPLogo from '../../assets/HP-Logo.png'
import DellLogo from '../../assets/dell-logo.png';
import TrendnetLogo from '../../assets/trendnet-logo.png';
import GoDaddyLogo from '../../assets/godaddy-logo.png';
import CiscoLogo from '../../assets/cisco-logo.png';
import MalwareBytesLogo from '../../assets/malwarebytes-logo.png';
import MiniBanner from '../miniBanner/MiniBanner'

export class Downloads extends Component {
  render() {
    return (
      <div>
        <MiniBanner title="downloads"/>
        <div className="link-container">

          <div className="logo-link-wrapper" 
            onClick={() => window.open("https://www.grc.com/default.htm", "_blank", "noopener noreferrer")}>
            <img src={GibsonLogo} alt="Gibson Research Logo" />
          </div>

          <div className="logo-link-wrapper" 
            onClick={() => window.open("https://www.avg.com/en-us/homepage#pc", "_blank","noopener noreferrer" )}>
            <img className="select-logo" src={AVGLogo} alt="AVG Logo"></img>
          </div>

          <div className="logo-link-wrapper" 
            onClick={() => window.open("https://www.microsoft.com/en-us/security/business/microsoft-defender", "_blank", "noopener noreferrer")}>
            <img className="select-logo" src={MicrosoftLogo} alt="Microsoft Logo" />
          </div>

          <div className="logo-link-wrapper" 
            onClick={() => window.open("https://www.hp.com/us-en/home.html", "_blank", "noopener noreferrer")}>
            <img className="select-logo" src={HPLogo} alt="HP Logo" />
          </div>

          <div className="logo-link-wrapper" 
            onClick={() => window.open("https://www.dell.com/en-us", "_blank", "noopener noreferrer")}>
            <img className="select-logo" src={DellLogo} alt="Dell Logo" />
          </div>

          <div className="logo-link-wrapper" 
            onClick={() => window.open("https://www.trendnet.com/", "_blank", "noopener noreferrer")}>
            <img className="select-logo" src={TrendnetLogo} alt="Trendnet Logo" />
          </div>

          <div className="logo-link-wrapper" 
            onClick={() => window.open("https://www.godaddy.com/", "_blank", "noopener noreferrer")}>
            <img className="select-logo" src={GoDaddyLogo} alt="GoDaddy Logo" />
          </div>

          <div className="logo-link-wrapper" 
            onClick={() => window.open("https://www.cisco.com/", "_blank", "noopener noreferrer")}>
            <img className="select-logo" src={CiscoLogo} alt="Cisco Logo" />
          </div>

          <div className="logo-link-wrapper" 
            onClick={() => window.open("https://www.malwarebytes.com/", "_blank", "noopener noreferrer")}>
            <img className="select-logo" src={MalwareBytesLogo} alt="MalwareBytes Logo" />
          </div>

      </div>
    </div>
    )
  }
}

export default Downloads
