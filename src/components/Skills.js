import React from "react";
import Loader from './Loader';
import Disco from '../img/disco-olimpico.png';
import LamparaD from '../img/lampara-derecha.png';
import LamparaI from '../img/lampara-izquierda.png';
import '../styles/skills.css';
import { useTranslation } from '../i18n/LanguageContext';
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
