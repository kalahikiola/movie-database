import React, { useEffect, useState } from 'react';
import MovieList from './MovieList';
import { fetchMovies } from '../api';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [category, setCategory] = useState('popular');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMovies = async () => {
        setLoading(true);
        const movies = await fetchMovies(category);
        setMovies(movies);
        setLoading(false);
        };
        getMovies();
    }, [category]);

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <div className="home">
        <h1>Welcome to the Movie Database</h1>
        <div className="category-select">
            <label htmlFor="category">Select Category: </label>
            <select id="category" value={category} onChange={handleCategoryChange}>
            <option value="popular">Popular</option>
            <option value="top_rated">Top Rated</option>
            <option value="now_playing">Now Playing</option>
            <option value="upcoming">Upcoming</option>
            </select>
        </div>
        {loading ? <p>Loading...</p> : <MovieList movies={movies} />}
        </div>
    );
};

export default Home;
