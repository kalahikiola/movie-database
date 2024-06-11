import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import MovieDetail from './components/MovieDetail';
import Favorites from './components/Favorites';
import './App.css';

function App() {
    return (
        <Router>
            <header className="app-header">
                <Link to="/" className="app-title">Movie Bee</Link>
                <nav className="app-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/movie/:id" element={<MovieDetail />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;