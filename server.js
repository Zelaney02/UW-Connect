// import modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express(); // init express app

app.use(bodyParser.json()); // middleware

// MongoDB URI for database
const mongoURI = 'mongodb://localhost:27017/uw-connect';

// connect to MongoDB
mongoose
    .connect(mongoURI, {useNewUrlParser:})
