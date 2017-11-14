var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var model = new Schema({
    name: {type: String},
    date: {type: Date, default: Date.now},
    pack: [{type: mongoose.Schema.Types.ObjectId, ref: 'Pack'}],
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    image_url: {type: String},
    is_available: {type: Boolean, default: false}
});

module.exports=mongoose.model('Item', model);