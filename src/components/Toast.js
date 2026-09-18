import React, { useEffect } from "react";
import { useTranslation } from '../i18n/LanguageContext';
import '../styles/toast.css';

const ICONS = { success: '✓', error: '✕' };

/**
 * Floating confirmation that replaces window.alert(). It announces itself to
 * screen readers and disappears on its own after `duration`, while staying
 * dismissible by mouse and keyboard.
 */
function Toast ({ variant = 'success', message, onClose, duration = 6000 }) {
    const { t } = useTranslation();

    useEffect(() => {
        if (!duration) return undefined;
        const timeoutId = setTimeout(onClose, duration);
        return () => clearTimeout(timeoutId);
    }, [duration, onClose]);

    return (
        <div className={`toast-card toast-${variant}`} role="status" aria-live="polite">
            <span className="toast-icon" aria-hidden="true">{ICONS[variant]}</span>
            <p className="toast-message">{message}</p>
            <button type="button" className="toast-close" onClick={onClose} aria-label={t('common.close')}>
                ×
            </button>
        </div>
    );
}

export default Toast;
