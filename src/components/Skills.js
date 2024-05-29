import React, { useEffect, useState } from "react";
import Loader from './Loader';
import Disco from '../img/disco-olimpico.png';
import Lampara from '../img/lampara.png';
import '../styles/skills.css';

function Skills () {
    const [isLoading, setIsLoading] = useState(true);
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
            <div className="container-xxl">
                <div className="d-flex justify-content-between align-items-center flex-row">
                    <img src={Lampara} alt="lampara" className="lamparas izquierda ms-5" />
                    <h1 className="text-google2">Skills</h1>
                    <img src={Lampara} alt="lampara" className="lamparas derecha me-5" />
                </div>
                <div className="mt-5 mb-5 tarima"></div>
                <h2 className="text-google2 text-center">FrontEnd</h2>
                <div className="d-flex flex-row align-items-center text-center">
                    <div className="mt-5 mb-5 d-flex flex-row">
                        <div className="d-flex flex-row justify-content-center align-items-center p-3">
                            <div>
                                <h3 className="text-google2 skills">HTML</h3>
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
                        <div className="d-flex flex-row  justify-content-center align-items-center p-3">
                            <div>
                                <h3 className="text-google2 skills">CSS</h3>
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
                    
                </div>

            </div>
        )}

        </>
    )
}

export default Skills;