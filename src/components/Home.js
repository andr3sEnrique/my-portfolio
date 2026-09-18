import React, {useState, useEffect} from 'react';
import imgHome from '../img/imgHome.jpg';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageContext';
import '../styles/home.css'
function Home() {
    const { t } = useTranslation();
    const fullText = t('home.intro');
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);

    // Restart the typing animation whenever the language changes.
    useEffect(() => {
        setText('');
        setIndex(0);
    }, [fullText]);

    useEffect(() => {
        if (index < fullText.length){
            const timeOutId = setTimeout(() => {
                setText(fullText.slice(0, index + 1));
                setIndex(index + 1);
            }, 40);
            return () => clearTimeout(timeOutId);
        }
    }, [text, index, fullText]);

    return (
        <div className='p-5'>
            <div className='container-xxl'>
                    <h1 className='text-google mt-5'>{t('home.greeting')} <span className='name'>{t('home.name')}</span> <span className='wave-emoji'>👋🏽</span></h1>
                    <p className='text-google introduction mt-4'>{text}</p>
                <div className='d-flex justify-content-center mt-5 align-items-center'>
                    <h2>{t('home.showMore')} <Link to="/about" className='reference-a'>{t('home.aboutMeLink')}</Link></h2>
                    <img className='img-home' src={imgHome} alt='Anime Software' />
                </div>

                
            </div>
                
        </div>
    )
}

export default Home;
