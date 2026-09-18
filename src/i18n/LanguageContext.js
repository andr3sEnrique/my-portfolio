import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import en from './locales/en.json';
import fr from './locales/fr.json';
import es from './locales/es.json';

const translations = { en, fr, es };

export const LANGUAGES = [
    { code: 'en', flag: '🇬🇧' },
    { code: 'fr', flag: '🇫🇷' },
    { code: 'es', flag: '🇲🇽' }
];

const STORAGE_KEY = 'portfolio-language';
const DEFAULT_LANGUAGE = 'en';

const getInitialLanguage = () => {
    try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored && translations[stored]) return stored;
    } catch (error) {
        // localStorage can be unavailable (private mode, blocked cookies)
    }
    const browserLanguage = (navigator.language || '').slice(0, 2).toLowerCase();
    return translations[browserLanguage] ? browserLanguage : DEFAULT_LANGUAGE;
};

// Walks a dotted key ("about.game.title") through the translation object.
const resolve = (dictionary, key) =>
    key.split('.').reduce((value, part) => (value == null ? undefined : value[part]), dictionary);

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
    const [language, setLanguageState] = useState(getInitialLanguage);

    const setLanguage = useCallback((code) => {
        if (!translations[code]) return;
        setLanguageState(code);
        try {
            window.localStorage.setItem(STORAGE_KEY, code);
        } catch (error) {
            // ignore: the language still applies for this session
        }
    }, []);

    const t = useCallback((key) => {
        const value = resolve(translations[language], key);
        if (value !== undefined) return value;
        const fallback = resolve(translations[DEFAULT_LANGUAGE], key);
        return fallback !== undefined ? fallback : key;
    }, [language]);

    useEffect(() => {
        document.documentElement.lang = language;
        document.title = t('meta.documentTitle');
        const description = document.querySelector('meta[name="description"]');
        if (description) description.setAttribute('content', t('meta.documentDescription'));
    }, [language, t]);

    const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useTranslation() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useTranslation must be used inside a LanguageProvider');
    }
    return context;
}

// Renders a translation where *emphasised words* become highlighted spans.
export function useRichTranslation() {
    const { t } = useTranslation();
    return useCallback((key, className = 'key-words') => {
        const text = t(key);
        if (typeof text !== 'string') return text;
        return text.split(/\*([^*]+)\*/g).map((part, index) =>
            index % 2 === 1
                ? <span key={index} className={className}>{part}</span>
                : <React.Fragment key={index}>{part}</React.Fragment>
        );
    }, [t]);
}
