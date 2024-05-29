import React from 'react';
import '../styles/loader.css';

const Loader = ({ image }) => {
    return (
        <div className="loader-container">
            <div className="loader">
                <img src={image} alt="Loading..." className="loader-image" />
            </div>
        </div>
    )
}

export default Loader;
