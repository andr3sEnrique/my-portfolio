import React, { useState, useRef } from "react";
import { Modal, Button } from 'react-bootstrap';
import Experience from './Experience';
import Contact from "./Contact";
import Cempasuchil from '../img/cempasuchil.png';
import profile from '../img/profile-pic.jpg';
import LogoUtez from '../img/Logo-utez.png';
import LogoOrleans from '../img/logo-orleans.png';
import LogoLiveCampus from '../img/logo-livecampus.png';
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
import { useTranslation, useRichTranslation } from '../i18n/LanguageContext';
import { clickable, openInNewTab } from '../utils/clickable';
import { useFirstVisitLoader } from '../utils/useFirstVisitLoader';

// How long the quetzal loader stays on screen, the first time this section is
// opened in a tab. Set it to 0 to show the page immediately.
const LOADER_MS = 600;

// Ordered from the weakest to the strongest result; titles live in the locale files.
const levelImages = [Terrence, Breon, Urs, Ramon, Cbum];

// Stated as claim + evidence, because a bare adjective convinces nobody. Keys
// resolve to about.softSkills.<key>.name / .evidence in the locale files.
const softSkills = ['teamwork', 'autonomy', 'adaptability', 'curiosity'];

// Most recent first. When `linkLabel` is missing the school name itself becomes the link.
const education = [
    {
        logo: LogoLiveCampus,
        alt: 'Logo LiveCampus',
        nameKey: 'about.livecampusName',
        degreeKey: 'about.livecampusDegree',
        link: 'https://www.livecampus.fr/'
    },
    {
        logo: LogoOrleans,
        alt: 'Logo orleans',
        nameKey: 'about.orleansName',
        degreeKey: 'about.orleansDegree',
        link: 'https://www.univ-orleans.fr/fr/iut-orleans',
        linkLabel: 'IUT Orléans'
    },
    {
        logo: LogoUtez,
        alt: 'Logo utez',
        nameKey: 'about.utezName',
        degreeKey: 'about.utezDegree',
        link: 'http://www.utez.edu.mx',
        linkLabel: 'UTEZ'
    }
];

function About () {
    const { t } = useTranslation();
    const rt = useRichTranslation();
    const isLoading = useFirstVisitLoader('about', LOADER_MS);
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showWatch, setShowWatch] = useState(false);
    const [count, setCount] = useState(0);
    const [timeLeft, setTimeLeft] = useState(10);
    const [timerActive, setTimerActive] = useState(false);
    const [levelIndex, setLevelIndex] = useState(null);
    const [displayState, setDisplayState] = useState('game');
    const countRef = useRef(0);
    const levelTitles = t('about.game.levels');
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
            setLevelIndex(0);
        } else if (finalCount <= 70) {
            setLevelIndex(1);
        } else if (finalCount <= 80) {
            setLevelIndex(2);
        } else if (finalCount <= 90) {
            setLevelIndex(3);
        } else if (finalCount >= 100) {
            setLevelIndex(4);
        }
        setDisplayState('results');
    };

    const handleCloseWatch = () => setShowWatch(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            {isLoading ? (
                <Loader image={Quetzalcoatl} />
            ) : (
                <div className="pt-5">
                    <div className="container-xxl">
                        <div className={`mt-4 altar-level level-1 visible`}>
                            <h1 className="title">{t('about.title')}</h1>
                            <div className="d-flex justify-content-center content-1">
                                <img src={profile} alt={t('about.profileAlt')} className="profile-pic"/>
                                <div className="line"></div>
                                <div className="d-flex justify-content-center flex-column about-me">
                                    <p className="text-google">{rt('about.bio1')}</p>
                                    <p className="text-google">{rt('about.bio2')}</p>
                                    <p className="text-google">{rt('about.bio3')}</p>
                                    <p className="text-google">{rt('about.bio4')}</p>
                                    
                                </div>
                            </div>
                            <div className="line-separation full-bleed d-flex flex-row"><img src={Cempasuchil} alt="flor de cempasuchil" className="flor"/><img src={Cempasuchil} alt="flor de cempasuchil" className="flor"/></div>
                            <h1 className="title">{t('about.softSkillsTitle')}</h1>
                            <ul className="soft-skills">
                                {softSkills.map((key) => (
                                    <li className="soft-skill" key={key}>
                                        <h3 className="soft-skill-name">{t(`about.softSkills.${key}.name`)}</h3>
                                        <p className="soft-skill-evidence">{t(`about.softSkills.${key}.evidence`)}</p>
                                    </li>
                                ))}
                            </ul>
                            <div className="line-separation full-bleed d-flex flex-row"><img src={Cempasuchil} alt="flor de cempasuchil" className="flor"/><img src={Cempasuchil} alt="flor de cempasuchil" className="flor"/></div>
                            <h1 className="title">{t('about.academicTitle')}</h1>
                            {education.map((school) => (
                                <div className="row mt-4" key={school.nameKey}>
                                    <div className="col align-self-center">
                                        <img alt={school.alt} src={school.logo} className="logos me-2" />
                                    </div>
                                    <div className="col">
                                        <h2>
                                            {school.linkLabel
                                                ? <>{t(school.nameKey)} - <a className="reference" target="_blank" rel="noopener noreferrer" href={school.link}>{school.linkLabel}</a></>
                                                : <a className="reference" target="_blank" rel="noopener noreferrer" href={school.link}>{t(school.nameKey)}</a>}
                                        </h2>
                                        <p className="text-google">{t(school.degreeKey)}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="line-separation full-bleed d-flex flex-row"><img src={Cempasuchil} alt="flor de cempasuchil" className="flor"/><img src={Cempasuchil} alt="flor de cempasuchil" className="flor"/></div>
                            <h1 className="title">{t('about.hobbiesTitle')}</h1>
                            <div className="mb-5 text-center">
                                <p className="text-google prose p-2">{t('about.hobbiesText')}</p>
                                <div>
                                    <div className="row align-items-center"> 
                                        <div className="col align-self-center text-center">
                                            <span className="hobbies cursor" {...clickable(handleShow, t('about.hobbyWorkout'))}>💪🏽</span>
                                            <h2>{t('about.hobbyWorkout')}</h2>
                                        </div>
                                        <div className="col align-self-center text-center">
                                            <span className="hobbies cursor" {...clickable(openInNewTab('https://open.spotify.com/playlist/2AnCJ3ajEK7kNaxAf5aI2A?si=502a3d406eb940da'), t('about.hobbyMusic'))}>🎧</span>
                                            <h2>{t('about.hobbyMusic')}</h2>
                                        </div>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col align-self-center text-center">
                                            <span className="hobbies cursor" {...clickable(() => setShowWatch(true), t('about.hobbyWatch'))}>🎬</span>
                                            <h2>{t('about.hobbyWatch')}</h2>
                                        </div>
                                        <div className="col align-self-center text-center">
                                            <span className="hobbies cursor" {...clickable(handleShowGame, t('about.hobbyGames'))}>🎮</span>
                                            <h2>{t('about.hobbyGames')}</h2>
                                        </div>
                                    </div>
                                </div> 
                                <ModalHobbie show={showWatch} handleClose={handleCloseWatch}/>
                                <Modal show={showModal} onHide={handleCloseGame}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{displayState === 'game' ? t('about.game.title') : t('about.game.resultsTitle')}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    {displayState === 'game' && (
                                        <>
                                            <p>{t('about.game.clicks')} {count}</p>
                                            <p>{t('about.game.timeLeft')} {timeLeft}s</p>
                                            {!timerActive && <Button onClick={startCountdown}>{t('about.game.start')}</Button>}
                                            {timerActive && <Button onClick={incrementCount}>{t('about.game.clickMe')}</Button>}
                                        </>
                                    )}
                                    {displayState === 'loading' && 
                                    <div className="text-center div-spinner">
                                        <div className="spinner-border text-warning" role="status">
                                            <span className="visually-hidden">{t('about.game.loading')}</span>
                                        </div>
                                    </div>
                                  } 
                                    {displayState === 'results' && levelIndex !== null && (
                                        <>
                                            <h1 className="text-center">{levelTitles[levelIndex]}</h1>
                                            <img src={levelImages[levelIndex]} alt="Workout" className="img-fluid" />
                                        </>
                                    )}
                                </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleCloseGame}>
                                            {t('common.close')}
                                        </Button>
                                    </Modal.Footer>
                                </Modal>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>{t('about.workoutModal.title')}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <img src={Ronnie} alt="Workout" className="img-fluid" />
                                        <h1 className="text-center">{t('about.workoutModal.caption')}</h1>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            {t('common.close')}
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                            <div className="line-separation full-bleed d-flex flex-row"><img src={Cempasuchil} alt="flor de cempasuchil" className="flor"/><img src={Cempasuchil} alt="flor de cempasuchil" className="flor"/></div>
                            <Experience />
                            <div className="line-separation full-bleed d-flex flex-row"><img src={Cempasuchil} alt="flor de cempasuchil" className="flor"/><img src={Cempasuchil} alt="flor de cempasuchil" className="flor"/></div>
                            <Contact />
                            
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default About;
