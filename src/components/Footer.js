import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/footer.css'
function Footer (){
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
            return '#fbbc05';
          case '/contact':
            return '#ea4335';
          default:
            return '#760bde';
        }
      };
    return (
        <h2 className='name fixed-footer text-footer' style={{ color: getNavbarBackground(location.pathname) }}>© 2024 Andres Enrique Ortiz. All rights reserved.</h2>
    )
}

export default Footer;