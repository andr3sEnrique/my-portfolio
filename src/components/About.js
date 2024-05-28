import React, { useEffect, useState } from "react";
import Papel from "../img/papel-picado.png";
import Altar from "../img/altar.png";
import profile from '../img/profile-pic.jpeg';
import LogoUtez from '../img/Logo-utez.png';
import LogoOrleans from '../img/logo-orleans.png';
import '../styles/about.css';

function About () {
    const [levelVisible, setLevelVisible] = useState(0);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            if (scrolled < 130) {
                setScale(1 + scrolled / 100);
                setLevelVisible(0);
            } else if (scrolled >= 130 && scrolled < 300) {
                setLevelVisible(1);
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
                    <div className="d-flex justify-content-center content-1">
                        <img src={profile} alt="Enrique's profile" className="profile-pic"/>
                        <div className="line"></div>
                        <div className="d-flex justify-content-center flex-column">
                            <p className="text-google">Hello, I'm Andres Enrique Ortiz Santa Cruz, a <span className="key-words">software development</span> student who likes to create web and mobile applications.</p>
                            <p className="text-google">When I'm not working I like to <span className="key-words">work out</span> at the gym, <span className="key-words">explore</span> and <span className="key-words">learn</span> new things.</p>
                        </div>
                    </div>
                    <h1 className="title">Academic Formation</h1>
                    <div className="row mt-4">
                        <div className="col">
                            <img alt="Logo utez" src={LogoUtez} className="logos me-2" />
                           
                        </div>
                        <div className="col">
                            <h2>Universidad Técnologica Emiliano Zapata - <a href="http://www.utez.edu.mx" target="blanc" className="reference">UTEZ</a></h2>
                            <p className="text-google">University Technician in multiplatform software development.</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <img alt="Logo orleans" src={LogoOrleans} className="logos me-2" />
                        </div>
                        <div className="col">
                            <h2>Université d'Orléans - <a className="reference" target="blanc" href="https://www.univ-orleans.fr/fr/iut-orleans">IUT Orléans</a></h2>
                            <p className="text-google">IT B.U.T - Realization of applications: design, development, validation.</p>
                        </div>
                            
                    </div>

                    <h1 className="title">Hobbies</h1>
                    <div>
                        <h1>More content here</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
