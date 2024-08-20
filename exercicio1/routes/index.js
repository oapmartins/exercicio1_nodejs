var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/hello/:firstName/:lastName', function (req, res) {
  res.render('hello', {
    firstName: req.params.firstName,
    lastName: req.params.lastName,
  });
});

module.exports = router;
