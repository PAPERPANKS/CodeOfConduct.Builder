var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/builder', function(req, res, next) {
  res.render('builder', { title: 'Builder' });
});

module.exports = router;
