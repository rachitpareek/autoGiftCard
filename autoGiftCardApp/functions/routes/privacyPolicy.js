var express = require('express');
var router = express.Router();

//Verifying information 
router.get('/', function(req, res, next){
    res.render('privacyPolicy.html');
});

module.exports = router;