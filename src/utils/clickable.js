// Images and spans are not focusable and ignore Enter/Space. Spreading these props
// turns one into a real button for keyboard and screen-reader users.
export const clickable = (onActivate, label) => ({
    role: 'button',
    tabIndex: 0,
    'aria-label': label,
    onClick: onActivate,
    onKeyDown: (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onActivate();
        }
    }
});

// Opens a URL in a new tab, without handing it a reference to this window.
export const openInNewTab = (url) => () => window.open(url, '_blank', 'noopener,noreferrer');
