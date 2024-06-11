import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {

    const toggleFavorite = (movie) => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const isAlreadyFavorite = savedFavorites.some(fav => fav.id === movie.id);

        if (isAlreadyFavorite) {
        const updatedFavorites = savedFavorites.filter(fav => fav.id !== movie.id);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        } else {
        savedFavorites.push(movie);
        localStorage.setItem('favorites', JSON.stringify(savedFavorites));
        }
    };

    return (
        <div className="movie-list">
        {movies.map(movie => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
            <MovieCard movie={movie} onFavoriteToggle={toggleFavorite} />
            </Link>
        ))}
        </div>
    );
};

export default MovieList;
