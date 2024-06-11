import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { truncateText, toggleFavorite } from './Functions.jsx';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(savedFavorites);
    }, []);

    if (favorites.length === 0) {
        return (
        <div className="favorites">
            <h1>Your Favorites</h1>
            <p>Sorry, you have no favorited movies. Return to the home page to add a favorite movie.</p>
        </div>
        );
    }

    return (
        <div className="favorites">
        <h1>Your Favorites</h1>
        <div className="movie-list">
            {favorites.map(movie => (
            <div className="movie-card" key={movie.id}>
                <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/placeholder.jpg'} alt={movie.title} />
                <div className='movie-card-text'>
                    <h3>{movie.title}</h3>
                    <p>Release Date: {movie.release_date}</p>
                    <p>Rating: {movie.vote_average * 10}%</p>
                    <p>{truncateText(movie.overview, 25)}</p>
                    <Link className='more-info' to={`/movie/${movie.id}`}>More Info</Link>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
};

export default Favorites;
