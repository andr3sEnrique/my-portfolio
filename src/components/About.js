import React, {useEffect, useState } from "react";
import Papel from "../img/papel-picado.png";
import Altar from "../img/altar.png"
import '../styles/about.css';


function About () {
    const [levelVisible, setLevelVisible] = useState(0);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            // Adjust these values based on the height/spacing of your levels
            if (scrolled < 200) {
                setScale(1 - scrolled / 200);
                setLevelVisible(0);
            } else if (scrolled >= 200 && scrolled < 400) {
                setLevelVisible(1);
            } else if (scrolled >= 400 && scrolled < 600) {
                setLevelVisible(2);
            } else if (scrolled >= 600) {
                setLevelVisible(3);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div>
            <img className="papel" src={Papel} />
            <div className="container-xxl">
                <div className={`altar-level level-0 ${levelVisible === 0 ? 'visible' : 'hidden'}`}>
                    <img  className="altar-img" src={Altar} style={{ transform: `scale(${scale})`, transition: 'transform 0.5s ease' }}/>
                </div>
                <div className={`altar-level level-1 ${levelVisible === 1 ? 'visible' : 'hidden'}`}>
                    <h1 className="title">
                        <span className="green-color">Who is Andres </span>
                        <span className="white-text">Enrique Ortiz </span>
                        <span className="red-color">Santa Cruz?</span>
                    </h1>
                </div>
                <div className={`altar-level level-2 ${levelVisible === 2 ? 'visible' : 'hidden'}`}>
                    nivel23
                </div>
                <div className={`altar-level level-3 ${levelVisible === 3 ? 'visible' : 'hidden'}`}>
                    nvierfrelfle
                </div>
            </div>
        </div>
    );
}

export default About;