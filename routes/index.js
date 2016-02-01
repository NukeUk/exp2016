var express = require('express');
var router = express.Router();
var daytimeService = require('../services/daytimeService.js');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res){
	res.render('index', {
		title: 'My App',
		age: 32,
		daytime: daytimeService(new Date())
	});
});


module.exports = router;
