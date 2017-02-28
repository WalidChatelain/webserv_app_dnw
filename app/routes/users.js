var express = require('express');
var router = express.Router();
const User = require('../models/user');

// GET all users 
router.get('/', function(req, res, next) {
  User.find().sort('name').exec(function(err, users) {
    if (err) {
      return next(err);
    }
    console.log('OK');
    res.send(users);
  });
});

// GET user with id 
router.get('/:id', function (req, res, next) {

  var userId = req.params.id;

  User.findById(userId, function(err, user){
    if (err){
      res.status(500).send(err);
      return;
    }
    res.send(user);
  });
});

// POST new user 
router.post('/', function (req, res, next) {
  var user = new User(req.body);

  user.save(function(err, createdUser){
    if (err){
      console.log('PEUXPASPOSTER');
      res.status(500).send(err);
      return;
    }
    res.send(createdUser);
  });
});

// UPDATE user with id
router.patch('/:id', function(req,res,next){
  var userId = req.params.id;
  //console.log("OK");

  User.findById(userId, function(err, user){
    if (err){
      res.status(500).send(err);
      return;
    }
    user.credentials.username = req.body.credentials.username;
    user.credentials.email = req.body.credentials.email;
    user.credentials.password = req.body.credentials.password;
    user.role = req.body.role;
    user.save(req.body, function(err, updatedUser){
      if (err){
        res.status(500).send(err);
        return;
      }
      res.send(updatedUser);
      });
  });
});

module.exports = router;
