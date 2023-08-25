const express = require('express');

const PORT = 3001;

const app = express();

//middleware for parsing JSON data
app.use(express.json());