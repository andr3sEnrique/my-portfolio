import { useEffect, useState } from 'react';

// Each section remembers whether its loader has already played in this tab.
const STORAGE_PREFIX = 'portfolio-seen:';
const seenInMemory = new Set();

const hasSeen = (key) => {
    if (seenInMemory.has(key)) return true;
    try {
        return window.sessionStorage.getItem(STORAGE_PREFIX + key) === '1';
    } catch (error) {
        return false; // private mode: the in-memory set still covers this tab
    }
};

const markSeen = (key) => {
    seenInMemory.add(key);
    try {
        window.sessionStorage.setItem(STORAGE_PREFIX + key, '1');
    } catch (error) {
        // ignore: sessionStorage is optional here
    }
};

/**
 * Plays a section's loader the first time that section is opened in this tab, then
 * skips it on every later visit, so moving back and forth between pages is instant.
 * Each section passes its own key, so the quetzal and the weight plate each get
 * their one appearance.
 */
export function useFirstVisitLoader(key, durationMs) {
    const [isLoading, setIsLoading] = useState(() => !hasSeen(key));

    useEffect(() => {
        if (!isLoading) return undefined;
        // Marked straight away so navigating away mid-animation still counts as seen.
        markSeen(key);
        const timeoutId = setTimeout(() => setIsLoading(false), durationMs);
        return () => clearTimeout(timeoutId);
    }, [isLoading, key, durationMs]);

    return isLoading;
}
