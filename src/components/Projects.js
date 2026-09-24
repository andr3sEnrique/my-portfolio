import React from "react";
import '../styles/projects.css';
import ArchitectureDiagram from './ArchitectureDiagram';
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
import irdStoreShot from '../img/projects/ird-store.png';
import irdAppShot from '../img/projects/ird-app.png';
import jobTrackerHome from '../img/projects/job-tracker-home.png';
import jobTrackerApplications from '../img/projects/job-tracker-candidatures.png';
import jobTrackerEmails from '../img/projects/job-tracker-mails.png';
import jobTrackerSettings from '../img/projects/job-tracker-settings.png';
import jobTrackerPoster from '../img/projects/job-tracker-poster.jpg';
import { useTranslation } from '../i18n/LanguageContext';
import { clickable, openInNewTab } from '../utils/clickable';

/* Each project card carries, when it exists:
     shots    one or more screenshots of the thing running (src/img/projects/),
              each { src, altKey, kind } — kind 'phone' is sized as a portrait
              screenshot rather than stretched to the column
     video    a file under public/media, played from a poster on demand
     diagram  drawn instead of a screenshot when the code is under NDA
     demo     a live URL
     repo     a repository URL, or the string 'private'
   A card with none of them still renders — it just loses its media column. */

const TECH = {
    nestjs: { name: 'NestJS', icon: nestjsIcon, url: 'https://nestjs.com/' },
    express: { name: 'Express', icon: expressIcon, url: 'https://expressjs.com/' },
    node: { name: 'Node.js', icon: nodejsIcon, url: 'https://nodejs.org/' },
    mysql: { name: 'MySQL', icon: mysqlIcon, url: 'https://www.mysql.com/' },
    redis: { name: 'Redis', icon: redisIcon, url: 'https://redis.io/' },
    typeorm: { name: 'TypeORM', icon: typeormIcon, url: 'https://typeorm.io/' },
    datadog: { name: 'Datadog', icon: datadogIcon, url: 'https://www.datadoghq.com/' },
    grafana: { name: 'Grafana', icon: grafanaIcon, url: 'https://grafana.com/' },
    python: { name: 'Python', icon: pythonIcon, url: 'https://www.python.org/' },
    flutter: { name: 'Flutter', icon: flutterIcon, url: 'https://flutter.dev/' },
    supabase: { name: 'Supabase', icon: supabaseIcon, url: 'https://supabase.com/' },
    react: { name: 'React', icon: reactIcon, url: 'https://react.dev/' },
    typescript: { name: 'TypeScript', icon: typescriptIcon, url: 'https://www.typescriptlang.org/' },
    spring: { name: 'Spring Boot', icon: springIcon, url: 'https://spring.io/' },
    java: { name: 'Java', icon: javaIcon, url: 'https://www.java.com/' }
};

// Professional first, then the two tutored projects: a recruiter reads the
// paid work before the school work.
const groups = [
    {
        titleKey: 'projects.groups.work',
        subtitleKey: 'projects.groups.workSubtitle',
        projects: [
            {
                key: 'aphilia',
                period: true,
                context: true,
                tasks: 7,
                repo: 'private',
                diagram: true,
                stack: ['Jest', 'Cypress', 'CI'],
                technologies: [TECH.nestjs, TECH.express, TECH.node, TECH.react, TECH.mysql, TECH.redis, TECH.typeorm, TECH.datadog]
            },
            {
                key: 'ird',
                period: true,
                tasks: 2,
                shots: [
                    { src: irdStoreShot, altKey: 'storeAlt' },
                    { src: irdAppShot, altKey: 'appAlt', kind: 'phone' }
                ],
                stack: ['Django'],
                technologies: [TECH.grafana, TECH.python, TECH.flutter]
            },
            {
                key: 'gabor',
                period: true,
                tasks: 2,
                repo: 'https://github.com/MaxRonce/GABOR45',
                stack: ['Ionic React', 'Nx monorepo', 'Capacitor'],
                technologies: [TECH.supabase, TECH.react, TECH.typescript]
            },
            {
                key: 'utez',
                period: true,
                tasks: 2,
                technologies: [TECH.spring, TECH.java, TECH.mysql]
            }
        ]
    },
    {
        titleKey: 'projects.groups.personal',
        subtitleKey: 'projects.groups.personalSubtitle',
        projects: [
            {
                key: 'jobtracker',
                context: true,
                tasks: 5,
                mediaLayout: 'wide',
                video: 'media/job-tracker.mp4',
                // A frame of the video itself, so the poster matches its aspect ratio.
                poster: jobTrackerPoster,
                shots: [
                    { src: jobTrackerHome, altKey: 'homeAlt' },
                    { src: jobTrackerApplications, altKey: 'applicationsAlt' },
                    { src: jobTrackerEmails, altKey: 'emailsAlt' },
                    { src: jobTrackerSettings, altKey: 'settingsAlt' }
                ],
                repo: 'https://github.com/andr3sEnrique/job-tracker',
                stack: ['Next.js 16', 'Prisma', 'PostgreSQL', 'Turborepo', 'Zod', 'Playwright'],
                technologies: [TECH.nestjs, TECH.react, TECH.typescript, TECH.node]
            }
        ]
    }
];

function ProjectCard({ project }) {
    const { t } = useTranslation();
    const shots = project.shots || [];
    const hasMedia = Boolean(shots.length || project.diagram || project.video);
    const mediaClass = hasMedia
        ? (project.mediaLayout === 'wide' ? ' has-wide-media' : ' has-media')
        : '';

    return (
        <article className="project-card">
            <div className="project-card-header">
                <h4 className="project-role">{t(`projects.${project.key}.role`)}</h4>
                {project.period && (
                    <span className="project-period">{t(`projects.${project.key}.period`)}</span>
                )}
            </div>
            <div className={`project-card-body${mediaClass}`}>
                {hasMedia && (
                    <div className="project-media">
                        {project.video && (
                            <figure className="project-video-figure">
                                {/* preload="none": the file is only fetched once
                                    someone presses play, so the page stays light. */}
                                <video
                                    className="project-video"
                                    controls
                                    preload="none"
                                    playsInline
                                    poster={project.poster}
                                >
                                    <source src={`${process.env.PUBLIC_URL}/${project.video}`} type="video/mp4" />
                                </video>
                                <figcaption className="project-video-caption">
                                    {t(`projects.${project.key}.videoCaption`)}
                                </figcaption>
                            </figure>
                        )}
                        {project.diagram && <ArchitectureDiagram />}
                        {shots.length > 0 && (
                            <div className={`project-gallery${shots.length > 1 ? ' project-gallery-grid' : ''}`}>
                                {shots.map((shot) => (
                                    <img
                                        key={shot.altKey}
                                        src={shot.src}
                                        alt={t(`projects.${project.key}.${shot.altKey}`)}
                                        className={`project-shot project-shot-${shot.kind || 'wide'}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                )}
                <div className="project-content">
                    <h5 className="project-company">{t(`projects.${project.key}.company`)}</h5>
                    {project.context && (
                        <p className="project-context">{t(`projects.${project.key}.context`)}</p>
                    )}
                    <ul className="project-tasks">
                        {Array.from({ length: project.tasks }, (_, i) => (
                            <li className="project-task" key={i}>{t(`projects.${project.key}.task${i + 1}`)}</li>
                        ))}
                    </ul>
                    <div className="project-links">
                        {project.demo && (
                            <a className="project-badge project-badge-demo" href={project.demo} target="_blank" rel="noopener noreferrer">
                                ↗ {t('projects.viewDemo')}
                            </a>
                        )}
                        {project.repo && project.repo !== 'private' && (
                            <a className="project-badge project-badge-repo" href={project.repo} target="_blank" rel="noopener noreferrer">
                                {t('projects.viewCode')}
                            </a>
                        )}
                        {project.repo === 'private' && (
                            <span className="project-badge project-badge-private" title={t('projects.privateRepoWhy')}>
                                🔒 {t('projects.privateRepo')}
                            </span>
                        )}
                    </div>
                </div>
            </div>
            <div className="project-card-footer">
                <span className="project-stack-label">{t('projects.technologiesUsed')}</span>
                <div className="project-stack">
                    {project.technologies.map((technology) => (
                        <img
                            key={technology.name}
                            src={technology.icon}
                            alt={`${technology.name} icon`}
                            title={technology.name}
                            className="img-technologies"
                            {...clickable(openInNewTab(technology.url), technology.name)}
                        />
                    ))}
                    {(project.stack || []).map((name) => (
                        <span className="stack-pill" key={name}>{name}</span>
                    ))}
                </div>
            </div>
        </article>
    );
}

// Its own route rather than a block inside About: it is the section a recruiter
// comes for, so it gets a place in the navbar instead of a scroll.
function Projects () {
    const { t } = useTranslation();
    return(
        <div className="projects-page">
            <div className="container-xxl">
                <h1 className="text-center titleProjet">{t('projects.title')}</h1>
                <p className="projects-intro prose">{t('projects.intro')}</p>
                {groups.map((group) => (
                    <div className="project-group" key={group.titleKey}>
                        <h2 className="project-group-title">{t(group.titleKey)}</h2>
                        <p className="project-group-subtitle">{t(group.subtitleKey)}</p>
                        {group.projects.map((project) => (
                            <ProjectCard project={project} key={project.key} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;
