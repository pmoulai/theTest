var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/astier', function(req, res, next) {
  res.render('astier', { nom: 'Astier', type:'Bts' });
});

module.exports = router;
