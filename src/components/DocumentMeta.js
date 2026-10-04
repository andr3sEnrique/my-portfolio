import { useEffect } from 'react';
import { useContent } from '../i18n/useContent';

// The tab title and the meta description follow both the language and the
// profile, so a shared link reads as whichever role the visitor is looking at.
// Renders nothing; it only has a side effect on <head>.
function DocumentMeta() {
    const { tp, profile } = useContent();
    const title = tp('meta.documentTitle');
    const description = tp('meta.documentDescription');

    useEffect(() => {
        document.title = title;
        const tag = document.querySelector('meta[name="description"]');
        if (tag) tag.setAttribute('content', description);
        document.documentElement.dataset.profile = profile;
    }, [title, description, profile]);

    return null;
}

export default DocumentMeta;
