'use strict';

const express = require('express');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require ('path');

const index = require('./routes/index');
const PORT = process.env.PORT || 4000; 

server.use(bodyParser());
server.use(cors());
server.use('/', index);
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');
server.engine('html', require('ejs').renderFile);

var mongoDBURL = 'mongodb+srv://admin:admin@default-nnxo9.gcp.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDBURL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

let db = mongoose.connection;

db.once('open', function () {console.log("Connected to database successfully!")});
db.on('error', console.error.bind(console, 'MongoDB connection error'));

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`)
});

