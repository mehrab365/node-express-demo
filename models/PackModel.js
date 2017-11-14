var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var model = new Schema({
    name: {type: String},
    size: {type: String},
    quantity: {type: Number, default: 0}
});

module.exports=mongoose.model('Pack', model);