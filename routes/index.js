var express = require('express');
var router = express.Router();
const User = require('../models/user');

//Getting information 
router.get('/', function(req, res, next){
    User.find(function(err, users) {
        res.json(users);
    })
});

module.exports = router;