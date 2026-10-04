import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

/* Two readings of the same career. The CVs differ the same way: identical
   facts, framed for the job being applied to. A visitor picks one; the choice
   is remembered, and each CV can link straight to its own version with
   ?perfil=appsec (or ?profile=appsec). */
export const PROFILES = ['appsec', 'dev'];

const STORAGE_KEY = 'portfolio-profile';

// The active job search. Change this line to flip which profile a bare link
// to the site opens on.
const DEFAULT_PROFILE = 'appsec';

const fromQuery = () => {
    try {
        const params = new URLSearchParams(window.location.search);
        const asked = (params.get('perfil') || params.get('profile') || '').toLowerCase();
        return PROFILES.includes(asked) ? asked : null;
    } catch (error) {
        return null;
    }
};

const getInitialProfile = () => {
    const asked = fromQuery();
    if (asked) return asked;
    try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored && PROFILES.includes(stored)) return stored;
    } catch (error) {
        // localStorage can be unavailable (private mode, blocked cookies)
    }
    return DEFAULT_PROFILE;
};

const ProfileContext = createContext(null);

export function ProfileProvider({ children }) {
    const [profile, setProfileState] = useState(getInitialProfile);

    const setProfile = useCallback((next) => {
        if (!PROFILES.includes(next)) return;
        setProfileState(next);
        try {
            window.localStorage.setItem(STORAGE_KEY, next);
        } catch (error) {
            // ignore: the choice still applies for this session
        }
    }, []);

    // A ?perfil= link wins over what the visitor picked last time, and is
    // remembered — so the link printed in a CV keeps the right version across a
    // reload or a jump straight to /projects.
    useEffect(() => {
        const asked = fromQuery();
        if (asked) setProfile(asked);
    }, [setProfile]);

    const value = useMemo(() => ({ profile, setProfile }), [profile, setProfile]);

    return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
}

export function useProfile() {
    const context = useContext(ProfileContext);
    if (!context) {
        throw new Error('useProfile must be used inside a ProfileProvider');
    }
    return context;
}
