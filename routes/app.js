var express = require('express');
var router = express.Router();
var Product = require('../models/product')
var cart = require('../models/cart')

router.get('/', function (req, res, next) {
// var products=Product.find();
res.render('index')

});
module.exports = router;
