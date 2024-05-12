const express = require("express");
const   router = express.Router();
const {getMovies, getMovieById, findShows} = require('../controllers/movie.controller')


router.get('/', getMovies);
router.get('/:movieId', getMovieById);
router.get('/:movieId/shows', findShows);

module.exports = router;