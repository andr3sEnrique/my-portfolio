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
import nestjsIcon from '../img/nestjs_logo.png';
import expressIcon from '../img/express_logo.png';
import nodejsIcon from '../img/node_logo.png';
import redisIcon from '../img/redis_logo.png';
import typeormIcon from '../img/typeorm_logo.png';
import datadogIcon from '../img/datadog_logo.png';
import { useTranslation } from '../i18n/LanguageContext';
import { clickable, openInNewTab } from '../utils/clickable';

// Most recent first. `tasks` is the number of task keys (task1, task2, ...) in the locale files.
const experiences = [
    {
        key: 'aphilia',
        tasks: 4,
        repo: 'private',
        technologies: [
            { name: 'NestJS', icon: nestjsIcon, url: 'https://nestjs.com/' },
            { name: 'Express', icon: expressIcon, url: 'https://expressjs.com/' },
            { name: 'Node.js', icon: nodejsIcon, url: 'https://nodejs.org/' },
            { name: 'MySQL', icon: mysqlIcon, url: 'https://www.mysql.com/' },
            { name: 'Redis', icon: redisIcon, url: 'https://redis.io/' },
            { name: 'TypeORM', icon: typeormIcon, url: 'https://typeorm.io/' },
            { name: 'Datadog', icon: datadogIcon, url: 'https://www.datadoghq.com/' }
        ]
    },
    {
        key: 'ird',
        tasks: 3,
        technologies: [
            { name: 'Grafana', icon: grafanaIcon, url: 'https://grafana.com/' },
            { name: 'Python', icon: pythonIcon, url: 'https://www.python.org/' },
            { name: 'Flutter', icon: flutterIcon, url: 'https://flutter.dev/' }
        ]
    },
    {
        key: 'gabor',
        tasks: 2,
        repo: 'https://github.com/MaxRonce/GABOR45',
        technologies: [
            { name: 'Supabase', icon: supabaseIcon, url: 'https://supabase.com/' },
            { name: 'React', icon: reactIcon, url: 'https://react.dev/' },
            { name: 'TypeScript', icon: typescriptIcon, url: 'https://www.typescriptlang.org/' }
        ]
    },
    {
        key: 'utez',
        tasks: 2,
        technologies: [
            { name: 'Spring Boot', icon: springIcon, url: 'https://spring.io/' },
            { name: 'Java', icon: javaIcon, url: 'https://www.java.com/' },
            { name: 'MySQL', icon: mysqlIcon, url: 'https://www.mysql.com/' }
        ]
    }
];

function Experience () {
    const { t } = useTranslation();
    return(
        <div className="p-4">
            <h1 className="text-center mt-5 titleProjet">{t('experience.title')}</h1>
            {experiences.map((experience, index) => (
                <div className={`card mt-5${index === experiences.length - 1 ? ' mb-3' : ''}`} key={experience.key}>
                    <div className="card-header">
                        <h4 className="text-center headerTitle">{t(`experience.${experience.key}.role`)}</h4>
                    </div>
                    <div className="card-body">
                        <h5 className="card-text title-empresa">{t(`experience.${experience.key}.company`)}</h5>
                        <ul className="list-group list-group-flush">
                            {Array.from({ length: experience.tasks }, (_, i) => (
                                <li className="list-group-item body-text" key={i}>• {t(`experience.${experience.key}.task${i + 1}`)}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="card-footer text-body-secondary">
                        <div className="d-flex flex-row align-items-center flex-wrap">
                            <h5 className="footer-text me-3">{t('experience.technologiesUsed')}</h5>
                            {experience.technologies.map((technology) => (
                                <img
                                    key={technology.name}
                                    src={technology.icon}
                                    alt={`${technology.name} icon`}
                                    title={technology.name}
                                    className="img-technologies"
                                    {...clickable(openInNewTab(technology.url), technology.name)}
                                />
                            ))}
                            {experience.repo === 'private' && (
                                <span className="repo-badge repo-badge-private">🔒 {t('experience.privateRepo')}</span>
                            )}
                            {experience.repo && experience.repo !== 'private' && (
                                <a
                                    className="repo-badge repo-badge-link"
                                    href={experience.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {t('experience.viewCode')}
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Experience;
