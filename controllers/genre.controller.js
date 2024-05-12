const Genre = require('../models/genre.model');

async function getGenres(req, res) {
    try {
        const genres = await Genre.find();
        res.send(genres);
    } catch (error) {
        console.error('Error fetching genres:', error); // Corrected error message
        res.status(500).send("Error fetching genres from the database");
    }
}   

module.exports = {
    getGenres
};
