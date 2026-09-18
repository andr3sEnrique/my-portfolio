import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import '../styles/footer.css'
function Footer (){
    const { t } = useTranslation();
    return (
        <h2 className='name fixed-footer text-footer'>{t('footer.text')}</h2>
    )
}

export default Footer;
