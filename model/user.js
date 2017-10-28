var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema(
    {
        name:{type:String, required:true, max:100},
        phone:{type:Number, required:true},
        email:{type:String, required:true, max:100},
        date:{type:Date}    
    }
);

module.exports = mongoose.model('UserModel', UserSchema );