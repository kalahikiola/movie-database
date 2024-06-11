import React from 'react';
import tmdbLogo from '../assets/tmdb_logo.svg';

const About = () => {
    return (
        <div className="about">
        <h1>About Us</h1>
        <p className='about-description'>This is a movie database application built with Vite, React, and JavaScript for the BCIT FWD program. Created by Aaron Bence</p>
        <div className="tmdb-attribution">
            <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
            <img src={tmdbLogo} alt="TMDb Logo" className="tmdb-logo" />
        </div>
        </div>
    );
};

export default About;
