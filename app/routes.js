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
  var users = [
    { name: 'Tauan', office: 'WEB-Developer',  email: 'Tauan@node-website.io', avatar: 'https://images.pexels.com/photos/119705/pexels-photo-119705.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' },
    { name: 'James', office: 'Design',  email: 'James@node-website.io', avatar: 'https://images.pexels.com/photos/119705/pexels-photo-119705.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' },
    { name: 'John', office: 'UI Design',  email: 'John@node-website.io', avatar: 'https://images.pexels.com/photos/119705/pexels-photo-119705.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' },
    { name: 'Holly', office: 'Data-Base',  email: 'Holly@node-website.io', avatar: 'https://images.pexels.com/photos/119705/pexels-photo-119705.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' },
  ];

  res.render('pages/about', { users: users });
});

router.get('/contact', function(req, res){
  res.render('pages/contact');
});
router.post('/contact',  function(req, res){

});
