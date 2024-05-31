import React from "react";
import '../styles/experience.css';
import reactIcon from '../img/react.png';
import flutterIcon from '../img/flutter.png';
import grafanaIcon from '../img/grafana.png';
import javaIcon from '../img/java.png';
import mysqlIcon from '../img/mysql.png';
import pythonIcon from '../img/python.png';
import springIcon from '../img/spring.png';
import supabaseIcon from '../img/supabase.png';
import typescriptIcon from '../img/typescript.png';

function Experience () {
    return(
        <div className="container-xxl p-5">
            <h1 className="text-center mt-5 titleProjet">Projects 📂</h1>
            <div class="card mt-5">
                <div class="card-header">
                    <h4 className="text-center headerTitle">Internship | Full Stack Web Developer</h4>
                </div>
                <div class="card-body">
                    <h5 class="card-text title-empresa">IRD - Institut de recherche pour le développement.</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item body-text">• Development of a data collection application and data visualization dashboard.</li>
                        <li class="list-group-item body-text">• Maintenance and upgrading of the research team's website.</li>
                        <li class="list-group-item body-text">• Assistance from the team's IT manager.</li>
                    </ul>
                </div>
                <div class="card-footer text-body-secondary">
                    <div className="d-flex flex-row align-items-center">
                        <h5 className="footer-text me-3">Technologies used</h5> 
                        <img src={grafanaIcon} alt="Grafana icon" className="img-technologies" onClick={() => {window.open('https://grafana.com/', '_blanck');}} />   
                        <img src={pythonIcon} alt="Python icon" className="img-technologies" onClick={() => {window.open('https://www.python.org/', '_blanck');}}/>  
                        <img src={flutterIcon} alt="Flutter icon" className="img-technologies" onClick={() => {window.open('https://flutter.dev/', '_blanck');}}/>   
                    </div> 
                </div>
            </div>
            <div class="card mt-5">
                <div class="card-header">
                    <h4 className="text-center headerTitle">Tutored project | FrontEnd Developer</h4>
                </div>
                <div class="card-body">
                    <h5 class="card-text title-empresa">GABOR 45 - Groupement des agriculteurs biologiques et biodynamistes de l’Orléanais et du Loiret</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item body-text">• Contribution to the creation of modules for authentication, farmers, events, categories.</li>
                        <li class="list-group-item body-text">• Creation of search functions for farmers.</li>
                    </ul>
                </div>
                <div class="card-footer text-body-secondary">
                    <div className="d-flex flex-row align-items-center">
                        <h5 className="footer-text me-3">Technologies used</h5> 
                        <img src={supabaseIcon} alt="Supabase icon" className="img-technologies" onClick={() => {window.open('https://supabase.com/', '_blanck');}} />   
                        <img src={reactIcon} alt="React icon" className="img-technologies" onClick={() => {window.open('https://react.dev/', '_blanck');}} />
                        <img src={typescriptIcon} alt="TypeScript icon" className="img-technologies" onClick={() => {window.open('https://www.typescriptlang.org/', '_blanck');}} />    
                    </div> 
                </div>
            </div>
            <div class="card mt-5 mb-3">
                <div class="card-header">
                    <h4 className="text-center headerTitle">Tutored project | Developer and Project Leader</h4>
                </div>
                <div class="card-body">
                    <h5 class="card-text title-empresa">UTEZ - Universidad Técnologica Emiliano Zapata</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item body-text">• Management of the work team as well as client meetings. </li>
                        <li class="list-group-item body-text">• Development of a Web and Mobile application to manage the borrowing of computer equipment identified by QR Codes.</li>
                    </ul>
                </div>
                <div class="card-footer text-body-secondary">
                    <div className="d-flex flex-row align-items-center">
                        <h5 className="footer-text me-3">Technologies used</h5> 
                        <img src={springIcon} alt="Spring Boot icon" className="img-technologies" onClick={() => {window.open('https://spring.io/', '_blanck');}} />   
                        <img src={javaIcon} alt="Java icon" className="img-technologies" onClick={() => {window.open('https://www.java.com/', '_blanck');}} />
                        <img src={mysqlIcon} alt="MySQL icon" className="img-technologies" onClick={() => {window.open('https://www.mysql.com/', '_blanck');}}/>    
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Experience;