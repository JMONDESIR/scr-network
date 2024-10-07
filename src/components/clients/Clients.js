import React from 'react';
import Banner from '../banner/Banner.js'
import ClientImg from '../../assets/client.jpg'
import DynamicTextbox from '../dynamicTextbox/DynamicTextbox.js';
import './Client.css'

const Clients = () => {
  const Text=
  <>
    <p>
    SCR Network's customer support system offers a quick, on-the-spot solution. We can easily
     control your computer remotely as if we were sitting right in front of it. Using the "Request
      Remote-Connection Support" link, your computer is ready for connection with tech support within
       seconds without the need to install any software.
    </p>
  </>
  return (
    <div>
      <Banner title="Clients" image={ClientImg} altText="Client Area" />
      <div className="button-container">
        <button 
          className="remote-button" 
          onClick={() => window.location.href = "https://www.898.tv/h3gj5m3"}>
          Remote Support
        </button>
      </div>
      <DynamicTextbox text={Text} />

    </div>
  );
};

export default Clients;