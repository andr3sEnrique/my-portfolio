import React, { useEffect, useState, useRef } from "react";
import { Modal, Button } from 'react-bootstrap';
import Experience from './Experience';
import Contact from "./Contact";
import Cempasuchil from '../img/cempasuchil.png';
import profile from '../img/profile-pic.jpg';
import LogoUtez from '../img/Logo-utez.png';
import LogoOrleans from '../img/logo-orleans.png';
import Ronnie from '../img/ronnie-coleman.jpg';
import Cbum from '../img/cbum.png';
import Ramon from '../img/ramon.png';
import Urs from '../img/urs.jpg';
import Breon from '../img/breon.jpg';
import Terrence from '../img/terrence.jpg';
import '../styles/about.css';
import Quetzalcoatl from '../img/quetzal-loader.png';
import Loader from './Loader';
import ModalHobbie from "./ModalHobbie";

function About () {
    const [isLoading, setIsLoading] = useState(true);
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showWatch, setShowWatch] = useState(false);
    const [count, setCount] = useState(0);
    const [timeLeft, setTimeLeft] = useState(10);
    const [timerActive, setTimerActive] = useState(false);
    const [currentLevel, setCurrentLevel] = useState({});
    const [displayState, setDisplayState] = useState('game');
    const countRef = useRef(0);
    const levelData = [
        { title: "You can do better", img: Terrence},
        { title: "Not enough", img: Breon},
        {title: "Not bad", img: Urs},
        {title: "Good :)", img: Ramon},
        {title: "You're the next Mr. Olympia", img: Cbum}
    ]
    const handleShowGame = () => {
        setShowModal(true);
        setDisplayState('game');
        setTimerActive(false);
        setTimeLeft(10);
        setCount(0);
        
    };
    const handleCloseGame = () => {
        countRef.current = 0; 
        setCount(0);
        setShowModal(false);
        
    };

    const startCountdown = () => {
        setTimerActive(true);
        const interval = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(interval);
                    setDisplayState('loading');
                    setTimeout(() => {
                        evaluateLevel();
                    }, 2000);
                    return 10;
                }
                return prevTime - 1;
            });
        }, 1000);
    };

    const incrementCount = () => {
        if (timerActive) {
            setCount(prevCount => prevCount + 1);
            countRef.current = countRef.current + 1;
        }
    };

    const evaluateLevel = () => {
        const finalCount = countRef.current; 
        if (finalCount <= 50) {
            setCurrentLevel(levelData[0]);
        } else if (finalCount <= 70) {
            setCurrentLevel(levelData[1]);
        } else if (finalCount <= 80) {
            setCurrentLevel(levelData[2]);
        } else if (finalCount <= 90) {
            setCurrentLevel(levelData[3]);
        } else if (finalCount >= 100) {
            setCurrentLevel(levelData[4]);
        }
        setDisplayState('results');
    };

    const handleCloseWatch = () => setShowWatch(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        const fetchData = async () => {
            await new Promise(resolve => setTimeout(resolve, 3000)); 
            setIsLoading(false);
          };

        fetchData();
        
    }, []);

    return (
        <>
            {isLoading ? (
                <Loader image={Quetzalcoatl} />
            ) : (
                <div className="pt-5">
                    <div className="container-xxl">
                        <div className={`mt-4 altar-level level-1 visible`}>
                            <h1 className="title">
                                <span className="green-color">Who is Andres </span>
                                <span className="white-text">Enrique Ortiz </span>
                                <span className="red-color">Santa Cruz?</span>
                            </h1>
                            <div className="d-flex justify-content-center content-1">
                                <img src={profile} alt="Enrique's profile" className="profile-pic"/>
                                <div className="line"></div>
                                <div className="d-flex justify-content-center flex-column about-me">
                                    <p className="text-google">Hello, I'm Andres Enrique Ortiz Santa Cruz, a <span className="key-words">software development</span> student who likes to create web and mobile applications.</p>
                                    <p className="text-google">When I'm not working I like to <span className="key-words">work out</span> at the gym, <span className="key-words">explore</span> and <span className="key-words">learn</span> new things.</p>
                                    
                                </div>
                            </div>
                            <div className="line-separation d-flex flex-row"><img src={Cempasuchil} alt="flor de cempasuchil" className="flor"/><img src={Cempasuchil} alt="flor de cempasuchil" className="flor"/></div>
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
                            <div className="line-separation d-flex flex-row"><img src={Cempasuchil} alt="flor de cempasuchil" className="flor"/><img src={Cempasuchil} alt="flor de cempasuchil" className="flor"/></div>
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
                                            <span className="hobbies cursor" onClick={() => setShowWatch(true)}>🎬</span>
                                            <h2>Watch</h2>
                                        </div>
                                        <div className="col align-self-center text-center">
                                            <span className="hobbies cursor" onClick={handleShowGame}>🎮</span>
                                            <h2>Jeux vidéos</h2>
                                        </div>
                                    </div>
                                </div> 
                                <ModalHobbie show={showWatch} handleClose={handleCloseWatch}/>
                                <Modal show={showModal} onHide={handleCloseGame}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{displayState === 'game' ? 'Click the button as many times as you can' : 'Results'}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    {displayState === 'game' && (
                                        <>
                                            <p>Clicks: {count}</p>
                                            <p>Time Left: {timeLeft}s</p>
                                            {!timerActive && <Button onClick={startCountdown}>Start</Button>}
                                            {timerActive && <Button onClick={incrementCount}>Click Me!</Button>}
                                        </>
                                    )}
                                    {displayState === 'loading' && 
                                    <div class="text-center div-spinner">
                                        <div class="spinner-border text-warning" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                  } 
                                    {displayState === 'results' && (
                                        <>
                                            <h1 className="text-center">{currentLevel.title}</h1>
                                            <img src={currentLevel.img} alt="Workout" class="img-fluid" />
                                        </>
                                    )}
                                </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleCloseGame}>
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>You're doing well</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <img src={Ronnie} alt="Workout" class="img-fluid" />
                                        <h1 className="text-center">Light Weight !</h1>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                            <div className="line-separation d-flex flex-row"><img src={Cempasuchil} alt="flor de cempasuchil" className="flor"/><img src={Cempasuchil} alt="flor de cempasuchil" className="flor"/></div>
                            <Experience />
                            <div className="line-separation d-flex flex-row"><img src={Cempasuchil} alt="flor de cempasuchil" className="flor"/><img src={Cempasuchil} alt="flor de cempasuchil" className="flor"/></div>
                            <Contact />
                            
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default About;
