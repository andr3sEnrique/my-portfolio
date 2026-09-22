import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';

// Technology names are the same in every language, so they stay here rather
// than in the locale files; everything else comes from home.snippet.*.
const STACK = ['TypeScript', 'Node.js', 'NestJS', 'React'];

// The hero visual: a editor-style card holding the same facts the bio states,
// written as the object a reader of this site would expect. It replaces the
// decorative image so the first screen says what the site is about.
function CodeCard() {
    const { t } = useTranslation();
    // t() falls back to the key itself when a translation is missing, so a
    // list is only ever rendered when it really came back as one.
    const focus = t('home.snippet.focus');
    const list = (values) => (Array.isArray(values) ? values : [])
        .map((value) => `'${value}'`)
        .join(', ');

    return (
        <div className="code-card" aria-hidden="true">
            <div className="code-card-bar">
                <span className="code-dot code-dot-red"></span>
                <span className="code-dot code-dot-amber"></span>
                <span className="code-dot code-dot-green"></span>
                <span className="code-card-file">enrique.ts</span>
            </div>
            <pre className="code-card-body"><code>
                <span className="tok-kw">const</span> <span className="tok-var">enrique</span> = {'{'}{'\n'}
                {'  '}<span className="tok-key">role</span>: <span className="tok-str">'{t('home.snippet.role')}'</span>,{'\n'}
                {'  '}<span className="tok-key">stack</span>: [<span className="tok-str">{list(STACK)}</span>],{'\n'}
                {'  '}<span className="tok-key">focus</span>: [<span className="tok-str">{list(focus)}</span>],{'\n'}
                {'  '}<span className="tok-key">based</span>: <span className="tok-str">'{t('home.snippet.based')}'</span>,{'\n'}
                {'}'};{'\n'}
                {'\n'}
                <span className="tok-com">{'// '}{t('home.snippet.comment')}</span>
            </code></pre>
        </div>
    );
}

export default CodeCard;
