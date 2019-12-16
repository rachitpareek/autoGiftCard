var express = require('express');
var router = express.Router();
const Mention = require('../models/mention');

//Verifying information 
router.get('/', function(req, res, next){
    Mention.find(function(err, mentions) {
        if (err)
        {
            res.json({msg: 'Failed to retrieve mentions.'});
        } else {
            res.json(mentions);
        }
    })
    // var hubChallenge = req.param('hub.challenge');
    // res.send(hubChallenge);
});

//Showing information 
//FIXME:Does the person get $5 per tag?
//FIXME: Need to somehow store the handle of the person tagging.
//FIXME: Need to store giftcard codes and values (remaining).
router.post('/', function(req, res, next){
    console.log(req.body)
    let newMention = new Mention({
        Name: req.body.entry[0].changes[0].value.media_id, 
        Gift_Card_Value: '$5',
        Gift_Card_Code: '0x999999'
    });
    newMention.save((err, tag) => {
        if (err)
        {
            res.json({msg: 'Failed to save this mention.'});
        } else {
            res.json({msg: 'Saved mention.'});
        }
    });
});

module.exports = router;