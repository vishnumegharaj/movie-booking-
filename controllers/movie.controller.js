const Movie = require('../models/movie.model');

async function getMovies(req, res) {
    try {
        let query = {};
        if (req.query.status) {
            if (req.query.status === 'PUBLISHED') {
                query.published = true;
            } else if (req.query.status === 'RELEASED') {
                query.released = true;
            }
        }
        const movies = await Movie.find(query);
        res.send(movies);
    } catch (error) {
        console.error('Error fetching movies:', error);
        res.status(500).send('Error fetching movies from the database');
    }
}

async function findShows(req, res) {
    try {
        let query = {};
        if (req.query.status === 'RELEASED') {
            query.released = true;
        }
        if (req.query.title) {
            query.title = req.query.title;
        }
        if (req.query.genres) {
            query.genres = req.query.genres;
        }
        if (req.query.artists) {
            query.artists = req.query.artists;
        }
        if (req.query.start_date && req.query.end_date) {
            query.release_date = {
                $gte: new Date(req.query.start_date),
                $lte: new Date(req.query.end_date)
            };
        }
        const movies = await Movie.find(query);
        res.json(movies);
    } catch (error) {
        console.error('Error fetching movies by filters:', error);
        res.status(500).send('Error fetching movies from the database');
    }
}

async function getMovieById(req, res) {
    try {
        const id = req.params.movieId;
        const movie = await Movie.findById(id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json(movie);
    } catch (error) {
        console.error('Error fetching movie by ID:', error);
        res.status(500).send('Error fetching movie from the database');
    }
}

module.exports = {
    getMovies,
    findShows,
    getMovieById
};