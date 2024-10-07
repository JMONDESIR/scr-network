import React from 'react';
import Banner from '../banner/Banner';
import ServicesImg from '../../assets/services.jpg';
import './Services.css';
import DynamicTextbox from '../dynamicTextbox/DynamicTextbox';
import { PiFileSql } from "react-icons/pi";
import { MdVpnLock } from "react-icons/md";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaNetworkWired, FaShieldAlt, FaServer, FaDesktop, FaUserShield, FaSyncAlt } from 'react-icons/fa';

const Services = () => {

  const services = [
    { id: 1, name: "Network Installation", icon: <FaNetworkWired /> },
    { id: 2, name: "Security Management", icon: <FaShieldAlt /> },
    { id: 3, name: "Server Configuration", icon: <FaServer /> },
    { id: 4, name: "Desktop Rollout", icon: <FaDesktop /> },
    { id: 5, name: "User Admin Issues", icon: <FaUserShield /> },
    { id: 6, name: "Application Upgrades", icon: <FaSyncAlt /> },
    { id: 7, name: "SQL Server", icon: <PiFileSql /> },
    { id: 8, name: "VPN", icon: <MdVpnLock /> },
    { id: 9, name: "Hardware Support", icon: <FaScrewdriverWrench /> },


  ]; 

  const Text = (
    <>
      <p>
      Our services are delivered by highly experienced technicians with proven expertise in the industry.
       We provide tailored solutions designed to meet the specific needs of your business. Whether you
        require wireless or wired network installation, we offer nationwide services across the
         continental United States for both homes and offices. Inquire about our comprehensive network
          management services, which include onsite backup, security, user administration, spam
           filtering, application upgrades, technical support, and repair. At SCR Network, we offer
            flexible service options—available on a monthly contract, bid, or hourly basis—making us
             your full-service provider for all managed IT needs.
      </p>
  
      <p>
      SCR Network is a consulting firm specializing in the seamless integration of technology into your
       business or home environment. Our offerings range from technical support to complete system
        design, available for projects throughout the United States. We understand that an effective
         system design is critical to the success of any network. In today's fast-evolving and
          increasingly complex technology landscape, we offer precisely engineered networks that maximize
           performance while minimizing costly downtime. Our focus is on delivering cost-effective,
            technology-driven solutions that address your specific needs.
      </p>
  
      <p>
      Our team holds specialized expertise in wireless networks and computer security. We are equipped
       to assist with a wide array of IT projects, including network design, server configuration,
        desktop deployment, and security assessments.
      </p>
    </>
  );

  return (
    <div>
      <Banner title="Services" image={ServicesImg} altText="Services" />
    <div className="services-container">
      {services.map((service) => (
        <div key={service.id} className="service-item">
          <div className="service-tile">
            <div className="icon">{service.icon}</div>
          </div>
          <div className="service-title">{service.name}</div>
        </div>
      ))}
    </div>
      <DynamicTextbox text={Text} />
    </div>


  );
};

export default Services;

