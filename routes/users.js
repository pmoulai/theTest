var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/antony', function(req, res, next) {
  res.send('Antony is a good Guy');
});

module.exports = router;
