var mongoose = require('mongoose') ;
var Schema = mongoose.Schema; 

var UserSchema = new Schema({
     itemName      : String
	 , itemEmail   : String  }); 
	 
module.exports = mongoose.model('UserModel', UserSchema);