var express = require('express');
var router = express.Router();
var controllerMongoCollection = require('../controllers/database');

/* GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */

router.get('/getAllOrders', controllerMongoCollection.getAllOrders);

module.exports = router;
