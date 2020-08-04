var mongoose = require('mongoose');

var Schema = mongoose.Schema;

userSchema = new Schema({
    userName : {type:String},
    password : {type:String},
    phone:{type:Number},

})


module.exports = mongoose.model('registration',userSchema)