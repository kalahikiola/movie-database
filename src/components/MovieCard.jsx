import React from 'react';

const MovieCard = ({ movie }) => {
    const { title, poster_path } = movie;
    const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

    return (
        <div className="movie-card">
        <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
        </div>
    );
};

export default MovieCard;
