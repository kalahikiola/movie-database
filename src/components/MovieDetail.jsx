import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api';
import { checkIfFavorite, toggleFavorite } from './Functions.jsx';

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
            setIsFavorite(checkIfFavorite(movieDetails));
        };
        getMovieDetails();
    }, [id]);

    if (loading) return <p>Loading...</p>;

    if (!movie) return <p>Movie not found</p>;

    const { title, release_date, vote_average, overview, poster_path } = movie;
    const imageUrl = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : '/placeholder.jpg'; // Add a path to your placeholder image

    return (
        <div className="movie-detail">
            <img src={imageUrl} alt={title} />
            <div className='text-detail'>
                <h1>{title}</h1>
                <p>Release Date: {release_date}</p>
                <p>Rating: {vote_average * 10}%</p>
                <p>{overview}</p>
                <button className='favorite-btn' onClick={() => { toggleFavorite(movie); setIsFavorite(checkIfFavorite(movie)); }}>
                    {isFavorite ? 'Unfavorite' : 'Favorite'}
                </button>
            </div>
        </div>
    );
};

export default MovieDetail;