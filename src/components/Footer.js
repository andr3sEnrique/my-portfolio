import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import '../styles/footer.css'

function Footer (){
    const { t } = useTranslation();
    return (
        <footer className='site-footer'>
            <p className='name text-footer'>{t('footer.text')}</p>
        </footer>
    )
}

export default Footer;
