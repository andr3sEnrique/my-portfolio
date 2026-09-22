import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '../i18n/LanguageContext';
import '../styles/navbar.css'

function CustomNavbar() {
  const { t } = useTranslation();
  return (
    <Navbar expand="lg" className="navbar-100 fixed-top">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="text-white text-google navbar-brand-small">{t('nav.brand')}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" className="text-white text-google">{t('nav.home')}</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="text-white text-google">{t('nav.about')}</Nav.Link>
            <Nav.Link as={NavLink} to="/projects" className="text-white text-google">{t('nav.projects')}</Nav.Link>
            <Nav.Link as={NavLink} to="/skills" className="text-white text-google">{t('nav.skills')}</Nav.Link>
        
          </Nav>
          <Nav>
            <LanguageSwitcher />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
