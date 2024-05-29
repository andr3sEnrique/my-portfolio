import React, { useEffect, useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import Papel from "../img/papel-picado.png";
import Altar from "../img/altar.png";
import profile from '../img/profile-pic.jpeg';
import LogoUtez from '../img/Logo-utez.png';
import LogoOrleans from '../img/logo-orleans.png';
import Ronnie from '../img/ronnie-coleman.jpg';
import '../styles/about.css';
import Taco from '../img/taco.png';
import Guitar from '../img/guitar.png';
import Quetzalcoatl from '../img/quetzal-loader.png';
import Loader from './Loader';

function About () {
    const [levelVisible, setLevelVisible] = useState(0);
    const [scale, setScale] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        const fetchData = async () => {
            await new Promise(resolve => setTimeout(resolve, 3000)); 
            setIsLoading(false);
          };

        fetchData();
        const handleScroll = () => {
            const scrolled = window.scrollY;
            if (scrolled < 110) {
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
        <>
            {isLoading ? (
                <Loader image={Quetzalcoatl} />
            ) : (
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
                                    <div className="d-flex justify-content-around align-items-center flex-row">
                                        <img src={Taco} alt="taco" className="imgs"/>
                                        <img src={Guitar} alt="guitar" className="imgs"/>
                                    </div>
                                </div>
                            </div>
                            <div className="line-separation mb-4"></div>
                            <h1 className="title">Academic Formation</h1>
                            <div className="row mt-4">
                                <div className="col align-self-center">
                                    <img alt="Logo utez" src={LogoUtez} className="logos me-2" />
                                
                                </div>
                                <div className="col">
                                    <h2>Universidad Técnologica Emiliano Zapata - <a href="http://www.utez.edu.mx" target="blanc" className="reference">UTEZ</a></h2>
                                    <p className="text-google">University Technician in multiplatform software development.</p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col align-self-center">
                                    <img alt="Logo orleans" src={LogoOrleans} className="logos me-2" />
                                </div>
                                <div className="col">
                                    <h2>Université d'Orléans - <a className="reference" target="blanc" href="https://www.univ-orleans.fr/fr/iut-orleans">IUT Orléans</a></h2>
                                    <p className="text-google">IT B.U.T (Bac +3) - Realization of applications: design, development, validation.</p>
                                </div>
                                    
                            </div>
                            <div className="line-separation mb-4"></div>
                            <h1 className="title">Hobbies</h1>
                            <div className="mb-5 text-center">
                                <p className="text-google p-2">Doing what you love is essential to maintain a balance between physical and mental health. That's why I prioritize some of my time to do my hobbies,
                                    as they not only help me stay fit and healthy, but also improve my mood, reduce stress and relax me. This gives me an escape from the daily hustle 
                                    and bustle and allows me to forget about everything for a moment and clear my head.</p>
                                <div>
                                    <div className="row align-items-center"> 
                                        <div className="col align-self-center text-center">
                                            <span className="hobbies cursor" onClick={handleShow}>💪🏽</span>
                                            <h2>Work out</h2>
                                        </div>
                                        <div className="col align-self-center text-center">
                                            <span className="hobbies cursor" onClick={() => {window.open('https://open.spotify.com/playlist/2AnCJ3ajEK7kNaxAf5aI2A?si=502a3d406eb940da', '_blanck');}}>🎧</span>
                                            <h2>Listen to music</h2>
                                        </div>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col align-self-center text-center">
                                            <span className="hobbies">📕</span>
                                            <h2>Read</h2>
                                        </div>
                                        <div className="col align-self-center text-center">
                                            <span className="hobbies">🎮</span>
                                            <h2>Jeux vidéos</h2>
                                        </div>
                                    </div>
                                </div> 
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>You're doing well</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <img src={Ronnie} alt="Workout" class="img-fluid" />
                                        <h1>Light Weight !</h1>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                            
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default About;
