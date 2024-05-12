// db.config.js
const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/moviesdb';

module.exports = {
    mongoose: mongoose,
    mongoURL: mongoURL
};


  