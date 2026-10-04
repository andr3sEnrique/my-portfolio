import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { PROFILES, useProfile } from '../i18n/ProfileContext';
import { useTranslation } from '../i18n/LanguageContext';
import '../styles/profileSwitcher.css';

function ProfileSwitcher() {
    const { profile, setProfile } = useProfile();
    const { t } = useTranslation();

    return (
        <NavDropdown
            align="end"
            className="profile-switcher text-google"
            title={<span className="profile-title">👤 {t(`profiles.${profile}.short`)}</span>}
            id="profile-switcher"
            aria-label={t('profiles.switcherLabel')}
        >
            <NavDropdown.Header>{t('profiles.switcherLabel')}</NavDropdown.Header>
            {PROFILES.map((code) => (
                <NavDropdown.Item
                    key={code}
                    active={code === profile}
                    onClick={() => setProfile(code)}
                >
                    {t(`profiles.${code}.name`)}
                </NavDropdown.Item>
            ))}
        </NavDropdown>
    );
}

export default ProfileSwitcher;
