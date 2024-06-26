import React, { useEffect, useState } from "react";
import Loader from './Loader';
import Disco from '../img/disco-olimpico.png';
import LamparaD from '../img/lampara-derecha.png';
import LamparaI from '../img/lampara-izquierda.png';
import Pose1 from '../img/pose1.png';
import Pose2 from '../img/pose2.png';
import Pose3 from '../img/pose3.png';
import Pose4 from '../img/pose4.png';
import '../styles/skills.css';
import Responsability from '../img/dieta.jpg';
import Adaptability from '../img/suplementos.jpg';
import TeamWork from '../img/team-work.jpg';
import Engagement from '../img/cbum.png';
import CustomModal from './Modal';

function Skills () {
    const [isLoading, setIsLoading] = useState(true);
    const [show, setShow] = useState(false);
    const [currentSkill, setCurrentSkill] = useState({});
    const skillsData = [
        { title: "Responsibility", img: Responsability },
        { title: "Adaptability", img: Adaptability },
        { title: "TeamWork", img: TeamWork },
        { title: "Engagement", img: Engagement }
    ];
    const handleShow = (index) => {
        const skill = skillsData[index - 1]; // Adjusting index because arrays are zero-indexed
        if (skill) {
            setCurrentSkill(skill);
            setShow(true);
        } else {
            console.log("not in the range"); // This is more appropriate than 'print'
        }
    };
    
    const handleClose = () => {
        setShow(false);
    };
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
            <Loader image={Disco}/>
        ) : (
            <div className="container-xxl pt-5" style={{padding: "30px"}}>
                <div className="d-flex justify-content-between align-items-center flex-row mb-5 contenedor">
                    <img src={LamparaI} alt="lampara" className="lamparas izquierda" />
                    <h1 className="text-google2">Skills</h1>
                    <img src={LamparaD} alt="lampara" className="lamparas derecha" />
                </div>
                <div className="d-flex flex-row justify-content-between mt-5">
                    <img src={Pose1} alt="pose gym 1" className="poses-gym" onClick={() => handleShow(1)}/>
                    <img src={Pose2} alt="pose gym 2" className="poses-gym" onClick={() => handleShow(2)}/>
                    <img src={Pose3} alt="pose gym 3" className="poses-gym" onClick={() => handleShow(3)}/>
                    <img src={Pose4} alt="pose gym 4" className="poses-gym" onClick={() => handleShow(4)}/>
                </div>
                <CustomModal title={currentSkill.title} img={currentSkill.img} show={show} handleClose={handleClose} />
                <div className=" mb-5 tarima"></div>
                <h2 className="text-google2 text-center">FrontEnd</h2>
                <div className="skills-container">
                    <div className="mt-5 mb-5 nivel-skill">
                        <h3 className="text-google2 skills">HTML/CSS</h3>
                        <div class="dumbbell">
                            <div class="weight left weight-1"></div>
                            <div class="weight left weight-2"></div>
                            <div class="weight left weight-3"></div>
                            <div class="bar"></div>
                            <div class="weight right weight-3"></div>
                            <div class="weight right weight-2"></div>
                            <div class="weight right weight-1"></div>
                        </div>
                    </div>
                    <div className="mt-5 mb-5 nivel-skill">
                        
                        <h3 className="text-google2 skills">Javascript</h3>
                        <div class="dumbbell">
                            <div class="weight left weight-1"></div>
                            <div class="weight left weight-2"></div>
                            <div class="bar"></div>
                            <div class="weight right weight-2"></div>
                            <div class="weight right weight-1"></div>
                        </div>
                            
                    </div>
                    
                </div>
                <div className="tarima mb-5"></div>
                <h2 className="text-google2 text-center">BackEnd</h2>
                <div className="skills-container">
                    <div className="mt-5 mb-5 nivel-skill">
                        <h3 className="text-google2 skills">Python</h3>
                        <div class="dumbbell">
                            <div class="weight left weight-1"></div>
                            <div class="weight left weight-2"></div>
                            <div class="weight left weight-3"></div>
                            <div class="bar"></div>
                            <div class="weight right weight-3"></div>
                            <div class="weight right weight-2"></div>
                            <div class="weight right weight-1"></div>
                        </div>
                    </div>
                    <div className="mt-5 mb-5 nivel-skill">
                        
                        <h3 className="text-google2 skills">Java</h3>
                        <div class="dumbbell">
                            <div class="weight left weight-1"></div>
                            <div class="weight left weight-2"></div>
                            <div class="weight left weight-3"></div>
                            <div class="bar"></div>
                            <div class="weight right weight-3"></div>
                            <div class="weight right weight-2"></div>
                            <div class="weight right weight-1"></div>
                        </div>
                            
                    </div>
                    
                </div>
                <div className="skills-container">
                    <div className="mt-5 mb-5 nivel-skill">
                        <h3 className="text-google2 skills">Postman</h3>
                        <div class="dumbbell">
                            <div class="weight left weight-1"></div>
                            <div class="weight left weight-2"></div>
                            <div class="bar"></div>
                            <div class="weight right weight-2"></div>
                            <div class="weight right weight-1"></div>
                        </div>
                    </div>
                    <div className="mt-5 mb-5 nivel-skill">
                        
                        <h3 className="text-google2 skills">Node Js</h3>
                        <div class="dumbbell">
                            <div class="weight left weight-1"></div>
                            <div class="weight left weight-2"></div>
                            <div class="bar"></div>
                            <div class="weight right weight-2"></div>
                            <div class="weight right weight-1"></div>
                        </div>
                            
                    </div>
                    
                </div>
                <div className="tarima mb-5"></div>
                <h2 className="text-google2 text-center">Data</h2>
                <div className="skills-container">
                    <div className="mt-5 mb-5 nivel-skill">
                        <h3 className="text-google2 skills">SQL/MySQL</h3>
                        <div class="dumbbell">
                            <div class="weight left weight-1"></div>
                            <div class="weight left weight-2"></div>
                            <div class="weight left weight-3"></div>
                            <div class="bar"></div>
                            <div class="weight right weight-3"></div>
                            <div class="weight right weight-2"></div>
                            <div class="weight right weight-1"></div>
                        </div>
                    </div>
                    <div className="mt-5 mb-5 nivel-skill">
                        
                        <h3 className="text-google2 skills">MongoDB</h3>
                        <div class="dumbbell">
                            <div class="weight left weight-1"></div>
                            <div class="bar"></div>
                            <div class="weight right weight-1"></div>
                        </div>
                            
                    </div>
                    
                </div>
                <div className="skills-container">
                    <div className="mt-5 mb-5 nivel-skill">
                        <h3 className="text-google2 skills">Firebase/Supabase</h3>
                        <div class="dumbbell">
                            <div class="weight left weight-1"></div>
                            <div class="weight left weight-2"></div>
                            <div class="bar"></div>
                            <div class="weight right weight-2"></div>
                            <div class="weight right weight-1"></div>
                        </div>
                    </div>
                    <div className="mt-5 mb-5 nivel-skill">
                        
                        <h3 className="text-google2 skills">Grafana</h3>
                        <div class="dumbbell">
                            <div class="weight left weight-1"></div>
                            <div class="weight left weight-2"></div>
                            <div class="bar"></div>
                            <div class="weight right weight-2"></div>
                            <div class="weight right weight-1"></div>
                        </div>
                            
                    </div>
                    
                </div>
                <div className="tarima mb-5"></div>
                <h2 className="text-google2 text-center">Tooling</h2>
                <div className="skills-container">
                    <div className="mt-5 mb-5 nivel-skill">
                        <h3 className="text-google2 skills">Visual Studio</h3>
                        <div class="dumbbell">
                            <div class="weight left weight-1"></div>
                            <div class="weight left weight-2"></div>
                            <div class="weight left weight-3"></div>
                            <div class="bar"></div>
                            <div class="weight right weight-3"></div>
                            <div class="weight right weight-2"></div>
                            <div class="weight right weight-1"></div>
                        </div>
                    </div>
                    <div className="mt-5 mb-5 nivel-skill">
                        
                        <h3 className="text-google2 skills">GitHub</h3>
                        <div class="dumbbell">
                            <div class="weight left weight-1"></div>
                            <div class="weight left weight-2"></div>
                            <div class="weight left weight-3"></div>
                            <div class="bar"></div>
                            <div class="weight right weight-3"></div>
                            <div class="weight right weight-2"></div>
                            <div class="weight right weight-1"></div>
                        </div>
                            
                    </div>
                    
                </div>
                <div className="skills-container">
                    <div className="mt-5 mb-5 nivel-skill">
                        <h3 className="text-google2 skills">IntelliJ</h3>
                        <div class="dumbbell">
                            <div class="weight left weight-1"></div>
                            <div class="weight left weight-2"></div>
                            <div class="bar"></div>
                            <div class="weight right weight-2"></div>
                            <div class="weight right weight-1"></div>
                        </div>
                    </div>
                    <div className="mt-5 mb-5 nivel-skill">
                        
                        <h3 className="text-google2 skills">Android Studio</h3>
                        <div class="dumbbell">
                            <div class="weight left weight-1"></div>
                            <div class="weight left weight-2"></div>
                            <div class="bar"></div>
                            <div class="weight right weight-2"></div>
                            <div class="weight right weight-1"></div>
                        </div>
                            
                    </div>
                    
                </div>
                <div className="tarima mb-5"></div>
                <h2 className="text-google2 text-center">Langues</h2>
                <div className="skills-container">
                    <div className="mt-5 mb-5 nivel-skill">
                        <h3 className="text-google2 skills">French</h3>
                        <div class="dumbbell">
                            <div class="weight left weight-1"></div>
                            <div class="weight left weight-2"></div>
                            <div class="weight left weight-3"></div>
                            <div class="bar"></div>
                            <div class="weight right weight-3"></div>
                            <div class="weight right weight-2"></div>
                            <div class="weight right weight-1"></div>
                        </div>
                    </div>
                    <div className="mt-5 mb-5 nivel-skill">
                        
                        <h3 className="text-google2 skills">English</h3>
                        <div class="dumbbell">
                            <div class="weight left weight-1"></div>
                            <div class="weight left weight-2"></div>
                            <div class="weight left weight-3"></div>
                            <div class="bar"></div>
                            <div class="weight right weight-3"></div>
                            <div class="weight right weight-2"></div>
                            <div class="weight right weight-1"></div>
                        </div>
                            
                    </div>
                    
                </div>
                

            </div>
        )}

        </>
    )
}

export default Skills;