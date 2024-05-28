import React, {useEffect, useState } from "react";
import Papel from "../img/papel-picado.png";
import Altar from "../img/altar.png"
import profile from '../img/profile-pic.jpeg';
import '../styles/about.css';


function About () {
    const [levelVisible, setLevelVisible] = useState(0);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            // Adjust these values based on the height/spacing of your levels
            if (scrolled < 130) {
                setScale(1 + scrolled / 100);
                setLevelVisible(0);
            } else if (scrolled >= 130 && scrolled < 320) {
                setLevelVisible(1);
            } else if (scrolled >= 320 && scrolled < 520) {
                setLevelVisible(2);
            } else if (scrolled >= 520) {
                setLevelVisible(3);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div>
            <img className="papel" src={Papel} alt="papel picado" />
            <div className="container-xxl">
                <div className={`altar-level level-0 ${levelVisible === 0 ? 'visible' : 'hidden'}`}>
                    <img alt="altar" className="altar-img" src={Altar} style={{ transform: `scale(${scale})`, transition: 'transform 0.5s ease' }}/>
                </div>
                <div className={`altar-level level-1 ${levelVisible === 1 ? 'visible' : 'hidden'}`}>
                    <h1 className="title">
                        <span className="green-color">Who is Andres </span>
                        <span className="white-text">Enrique Ortiz </span>
                        <span className="red-color">Santa Cruz?</span>
                    </h1>
                    <div className="d-flex justify-content-center ">
                        <img src={profile} alt="Enrique's profile" className="profile-pic"/>
                        <div className="line"></div>
                        <div className="d-flex justify-content-center flex-column">
                            <p className="text-google">Hello, I'm Andres Enrique Ortiz Santa Cruz, a <span className="key-words">software development</span> student who likes to create web and mobile applications.</p>
                            <p className="text-google">When I'm not working I like to <span className="key-words">work out</span> at the gym, 
                            <span className="key-words">explore</span> and <span className="key-words">learn</span> new things.</p>
                        </div>
                    </div>
                </div>
                <div className={`altar-level level-2 ${levelVisible === 2 ? 'visible' : 'hidden'}`}>
                    
                </div>
                <div className={`altar-level level-3 ${levelVisible === 3 ? 'visible' : 'hidden'}`}>
                    nvierfrelfle
                </div>
            </div>
            
        </div>
    );
}

export default About;