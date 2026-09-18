import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LANGUAGES, useTranslation } from '../i18n/LanguageContext';
import '../styles/languageSwitcher.css';

function LanguageSwitcher() {
    const { language, setLanguage, t } = useTranslation();
    const current = LANGUAGES.find((item) => item.code === language) || LANGUAGES[0];

    return (
        <NavDropdown
            align="end"
            className="language-switcher text-google"
            title={<span className="language-title">{current.flag} {current.code.toUpperCase()}</span>}
            id="language-switcher"
            aria-label={t('language.label')}
        >
            {LANGUAGES.map(({ code, flag }) => (
                <NavDropdown.Item
                    key={code}
                    active={code === language}
                    onClick={() => setLanguage(code)}
                >
                    {flag} {t(`language.${code}`)}
                </NavDropdown.Item>
            ))}
        </NavDropdown>
    );
}

export default LanguageSwitcher;
