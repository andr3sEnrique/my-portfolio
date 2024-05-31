import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/navbar.css'

function CustomNavbar() {
  const location = useLocation();
  const getNavbarBackground = (pathname) => {
    switch(pathname) {
      case '/my-portfolio':
        return '#760bde';
      case '/about':
        return '#c54308'; 
      case '/skills':
        return '#474747';
      case '/experience':
        return '#2e8372';
      case '/contact':
        return '#089ec5';
      default:
        return '#760bde';
    }
  };
  return (
    <Navbar expand="lg" className="navbar-100 fixed-top" style={{ backgroundColor: getNavbarBackground(location.pathname) }}>
      <Container>
        <Navbar.Brand as={NavLink} to="/my-portfolio" className="text-white text-google navbar-brand-small">Andres Enrique Ortiz Santa Cruz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/my-portfolio" className="text-white text-google">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="text-white text-google">About Me</Nav.Link>
            <Nav.Link as={NavLink} to="/skills" className="text-white text-google">Skills</Nav.Link>
            <Nav.Link as={NavLink} to="/experience" className="text-white text-google">Experience</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="text-white text-google">Contact</Nav.Link>
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;