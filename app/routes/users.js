var express = require('express');
var router = express.Router();
const User = require('../models/user');
const lodash = require('lodash');

// GET all users 
router.get('/', function(req, res, next) {
  User.find().sort('lastName').exec(function(err, users) {
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
    const whitelist = lodash.pick(req.body, ['lastName', 'firstName', 'email', 'password']);
    lodash.assignIn(user, whitelist);
    /*
    user.lastName = req.body.lastName;
    user.firstName = req.body.firstName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.role = req.body.role;*/
    user.save(user, function(err, updatedUser){
      if (err){
        res.status(500).send(err);
        return;
      }
      res.send(updatedUser);
      });
  });
});

// Delete an user with id
router.delete('/:id', function(req,res,next){
  var userId = req.params.id;

  User.remove({_id: userId}, function(err, data){
    if (err){
      res.status(500).send(err);
      return;
    }
    console.log('Deleted '+ data + 'informations from db');
    res.sendStatus(204);
  });
});

module.exports = router;
