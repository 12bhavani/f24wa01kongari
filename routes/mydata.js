var mydata = require('mydata');
var router = mydata.Router();

/* GET mydata page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bhavani Kongari' });
});

module.exports = router;
