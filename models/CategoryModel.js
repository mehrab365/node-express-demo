var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var model = new Schema({
    name: {type: String},
    date: {type: Date, default: Date.now}
});

module.exports=mongoose.model('Category', model);