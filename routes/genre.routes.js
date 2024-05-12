const express = require('express');
const router = express.Router();
const Genre = require('../models/genre.model');
const { getGenres } = require('../controllers/genre.controller');

router.get('/', getGenres);

module.exports = router;
