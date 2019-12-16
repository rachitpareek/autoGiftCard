const mongoose = require('mongoose');

//Schema object representing a user.
const UserSchema = new mongoose.Schema({
     Name: {
          type: String, //their handle
          required: true
     },
     Gift_Card_Value: {
          type: String, //value of their giftcard
          required: true
     },
     Gift_Card_Code: {
        type: String, //their gift card's code
        required: true
   }
});

module.exports = mongoose.model('User', UserSchema)
