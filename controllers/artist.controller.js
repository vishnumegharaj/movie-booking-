

const Artist = require('../models/artist.model');

async function getArtists(req, res) {
    try {
        const artists = await Artist.find();
        res.send(artists);
    } 
    catch (error) {
        console.error('error fetching artists', error);
        res.status(500).send("error fetching artists from datadase")
    }
}

module.exports = {
    getArtists
}