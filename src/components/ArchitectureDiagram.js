import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import '../styles/architecture.css';

// Stands in for the screenshot the Aphilia card cannot have: the client owns the
// code, so the card shows the shape of the system instead. Every box here maps
// to one of the bullet points on that card — nothing else is claimed.
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

                {/* Who calls the services */}
                <rect x="92" y="14" width="176" height="38" rx="8" className="arch-box arch-box-muted" />
                <text x="180" y="38" className="arch-label">{t('projects.diagram.clients')}</text>
                <line x1="180" y1="52" x2="180" y2="74" className="arch-link" markerEnd="url(#arch-arrow)" />

                {/* The API layer I build */}
                <rect x="64" y="76" width="232" height="68" rx="8" className="arch-box arch-box-api" />
                <text x="180" y="98" className="arch-label arch-label-strong">{t('projects.diagram.api')}</text>
                <text x="180" y="116" className="arch-sublabel">{t('projects.diagram.apiDetail')}</text>
                <text x="180" y="133" className="arch-sublabel">NestJS · Express · Node.js</text>

                <line x1="120" y1="144" x2="120" y2="176" className="arch-link" markerEnd="url(#arch-arrow)" />
                <line x1="280" y1="144" x2="280" y2="176" className="arch-link" markerEnd="url(#arch-arrow)" />

                {/* What it calls in turn */}
                <rect x="8" y="178" width="216" height="56" rx="8" className="arch-box arch-box-ai" />
                <text x="116" y="201" className="arch-label arch-label-strong">{t('projects.diagram.agents')}</text>
                <text x="116" y="221" className="arch-sublabel">{t('projects.diagram.agentsDetail')}</text>

                <rect x="236" y="178" width="104" height="56" rx="8" className="arch-box arch-box-data" />
                <text x="288" y="201" className="arch-label arch-label-strong">{t('projects.diagram.data')}</text>
                <text x="288" y="221" className="arch-sublabel">MySQL · Redis</text>

                {/* Observability runs alongside, not in the request path */}
                <rect x="8" y="252" width="332" height="34" rx="8" className="arch-box arch-box-obs" />
                <text x="174" y="274" className="arch-label">Datadog — {t('projects.diagram.observability')}</text>
                <path
                    d="M296,110 H350 V269 H346"
                    className="arch-link arch-link-dashed"
                    markerEnd="url(#arch-arrow)"
                />
            </svg>
            <figcaption className="architecture-caption">{t('projects.diagram.caption')}</figcaption>
        </figure>
    );
}

export default ArchitectureDiagram;
