var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// var mongoUrl = 'mongodb://localhost:27017/test'

// ******* Objects used for Schema  ***** //
var HairUnit = require('../models/hairunit');


// ***  REST Routing *** //
// mongoose.connect(mongoUrl);

// USER REGISTER
router.post('/register', registerUser);

// USER LOGIN
router.post('/login', loginUser);



// ** POST to API ** //
router.post('/hairUnits/post', postHairUnit);
/* GET home page. */
router.get('/hairUnits/get', getHairUnits);
// * GET for any units * //
router.get('/get', getAnyUnit);


module.exports = router;

// ********  Router POST functions ******** //
function registerUser(req, res, next) {

}

function loginUser(req, res, next) {

}

// ********  Router POST functions ******** //
function postHairUnit(req, res, post) {
	var unit = new HairUnit();
	unit.name = req.body.unitName;
	unit.image = req.body.unitImage;
	unit.desc = req.body.unitDesc;
	unit.color = req.body.unitColor;
	unit.price = req.body.unitPrice;

	unit.save(function(error) {
		if(error) {
			console.log("Hair Unit Post - ");
			console.log(error);
		} else {
			res.json({message: 'Successful unit add!'});
		}
	});
}

// ********** Router GET functions ********** //
function getHairUnits(req, res, next) {
	HairUnit.find(function(error, result) {
		if(error) {
			console.log("GET error in getHairUnits - ");
			console.log(error);
		} else {
			res.json(result);
		}
	});
}

function getAnyUnit(someSchema, req, res, next) {
	var unit = new someSchema();
	unit.find(function(error, result) {
		if(error) {
			console.log("GET error in getAnyUnits - ");
			console.log(error);
		} else {
			res.json(result);
		}
	});
}


