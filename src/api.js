import axios from 'axios';

const API_KEY = '1d4317f6a5b965e7c34c00ba4d1bdfda';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (category) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${category}?api_key=${API_KEY}`);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching movies:', error);
        return [];
    }
};

export const fetchMovieDetails = async (movieId) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return null;
    }
};
