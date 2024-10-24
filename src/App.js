import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Services from './components/services/Services';
import About from './components/about/About';
import Clients from './components/clients/Clients';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Faq from './components/faq/Faq'
import Downloads from './components/downloads/Downloads'

import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/downloads" element={<Downloads />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
