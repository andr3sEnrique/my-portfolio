import React from "react";
import Loader from './Loader';
import Disco from '../img/disco-olimpico.png';
import LamparaD from '../img/lampara-derecha.png';
import LamparaI from '../img/lampara-izquierda.png';
import '../styles/skills.css';
import { useContent } from '../i18n/useContent';
import { useFirstVisitLoader } from '../utils/useFirstVisitLoader';

// See About.js — shown only on the first visit to this section in a tab.
const LOADER_MS = 600;

/* Each profile shows the stack the role is read against. The security list
   keeps the master's-programme tools in their own group: calling them day-to-day
   skills would overstate them, and the CV draws the same line. */
const GROUPS = {
    dev: [
        {
            key: 'daily',
            featured: true,
            items: ['NestJS', 'Express', 'Node.js', 'TypeScript', 'REST APIs', 'MySQL', 'Redis', 'TypeORM', 'Datadog']
        },
        {
            key: 'projects',
            items: ['React.js', 'Next.js', 'HTML/CSS', 'Responsive Web Design', 'JavaScript', 'Python', 'Django', 'Java', 'Spring Boot', 'Flutter', 'Supabase', 'PostgreSQL', 'Prisma', 'Grafana']
        },
        {
            key: 'tooling',
            items: ['Git / GitHub', 'GitHub Actions', 'Docker', 'Postman', 'Jest', 'Vitest', 'Cypress', 'Playwright']
        }
    ],
    appsec: [
        {
            key: 'appsec',
            featured: true,
            items: ['OWASP Top 10', 'STRIDE threat modeling', 'SAST (SonarQube)', 'DAST (OWASP ZAP)', 'Secure code review', 'Security headers / CSP', 'Input validation', 'Rate limiting']
        },
        {
            key: 'devsecops',
            items: ['GitHub Actions', 'Tests in CI', 'Lint in CI', 'Dependency audit', 'Docker', 'Git', 'Datadog', 'Grafana']
        },
        {
            key: 'training',
            items: ['Burp Suite', 'Jenkins', 'Wazuh', 'WAF', 'Terraform (IaC)', 'Kubernetes', 'Linux scripting']
        },
        {
            key: 'build',
            items: ['TypeScript', 'JavaScript', 'Node.js', 'NestJS', 'Express', 'Python / Django', 'MySQL', 'PostgreSQL', 'React', 'Next.js']
        }
    ]
};

// CEFR, which is the scale a French recruiter already reads on a CV.
const languages = [
    { nameKey: 'skills.languages.spanish', levelKey: 'skills.levels.native' },
    { nameKey: 'skills.languages.french', level: 'B2' },
    { nameKey: 'skills.languages.english', level: 'B1+' }
];

function Skills () {
    const { t, tp, profile } = useContent();
    const groups = GROUPS[profile];
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
                    <section className="skill-group" key={group.key}>
                        <h2 className="text-google2 text-center">{tp(`skills.${group.key}`)}</h2>
                        <ul className={`tech-tags${group.featured ? ' tech-tags-featured' : ''}`}>
                            {group.items.map((item) => (
                                <li className="tech-tag" key={item}>{item}</li>
                            ))}
                        </ul>
                    </section>
                ))}
                <div className="tarima mb-5"></div>
                <section className="skill-group">
                    <h2 className="text-google2 text-center">{tp('skills.languages')}</h2>
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
