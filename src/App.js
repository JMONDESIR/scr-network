import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Home from './components/home/Home';
import Services from './components/services/Services';
import About from './components/about/About';
import Clients from './components/clients/Clients';
import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
