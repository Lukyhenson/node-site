//require express
var express = require('express');
var path = require ('path');
//create ourroute project
var router = express.Router();

// export our router
module.exports = router;

// route for our homepage
router.get('/', function(req, res){
  res.render('pages/index');
});

// rout for our about page
router.get('/about', function(req, res){
  res.render('pages/about');
});

router.get('/contact', function(req, res){
  res.render('pages/contact');
});
router.post('/contact',  function(req, res){

});
