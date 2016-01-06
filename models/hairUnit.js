var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hairunitschema = new Schema({
	name: String,
	image: String,
	desc: String,
	color: String,
	price: Number
});

module.exports = mongoose.model('hairunits', hairunitschema);