var express = require('express');
var router = express.Router();

const fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile("index.html");
});
/* GET home page. */
router.get('/getNum', function(req, res, next) {
  var num = [];
  fs.readdirSync("./public/images").forEach(file => {
      num.push(file);
  });
  res.json({files:num});
});


module.exports = router;
