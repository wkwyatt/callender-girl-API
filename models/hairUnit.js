var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hairUnitSchema = new Schema({
	name: String,
	image: String,
	desc: String,
	price: Number
});

module.exports = mongoose.model('hairUnits', hairUnitSchema);