const express = require('express');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require ('path');
const functions = require('firebase-functions');

const index = require('./routes/index');
const add = require('./routes/add');
const PORT = process.env.PORT || 4000; 

server.use(bodyParser());
server.use(cors());
server.use('/', index);
server.use('/addUser', add);
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
    console.log(`server listening at ${PORT}`);
});

exports.addUser = functions.https.onRequest((req, res) => {
    // [START sendError]
    // Forbidding PUT requests.
    if (req.method === 'PUT') {
      return res.status(403).send('Forbidden!');
    }
    // [END sendError]
  
    // [START usingMiddleware]
    // Enable CORS using the `cors` express middleware.
    return cors(req, res, () => {
      res.status(200).send("Hello");
      // [END sendResponse]
    });
  });

