const express = require('express');
const mainRouter = require('./routes/index.js')
const app = express();
const PORT = 3001;

//middleware for parsing JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))

app.use('/', mainRouter)

app.listen (PORT, () => {
    console.log(`app listening at http://localhost:${PORT}`)
});