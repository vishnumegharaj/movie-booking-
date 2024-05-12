const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genreSchema = new Schema({
    genreid: Number,
    genre: String
});

const Genre = mongoose.model('genres', genreSchema);

module.exports = Genre;
