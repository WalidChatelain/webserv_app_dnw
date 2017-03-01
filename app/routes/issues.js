var express = require('express');
var router = express.Router();
const Issue = require('../models/issue');

 // Get all isssues
 router.get('/', function (req, res, next) {
    // appel du modèle

    Issue.find(function(err, issue){
      if (err){
        res.status(500).send(err);
        return;
      }
      res.send(issue);
    });
});

// Get an issue with id
router.get('/:id', function (req, res, next) {

  var issueId = req.params.id;

  Issue.findById(issueId, function(err, issue){
    if (err){
      res.status(500).send(err);
      return;
    }
    res.send(issue);
  });
});

// Post a new issue
router.post('/', function (req, res, next) {
  var issue = new Issue(req.body);
  console.log('OK');
  issue.save(function(err, createdIssue){
    if (err){
      res.status(500).send(err);
      return;
    }
    res.send(createdIssue);
  });
});

// Update issue with id
router.patch('/:id', function(req,res,next){
  var issueId = req.params.id;

  Issue.findById(issueId, function(err, issue){
    if (err){
      res.status(500).send(err);
      return;
    }
    issue.type = req.body.type;
    issue.description = req.body.description;
    issue.user = req.body.user;
    issue.status = req.body.status;
    issue.location = req.body.location;
    issue.action = req.body.action;
    issue.tags = req.body.tags;

    issue.save(req.body, function(err, updatedIssue){
      if (err){
        res.status(500).send(err);
        return;
      }
      res.send(updatedIssue);
      });
  });
});

// Find all issues from a user
router.get('/user/:id', function (req,res,next){
var userId = req.params.id;

Issue.find({'user': userId}, function(err, issues){
  if (err){
    res.status(500).send(err);
    return;
  }
  res.send(issues);
});
});

module.exports = router;