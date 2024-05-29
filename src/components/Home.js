import React from 'react';
import imgHome from '../img/imgHome.jpg';
import { Link } from 'react-router-dom';
import '../styles/home.css'
function Home() {
    return (
        <div className='p-5'>
            <div className='container-xxl'>
                    <h1 className='text-google mt-5'>Hey, I'm <span className='name'>Enrique</span> <span className='wave-emoji'>👋🏽</span></h1>
                    <p className='text-google introduction mt-4'>I am a Mexican student developer at the IUT in Orléans. I have done different projects using a variety of technologies and tools.</p>
                <div className='d-flex justify-content-center mt-5 align-items-center'>
                    <h2>Let me show you more <Link to="/about" className='reference-a'>about me</Link></h2>
                    <img className='img-home' src={imgHome} alt='Anime Software' />
                </div>

                
            </div>
                
        </div>
    )
}

export default Home;