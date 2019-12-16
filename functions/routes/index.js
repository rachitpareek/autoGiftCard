var express = require('express');
var router = express.Router();
const User = require('../models/user');

//Verifying information 
router.get('/', function(req, res, next){
    var hubChallenge = req.param('hub.challenge');
    console.log(hubChallenge);
    //res.render('index.html');
    res.send(hubChallenge);
});

//Showing information 
router.post('/', function(req, res, next){
    req.body.entry.forEach(element => {
        console.log(element.changes);
    });
    
});

module.exports = router;