var express = require('express');
var router = express.Router();
var passport = require('passport');
var Account = require('../models/account')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', function (req, res, next){

	Account.register( new Account ({ username: req.body.username}), req.body.password, function (err, account){
		console.log("==========err==========");
		console.log(err);
		console.log("==========acct==========");
		console.log(account);
		if (err){
			return res.json({ err: err.message });
		}
		passport.authenticate('local')(req, res, function (){
			return res.json({ cart: account.shoppingCart, total: account.total, status: "success" });
		});
	});
});

router.get('/confirm-login', function (req, res) {
		console.log("=======sess user ========");
		console.log(req.session.user);
        res.json({user: req.session.user});
    }
);

router.post('/login', function (req, res, next){
	console.log("logging in ====server");
	console.log("Cookies: ", req.cookies)
	passport.authenticate('local', function (err, user, info) {
		console.log("====login user======");
		console.log(user);
		if (err){
			console.log(err);
			return next(err);
		}
		if(!user){
			return res.json({ status: "failed"});
		}
		if(user){
			if(user.accessLevel == 5){
				req.session.accessLevel = "admin";
			}
			req.session.username = user.username;
			res.json({ status: "success", username: user.username });
		}

	})(req, res, next);
});

/* ----------Logout----------- */
/* ---------------------------- */
router.get('/logout', function(req, res) {
    req.session.destroy();
    res.json({ status: "logged out"});
});

module.exports = router;
