import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { LanguageProvider } from './i18n/LanguageContext';
import CustomNavbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <LanguageProvider>
      {/* basename keeps every route under the /my-portfolio/ subpath GitHub Pages serves. */}
      <Router basename={process.env.PUBLIC_URL}>
        {/* Column layout so a short page still pushes the footer to the bottom
            of the viewport instead of leaving a white gap under it. */}
        <div className="app-shell">
          <CustomNavbar />
          <main className="app-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
          </main>
          <Footer/>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
