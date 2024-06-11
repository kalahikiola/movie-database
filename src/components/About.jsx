import React from 'react';
import tmdbLogo from '../assets/tmdb_logo.svg'; // Add the TMDb logo to your assets

const About = () => {
    return (
        <div className="about">
        <h1>About Us</h1>
        <p>This is a movie database application built with Vite, React, and JavaScript. It allows users to browse popular, top-rated, now playing, and upcoming movies, view detailed information about each movie, and save their favorite movies.</p>
        <div className="tmdb-attribution">
            <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
            <img src={tmdbLogo} alt="TMDb Logo" className="tmdb-logo" />
        </div>
        </div>
    );
};

export default About;
