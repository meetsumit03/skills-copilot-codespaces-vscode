// create web server with express
const express = require('express');
const app = express();
// use body-parser to parse requests
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// use cors to allow cross origin resource sharing
const cors = require('cors');
app.use(cors());
// use mongoose to connect to mongodb
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/comments');
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})