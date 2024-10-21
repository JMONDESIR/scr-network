import React from 'react';
import Banner from '../banner/Banner.js'
import ClientImg from '../../assets/client.jpg'
import DynamicTextbox from '../dynamicTextbox/DynamicTextbox.js';
import { Link } from 'react-router-dom';
import './Clients.css';

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
        <div onClick={() => window.location.href = "https://www.898.tv/h3gj5m3"}>
          <button className='remote-button'>Remote Support</button>
        </div>
        <div>
          <Link to="/Downloads"><button className='remote-button'>Downloads</button></Link>
        </div>

      </div>
      <DynamicTextbox text={Text} />

    </div>
  );
};

export default Clients;