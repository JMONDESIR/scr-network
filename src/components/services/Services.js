import React, { useState } from 'react';
import Banner from '../banner/Banner';
import ServicesImg from '../../assets/services.jpg';
import './Services.css';
import { PiFileSql } from "react-icons/pi";
import { MdVpnLock } from "react-icons/md";
import { FaPeopleArrows, FaScrewdriverWrench } from "react-icons/fa6";
import { FaNetworkWired, FaShieldAlt, FaServer, FaDesktop, FaUserShield, FaSyncAlt } from 'react-icons/fa';
import DynamicTextbox from '../dynamicTextbox/DynamicTextbox';

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    { id: 1, name: "Network Installation", icon: <FaNetworkWired />, description: "Robust wired or wireless networks tailored to your business needs." },
    { id: 2, name: "Security Management", icon: <FaShieldAlt />, description: "Advanced security protocols and monitoring solutions to safeguard your network." },
    { id: 3, name: "Server Configuration", icon: <FaServer />, description: "Servers are set up for maximum performance, reliability, and security, tailored to your specific applications." },
    { id: 4, name: "Desktop Rollout", icon: <FaDesktop />, description: "End-to-end installation and setup of computers and peripherals, ensuring a smooth transition for your team." },
    { id: 5, name: "User Admin Issues", icon: <FaUserShield />, description: "Dedicated support team assists with user administration, troubleshooting access issues, and managing user accounts." },
    { id: 6, name: "Application Upgrades", icon: <FaSyncAlt />, description: "Keep your software up to date with our application upgrade services." },
    { id: 7, name: "SQL Server", icon: <PiFileSql />, description: "Leverage our SQL Server expertise to manage your data efficiently." },
    { id: 8, name: "VPN", icon: <MdVpnLock />, description: "Ensure secure remote access for your team with our VPN solutions." },
    { id: 9, name: "Hardware Support", icon: <FaScrewdriverWrench />, description: "We provide troubleshooting, repair, and replacement services for all types of hardware." },
    { id: 10, name: "IT Consulting", icon: <FaPeopleArrows />, description: "Expert advice and technology solutions enabling your businesses to meet goals and improve efficiency." },

  ];

  const handleTileClick = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

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
            <div
              className={`service-tile ${expandedService === service.id ? 'expanded' : ''}`}
              onClick={() => handleTileClick(service.id)}
            >
              {expandedService !== service.id && <div className="icon">{service.icon}</div>}
              {expandedService === service.id && <p className="service-description">{service.description}</p>}
            </div>
            {expandedService !== service.id && (
              <div className="service-name">
                {service.name}
              </div>
            )}
          </div>
        ))}
      </div>
      <DynamicTextbox text={Text} />
    </div>
  );  
};

export default Services;
