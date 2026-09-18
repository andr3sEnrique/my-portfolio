import React, { useState } from "react";
import Loader from './Loader';
import Disco from '../img/disco-olimpico.png';
import LamparaD from '../img/lampara-derecha.png';
import LamparaI from '../img/lampara-izquierda.png';
import Pose1 from '../img/pose1.png';
import Pose2 from '../img/pose2.png';
import Pose3 from '../img/pose3.png';
import Pose4 from '../img/pose4.png';
import PlaceholderPose from '../img/placeholder-pose.svg';
import PlaceholderSkill from '../img/placeholder-skill.svg';
import '../styles/skills.css';
import Responsability from '../img/dieta.jpg';
import Adaptability from '../img/suplementos.jpg';
import TeamWork from '../img/team-work.jpg';
import Engagement from '../img/cbum.png';
import CustomModal from './Modal';
import { useTranslation } from '../i18n/LanguageContext';
import { clickable } from '../utils/clickable';
import { useFirstVisitLoader } from '../utils/useFirstVisitLoader';

// See About.js — shown only on the first visit to this section in a tab.
const LOADER_MS = 600;

// Plates rendered from the outside of the bar inwards, so bigger plate = stronger skill.
const LEVELS = {
    low: ['weight-1'],
    medium: ['weight-1', 'weight-2'],
    mediumHigh: ['weight-1', 'weight-2', 'weight-25'],
    high: ['weight-1', 'weight-2', 'weight-3']
};

// Soft skills shown as clickable gym poses. To add a real picture, drop the file in
// src/img, import it, and replace PlaceholderPose / PlaceholderSkill below.
const softSkills = [
    { titleKey: 'skills.softSkills.responsibility', pose: Pose1, img: Responsability },
    { titleKey: 'skills.softSkills.adaptability', pose: Pose2, img: Adaptability },
    { titleKey: 'skills.softSkills.teamwork', pose: Pose3, img: TeamWork },
    { titleKey: 'skills.softSkills.engagement', pose: Pose4, img: Engagement },
    { titleKey: 'skills.softSkills.curiosity', pose: PlaceholderPose, img: PlaceholderSkill },
    { titleKey: 'skills.softSkills.autonomy', pose: PlaceholderPose, img: PlaceholderSkill }
];

// `name` is a technology (never translated); `nameKey` goes through the locale files.
const sections = [
    {
        titleKey: 'skills.sections.frontend',
        skills: [
            { name: 'HTML/CSS', level: 'high' },
            { name: 'Responsive Web Design', level: 'high' },
            { name: 'Javascript', level: 'medium' },
            { name: 'React.js', level: 'high' }
        ]
    },
    {
        titleKey: 'skills.sections.backend',
        skills: [
            { name: 'Python', level: 'high' },
            { name: 'Java', level: 'high' },
            { name: 'Node.js', level: 'high' },
            { name: 'NestJS', level: 'high' },
            { name: 'TypeScript', level: 'high' },
            { name: 'REST APIs', level: 'high' }
        ]
    },
    {
        titleKey: 'skills.sections.data',
        skills: [
            { name: 'SQL/MySQL', level: 'high' },
            { name: 'MongoDB', level: 'low' },
            { name: 'Firebase/Supabase', level: 'medium' },
            { name: 'Grafana', level: 'medium' },
            { name: 'Datadog', level: 'mediumHigh' }
        ]
    },
    {
        titleKey: 'skills.sections.tooling',
        skills: [
            { name: 'Visual Studio', level: 'high' },
            { name: 'GitHub', level: 'high' },
            { name: 'IntelliJ', level: 'high' },
            { name: 'Android Studio', level: 'medium' },
            { name: 'Postman', level: 'medium' }
        ]
    },
    {
        titleKey: 'skills.sections.languages',
        skills: [
            { nameKey: 'skills.languages.spanish', level: 'high' },
            { nameKey: 'skills.languages.french', level: 'high' },
            { nameKey: 'skills.languages.english', level: 'medium' }
        ]
    }
];

// Two skills per row, keeping the original layout.
const chunk = (items, size = 2) =>
    items.reduce((rows, item, index) => {
        if (index % size === 0) rows.push([]);
        rows[rows.length - 1].push(item);
        return rows;
    }, []);

const Dumbbell = ({ level }) => {
    const plates = LEVELS[level] || LEVELS.low;
    return (
        <div className="dumbbell">
            {plates.map((plate, index) => <div key={`left-${index}`} className={`weight left ${plate}`}></div>)}
            <div className="bar"></div>
            {[...plates].reverse().map((plate, index) => <div key={`right-${index}`} className={`weight right ${plate}`}></div>)}
        </div>
    );
};

function Skills () {
    const { t } = useTranslation();
    const isLoading = useFirstVisitLoader('skills', LOADER_MS);
    const [show, setShow] = useState(false);
    const [currentSkill, setCurrentSkill] = useState({});
    const handleShow = (skill) => {
        setCurrentSkill(skill);
        setShow(true);
    };
    
    const handleClose = () => {
        setShow(false);
    };
    return (
        <>
        {isLoading ? (
            <Loader image={Disco}/>
        ) : (
            <div className="container-xxl pt-5" style={{padding: "30px"}}>
                <div className="d-flex justify-content-between align-items-center flex-row mb-5 contenedor">
                    <img src={LamparaI} alt="lampara" className="lamparas izquierda" />
                    <h1 className="text-google2">{t('skills.title')}</h1>
                    <img src={LamparaD} alt="lampara" className="lamparas derecha" />
                </div>
                <div className="d-flex flex-row flex-wrap justify-content-center poses-row mt-5">
                    {softSkills.map((skill) => (
                        <img
                            key={skill.titleKey}
                            src={skill.pose}
                            alt={t(skill.titleKey)}
                            title={t(skill.titleKey)}
                            className="poses-gym"
                            {...clickable(() => handleShow(skill), t(skill.titleKey))}
                        />
                    ))}
                </div>
                <CustomModal title={currentSkill.titleKey ? t(currentSkill.titleKey) : ''} img={currentSkill.img} show={show} handleClose={handleClose} />
                <div className=" mb-5 tarima"></div>
                {sections.map((section, sectionIndex) => (
                    <React.Fragment key={section.titleKey}>
                        {sectionIndex > 0 && <div className="tarima mb-5"></div>}
                        <h2 className="text-google2 text-center">{t(section.titleKey)}</h2>
                        {chunk(section.skills).map((row, rowIndex) => (
                            <div key={rowIndex} className={`skills-container${row.length === 1 ? ' single' : ''}`}>
                                {row.map((skill) => (
                                    <div key={skill.name || skill.nameKey} className="mt-5 mb-5 nivel-skill">
                                        <h3 className="text-google2 skills">{skill.name || t(skill.nameKey)}</h3>
                                        <Dumbbell level={skill.level} />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        )}

        </>
    )
}

export default Skills;
