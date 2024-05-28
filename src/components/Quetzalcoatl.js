import React, { useEffect } from 'react';
import alebrijeImg from '../img/quetzalcoatl.png';
import '../styles/quetzalcoatl.css';

function Quetzalcoatl() {
    useEffect(() => {
        const interval = setInterval(() => {
            const quetzalcoatl = document.getElementById('quetzalcoatl');
            quetzalcoatl.classList.remove('animate');
            void quetzalcoatl.offsetWidth; // Trigger reflow
            quetzalcoatl.classList.add('animate');
        }, 8000);  // Intervalo entre animaciones

        return () => clearInterval(interval);
    }, []);

    return (
        <img id="quetzalcoatl" src={alebrijeImg} alt="quetzalcoatl" className="quetzalcoatl" />
    );
}

export default Quetzalcoatl;
