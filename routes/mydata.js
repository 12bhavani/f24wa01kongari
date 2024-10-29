const express = require('express');
const router = express.Router();

/* GET mydata page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Bhavani Kongari' });
});

module.exports = router;
