var express = require('express');
var router = express.Router();
const Issue = require('../models/issue');
const lodash = require('lodash');

 // Get all isssues from most recent to older
 router.get('/', function (req, res, next) {
    // appel du modèle
    Issue.find().sort('-creationDate').exec(function(err, issue){
      if (err){
        res.status(422).send(err);
        return;
      }
      res.send(issue);
    });
});

// Managing pagination and setting the headers
router.get('/paginate', function (req, res, next) {
    var page = req.query.page ? parseInt(req.query.page, 10) :1,
        pageSize = req.query.pageSize ? parseInt(req.query.pageSize, 10): 30;

    var offset = (page - 1) * pageSize,
        limit = pageSize;
        Issue.count(function(err, totalCount){
          if (err){
            res.status(500).send(err);
            return;
          }
          res.set('X-Pagination-Page', page);
          res.set('X-Pagination-Page-Size', pageSize);
          res.set('X-Pagination-Total', totalCount);
          Issue.find(function(err, issue){
            if (err){
              res.status(500).send(err);
              return;
            }
            res.send(issue);
          });
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
    const whitelist = lodash.pick(req.body, ['type', 'issueName', 'description', 'status', 'location', 'updateDate','actions','tags']);
	lodash.assignIn(issue, whitelist);
	//req.issue.updateDate = Date.now();

    /*issue.type = req.body.type;
    issue.issueName = req.body.issueName;
    issue.description = req.body.description;
    issue.user = req.body.user;
    issue.status = req.body.status;
    issue.location = req.body.location;
    issue.actions = req.body.actions;
    issue.tags = req.body.tags;*/

    issue.save(issue, function(err, updatedIssue){
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

// Find all issues from a type
router.get('/type/:type', function (req,res,next){
    var type = req.params.type;

    Issue.find({'type': type}, function(err, issues){
      if (err){
        res.status(500).send(err);
        return;
      }
      res.send(issues);
    });
  });

// Delete an user with id
router.delete('/:id', function(req,res,next){
  var issueId = req.params.id;

  Issue.remove({_id: issueId}, function(err, data){
    if (err){
      res.status(500).send(err);
      return;
    }
    console.log('Deleted '+ data + 'informations from db');
    res.sendStatus(204);
  });
});



module.exports = router;