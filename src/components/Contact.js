import React, {useRef} from "react";
import '../styles/contact.css';
import arroba from '../img/arroba.png';
import telefono from '../img/llamada.png';
import ubicacion from '../img/marcador.png';
import instagram from '../img/instagram.png';
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import emailjs from 'emailjs-com';
import { useTranslation } from '../i18n/LanguageContext';
import { clickable, openInNewTab } from '../utils/clickable';

// French visitors get the French CV, everyone else the English one.
// Filenames match the files in /public.
const CV_BY_LANGUAGE = {
    fr: { file: 'CV-adres-fr.pdf', downloadAs: 'CV_Andres_Ortiz_FR.pdf' },
    en: { file: 'CV-andres-en.pdf', downloadAs: 'CV_Andres_Ortiz_EN.pdf' },
    es: { file: 'CV-andres-en.pdf', downloadAs: 'CV_Andres_Ortiz_EN.pdf' }
};

function Contact () {
    const form = useRef();
    const { t, language } = useTranslation();
    const cv = CV_BY_LANGUAGE[language] || CV_BY_LANGUAGE.en;
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tm7jyq7', 'template_c2z30di', form.current, 'AKtVQzWcPvbyu3Z-l')
            .then((result) => {
                console.log(result.text);
                alert(t('contact.success'));
            }, (error) => {
                console.log(error.text);
                alert(t('contact.error'));
            });
    };
    return(
        <div className="container-xxl ps-5 pe-5 pb-5 mb-5">
            <h1 className="text-center mt-5 title-contact mb-5">{t('contact.title')}</h1>
            <div className="contact-container">
                <div className="content-contact">
                    <p className="contact-text pe-4">{t('contact.text')}</p>
                    <div className="d-flex flex-column justify-content-start align-items-start mb-4">
                        <div className="d-flex flex-row mt-4 align-items-center">
                            <img src={telefono} alt="Telefono icon" className="contact-icons me-2" />
                            <span className="contact-text info">+33 749481159</span>
                        </div>
                        <div className="d-flex flex-row mt-4 align-items-center">
                            <img src={arroba} alt="mail icon" className="contact-icons me-2" />
                            <span className="contact-text info">enrique.ortizsc@gmail.com</span>
                        </div>
                        <div className="d-flex flex-row mt-4 align-items-center">
                            <img src={ubicacion} alt="ubicacion icon" className="contact-icons me-2"/>
                            <span className="contact-text info">Île-de-France</span>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-around">
                        <img src={instagram} alt="instagram logo" className="contact-icons social-icons" {...clickable(openInNewTab('https://www.instagram.com/enrique_ortizsc/'), 'Instagram')}/>
                        <img src={github} alt="github logo" className="contact-icons social-icons" {...clickable(openInNewTab('https://github.com/andr3sEnrique'), 'Github')}/>
                        <img src={linkedin} alt="linkedin logo" className="contact-icons social-icons" {...clickable(openInNewTab('https://www.linkedin.com/in/enrique-ortizsc/'), 'Linkedin')}/>
                        <a href={`${process.env.PUBLIC_URL}/${cv.file}`} download={cv.downloadAs} className="download-btn">
                        {t('contact.downloadCv')}
                        </a>
                    </div>
                </div>
                <div className="content-contact content-form">
                    <form ref={form} onSubmit={sendEmail} className="row g-3 needs-validation" noValidate>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label contact-text">{t('contact.nameLabel')}</label>
                            <input type="text" className="form-control" id="name" name="name" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label contact-text">{t('contact.emailLabel')}</label>
                            <input type="email" className="form-control" id="email" name="email" required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label contact-text" htmlFor="message">{t('contact.messageLabel')}</label>
                            <input type="text" className="form-control" id="message" name="message" required/>
                        </div>
                        <button type="submit" className="download-btn submit-btn">{t('contact.submit')}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
