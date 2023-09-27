var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET ticketlist page. */
router.get('/tickets', function(req, res, next) {
  res.render('ticketlist', { title: 'Express' });
});

module.exports = router;
