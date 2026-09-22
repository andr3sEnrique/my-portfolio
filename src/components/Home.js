import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageContext';
import CodeCard from './CodeCard';
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
        <div className='hero-section'>
            <div className='container-xxl'>
                <div className='hero'>
                    <div className='hero-text'>
                        <h1 className='text-google'>{t('home.greeting')} <span className='name'>{t('home.name')}</span> <span className='wave-emoji'>👋🏽</span></h1>
                        <p className='text-google introduction mt-4'>{text}</p>
                        <div className='hero-actions'>
                            <Link to="/projects" className='hero-btn hero-btn-primary'>{t('home.seeProjects')}</Link>
                            <Link to="/about" className='hero-btn hero-btn-ghost'>{t('home.aboutMe')}</Link>
                        </div>
                    </div>
                    <div className='hero-visual'>
                        <CodeCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
