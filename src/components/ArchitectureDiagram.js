import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import '../styles/architecture.css';

// Stands in for the screenshot the Aphilia card cannot have: the client owns the
// code, so the card shows the shape of the system instead. Every box here maps
// to something the bullet points next to it state — nothing else is claimed.
function ArchitectureDiagram() {
    const { t } = useTranslation();

    return (
        <figure className="architecture">
            <svg
                viewBox="0 0 360 300"
                className="architecture-svg"
                role="img"
                aria-label={t('projects.diagram.alt')}
            >
                <defs>
                    <marker id="arch-arrow" markerWidth="8" markerHeight="7" refX="7" refY="3" orient="auto">
                        <path d="M0,0 L7,3 L0,6 z" fill="#b9aca3" />
                    </marker>
                </defs>

                {/* Who talks to the platform */}
                <rect x="34" y="10" width="156" height="40" rx="8" className="arch-box arch-box-muted" />
                <text x="112" y="35" className="arch-label">{t('projects.diagram.backoffice')}</text>

                <rect x="204" y="10" width="140" height="40" rx="8" className="arch-box arch-box-muted" />
                <text x="274" y="35" className="arch-label">{t('projects.diagram.terminals')}</text>

                <line x1="112" y1="50" x2="112" y2="72" className="arch-link" markerEnd="url(#arch-arrow)" />
                <line x1="274" y1="50" x2="274" y2="72" className="arch-link" markerEnd="url(#arch-arrow)" />

                {/* The API layer I build */}
                <rect x="52" y="74" width="256" height="66" rx="8" className="arch-box arch-box-api" />
                <text x="180" y="95" className="arch-label arch-label-strong">{t('projects.diagram.api')}</text>
                <text x="180" y="113" className="arch-sublabel">{t('projects.diagram.apiDetail')}</text>
                <text x="180" y="131" className="arch-sublabel">NestJS · Express · Node.js</text>

                <line x1="112" y1="140" x2="112" y2="172" className="arch-link" markerEnd="url(#arch-arrow)" />
                <line x1="288" y1="140" x2="288" y2="172" className="arch-link" markerEnd="url(#arch-arrow)" />

                {/* What it drives, and what it reads and writes */}
                <rect x="8" y="174" width="208" height="58" rx="8" className="arch-box arch-box-ai" />
                <text x="112" y="196" className="arch-label arch-label-strong">{t('projects.diagram.agents')}</text>
                <text x="112" y="216" className="arch-sublabel">{t('projects.diagram.agentsDetail')}</text>

                <rect x="224" y="174" width="128" height="58" rx="8" className="arch-box arch-box-data" />
                <text x="288" y="196" className="arch-label arch-label-strong">{t('projects.diagram.data')}</text>
                <text x="288" y="216" className="arch-sublabel">MySQL · Redis</text>

                {/* Observability runs alongside, not in the request path */}
                <rect x="8" y="248" width="316" height="34" rx="8" className="arch-box arch-box-obs" />
                <text x="166" y="270" className="arch-label arch-label-band">Datadog — {t('projects.diagram.observability')}</text>
                <path
                    d="M308,107 H342 V265 H326"
                    className="arch-link arch-link-dashed"
                    markerEnd="url(#arch-arrow)"
                />
            </svg>
            <figcaption className="architecture-caption">{t('projects.diagram.caption')}</figcaption>
        </figure>
    );
}

export default ArchitectureDiagram;
