import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { truncateText, toggleFavorite, checkIfFavorite } from './Functions.jsx';

const MovieCard = ({ movie }) => {
    const { title, poster_path, overview } = movie;
    const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
    const [isHovered, setIsHovered] = useState(false);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const getMovieDetails = async () => {
            setIsFavorite(checkIfFavorite(movie));
        };
        getMovieDetails();
    });

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="movie-card">
        <div 
            className="movie-card-poster"
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <img src={imageUrl} alt={title} />
            {isHovered && (
            <div className="movie-card-hover">
                <p>{truncateText(overview, 25)}</p>
                <button className='favorite-btn' onClick={(e) => { e.preventDefault(); toggleFavorite(movie); }}>
                    {isFavorite ? 'Unfavorite' : 'Favorite'}
                </button>
            </div>
            )}
        </div>
        <h3 className='card-title'>{title}</h3>
        </div>
    );
};

export default MovieCard;