let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let bookModel = new Schema({
    title: {type: String},
    author: {type: String},
    genre: {type: String},
    image_url: {type: String},
    is_read: {type: Boolean, default: false}
});

module.exports=mongoose.model('Book',bookModel);