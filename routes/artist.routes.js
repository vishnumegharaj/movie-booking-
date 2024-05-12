const express = require('express');
const router = express.Router();
const {getArtists} = require('../controllers/artist.controller');

router.get('/', getArtists)

module.exports = router;
