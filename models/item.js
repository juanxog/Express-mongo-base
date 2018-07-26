const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const itemSchema = new Schema({
    "_id"  : Schema.Types.ObjectId,
    "name" : String,
    "description" : String,
    "owner" : { type: Schema.Types.ObjectId, ref: 'user' },
    "date" : { type: Date , default: new Date()} ,
    "options" : [ { type: Schema.Types.String , ref: 'item' } ],
    "parent" : Schema.Types.ObjectId,
    "type": {type: Schema.Types.String}

}, { collection: 'item' });

module.exports = mongoose.model('item', itemSchema);