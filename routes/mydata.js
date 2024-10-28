var express = require('mydata');
var router = express.Router();

/* GET mydata page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bhavani Kongari' });
});

module.exports = router;
