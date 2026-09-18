import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { LanguageProvider } from './i18n/LanguageContext';
import CustomNavbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <LanguageProvider>
      {/* basename keeps every route under the /my-portfolio/ subpath GitHub Pages serves. */}
      <Router basename={process.env.PUBLIC_URL}>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        <Footer/>
      </Router>
    </LanguageProvider>
  );
}

export default App;
