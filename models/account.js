var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
	email: String,
	shoppingCart: Array,
	total: Number,
	username: String,
	password: String
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);