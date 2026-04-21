import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './app/page';
import AboutUs from './app/about-us/page';
import ContactUs from './app/contact-us/page';
import Documentation from './app/documentation/page';
import Gallery from './app/gallery/page';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/documents" element={<Documentation />} />
          <Route path="/gallery" element={<Gallery />} />
          
          {/* Aliases for Navbar consistency */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/documentation" element={<Documentation />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
