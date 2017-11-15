let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let model = new Schema({
    name: {type: String},
    size: {type: String},
    quantity: {type: Number, default: 0}
});

module.exports=mongoose.model('Pack', model);