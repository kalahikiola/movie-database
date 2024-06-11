export const toggleFavorite = (movie) => {
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
  
export const checkIfFavorite = (movie) => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return savedFavorites.some(fav => fav.id === movie.id);
};
  
export const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
};
  