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

// Grouped by how the technology is used rather than by a self-assigned level.
// A level nobody can check convinces nobody; "this is what I work with every
// day at Aphilia" can be read straight against the Aphilia card in Projects.
// `daily` mirrors that card exactly.
const groups = [
    {
        titleKey: 'skills.groups.daily',
        featured: true,
        items: ['NestJS', 'Express', 'Node.js', 'TypeScript', 'REST APIs', 'MySQL', 'Redis', 'TypeORM', 'Datadog']
    },
    {
        titleKey: 'skills.groups.projects',
        items: ['React.js', 'HTML/CSS', 'Responsive Web Design', 'JavaScript', 'Python', 'Java', 'Spring Boot', 'Flutter', 'Firebase/Supabase', 'MongoDB', 'Grafana']
    },
    {
        titleKey: 'skills.groups.tooling',
        items: ['Git / GitHub', 'Postman', 'Visual Studio Code', 'IntelliJ', 'Android Studio']
    }
];

// CEFR, which is the scale a French recruiter already reads on a CV.
const languages = [
    { nameKey: 'skills.languages.spanish', levelKey: 'skills.levels.native' },
    { nameKey: 'skills.languages.french', level: 'B2' },
    { nameKey: 'skills.languages.english', level: 'B1+' }
];

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
                <div className="tarima mb-5"></div>
                {groups.map((group) => (
                    <section className="skill-group" key={group.titleKey}>
                        <h2 className="text-google2 text-center">{t(group.titleKey)}</h2>
                        <ul className={`tech-tags${group.featured ? ' tech-tags-featured' : ''}`}>
                            {group.items.map((item) => (
                                <li className="tech-tag" key={item}>{item}</li>
                            ))}
                        </ul>
                    </section>
                ))}
                <div className="tarima mb-5"></div>
                <section className="skill-group">
                    <h2 className="text-google2 text-center">{t('skills.groups.languages')}</h2>
                    <ul className="language-list">
                        {languages.map((language) => (
                            <li className="language-item" key={language.nameKey}>
                                <span className="language-name">{t(language.nameKey)}</span>
                                <span className="language-level">
                                    {language.levelKey ? t(language.levelKey) : language.level}
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        )}

        </>
    )
}

export default Skills;
