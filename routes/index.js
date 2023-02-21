var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/astier', function(req, res, next) {
  res.render('astier', { nom: 'Astier', type:'Bts' });
});

router.get('/stands', function(req, res, next) {
  res.render('stands', { nom: 'Stands' });
});

router.post('/stands', function (req, res){
  const reqBody = req.body
  if(reqBody.name){
    res.json({status: 'ok'});
    return;
  }

  res.json({
    status: 'KO',
    messages: 'param name required'
  }).status(422)
  return;
});

module.exports = router;
