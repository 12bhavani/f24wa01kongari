const express = require('express');
const router = express.Router();

/* GET computation page. */
router.get('/', function(req, res, next) {
    x = req.query.x ? parseFloat(req.query.x) : Math.floor(Math.random() * 20);
    y = Math.sinh(x)
    res.send(`sinh applied to ${x} is ${y}`);
});

module.exports = router;
