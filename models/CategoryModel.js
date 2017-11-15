let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let model = new Schema({
    name: {type: String},
    date: {type: Date, default: Date.now}
});

module.exports=mongoose.model('Category', model);