import { useCallback } from 'react';
import { renderRich, useTranslation } from './LanguageContext';
import { useProfile } from './ProfileContext';

/* Content that reads differently per profile lives under `profiles.<profile>.`
   in the locale files; everything else stays where it is. `tp` looks in the
   profile first and falls back to the shared key, so only the strings that
   really differ need a second copy. */
export function useContent() {
    const { t } = useTranslation();
    const { profile } = useProfile();

    const tp = useCallback((key) => {
        const scopedKey = `profiles.${profile}.${key}`;
        const value = t(scopedKey);
        // t() hands back the key itself when the lookup misses.
        return value === scopedKey ? t(key) : value;
    }, [t, profile]);

    const rtp = useCallback(
        (key, className = 'key-words') => renderRich(tp(key), className),
        [tp]
    );

    return { t, tp, rtp, profile };
}
