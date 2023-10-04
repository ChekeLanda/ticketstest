var express = require('express');
var router = express.Router();
const leerexcel = require("../public/javascripts/Scripts");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET ticketlist page. */
router.get('/ticketlist', function(req, res, next) {

 var worksheets=leerexcel.leerhoja;
 res.render('ticketlist', { title: 'Express', tickets: worksheets });

});

module.exports = router;
