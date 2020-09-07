var mongoose = require('mongoose');

var Schema = mongoose.Schema;

movieSchema = new Schema({
    name : {type:String},
    rating : {type:String},
    

})


module.exports = mongoose.model('movies',movieSchema)