var express = require('express');
var router = express.Router();
const User = require('../models/user');

// GET all users 
router.get('/', function(req, res, next) {
  User.find().sort('name').exec(function(err, users) {
    if (err) {
      return next(err);
    }
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
router.post('/', function(req, res, next) {
  // Create a new document from the JSON in the request body
  const newUser = new User(req.body);
  // Save that document
  newUser.save(function(err, savedUser) {
    if (err) {
      return next(err);
    }
    // Send the saved document in the response
    res.send(savedUser);
  });
});

// UPDATE user with id
router.put('/:id', function(req,res,next){
  var userId = req.params.id;

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
