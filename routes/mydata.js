var express = require('express');
var router = express.Router();

/* GET interesting fact page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Brady Cruickshank' });
});

module.exports = router;
