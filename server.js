const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const port = 8085;

app.use(cors());
app.get('/', (req, res) => {
    // const originalString = 'Hello, world!';
    // const encodedString = Buffer.from(originalString).toString('base64');
    // res.send(encodedString);
  
    res.json({ message: "Welcome to Upgrad Movie booking application development." });
  });

//movies router 
const movieRouter = require('./routes/movie.routes')
app.use("/api/movies" , movieRouter);

//artists router
const artistsRouter = require('./routes/artist.routes');
app.use('/api/artists', artistsRouter);

//genres router
const genreRouter = require('./routes/genre.routes');
app.use('/api/genre', genreRouter);

//auth router 
const authRouter = require('./routes/user.routes');
app.use('/auth', authRouter);




// connection to database 
const db = require("./config/db.config");
db.mongoose.connect(db.mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connected to the database!");

    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

app.listen(port, () => {
    console.log('server listening on port ', port);
})