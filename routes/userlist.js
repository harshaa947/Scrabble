var mongoose = require('mongoose');
var user = require('../models/user.js'); 

module.exports = UserList;   
function UserList(connection) 
	{   mongoose.connect(connection); }
	
UserList.prototype = {
	 addUser: function(req,res) {
     var item = req.body.item;
     newUser = new user();     
	 newUser.itemName = item.name;     
	 newUser.itemEmail = item.email;     
	 newUser.save(function savedUser(err){
	if(err) {
		throw err;
		}
	});
	res.redirect('home');   }
}