const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
    "_id"  : Schema.Types.ObjectId,
    "name" : String,
    "lastname" : String,
    "username" : String,
    "password" : String,
    "date" : Date,
    "profile" : String

}, { collection: 'user' });

module.exports = mongoose.model('user', userSchema);