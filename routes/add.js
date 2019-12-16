var express = require('express');
var router = express.Router();

const User = require('../models/user');

//Adding info
router.post('/', function(req, res, next){
    let newUser = new User({
        Name: req.body.Name, 
        Gift_Card_Value: req.body.Gift_Card_Value,
        Gift_Card_Code: req.body.Gift_Card_Code
    });
    console.log(newUser);
    newUser.save((err, user) => {
        if (err)
        {
            res.json({msg: 'Failed to add user ' + req.body.Name + '.'});
        } else {
            res.json({msg: 'Added user ' + req.body.Name + ' succesfully!'});
        }
    });
});

module.exports = router;