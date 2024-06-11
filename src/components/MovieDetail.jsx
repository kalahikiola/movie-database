import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api';

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const getMovieDetails = async () => {
        const movieDetails = await fetchMovieDetails(id);
        setMovie(movieDetails);
        setLoading(false);
        checkIfFavorite(movieDetails);
        };
        getMovieDetails();
    }, [id]);

    const checkIfFavorite = (movie) => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const isAlreadyFavorite = savedFavorites.some(fav => fav.id === movie.id);
        setIsFavorite(isAlreadyFavorite);
    };

    const toggleFavorite = (movie) => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const isAlreadyFavorite = savedFavorites.some(fav => fav.id === movie.id);

        if (isAlreadyFavorite) {
        const updatedFavorites = savedFavorites.filter(fav => fav.id !== movie.id);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setIsFavorite(false);
        } else {
        savedFavorites.push(movie);
        localStorage.setItem('favorites', JSON.stringify(savedFavorites));
        setIsFavorite(true);
        }
    };

    if (loading) return <p>Loading...</p>;

    if (!movie) return <p>Movie not found</p>;

    const { title, release_date, vote_average, overview, poster_path } = movie;
    const imageUrl = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : '/placeholder.jpg'; // Add a path to your placeholder image

    return (
        <div className="movie-detail">
        <img src={imageUrl} alt={title} />
        <h1>{title}</h1>
        <p>Release Date: {release_date}</p>
        <p>Rating: {vote_average * 10}%</p>
        <p>{overview}</p>
        <button onClick={() => toggleFavorite(movie)}>
            {isFavorite ? 'Unfavorite' : 'Favorite'}
        </button>
        </div>
    );
};

export default MovieDetail;
