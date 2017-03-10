var express = require('express');
var router = express.Router();
const Issue = require('../models/issue');
const lodash = require('lodash');

/**
 * @api {get} /issues List issues
 * @apiName GetAllIssues
 * @apiGroup Issues
 * @apiVersion 1.0.0
 * @apiDescription Get a paginated list of all issues from the most recent to the oldest.
 *
 * @apiExample Example
 *     GET /issues
 *
 * @apiSuccess (Response body) {Number} _id The unique identifier of the issue.
 * @apiSuccess (Response body) {String} type The type of the issue.
 * @apiSuccess (Response body) {String} issueName The name of the issue.
 * @apiSuccess (Response body) {String} description A short description of the issue.
 * @apiSuccess (Response body) {String} user The user who created the issue.
 * @apiSuccess (Response body) {String} tags The tag of the issue.
 * @apiSuccess (Response body) {Date}   creationDate The date at which the issue was created.
 * @apiSuccess (Response body) {Number} location The location where is the issue which contain coordinates and type.
 * @apiSuccess (Response body) {String} status The status of the issue (inProgress, canceled, completed).
 *
 * @apiSuccess (Response body) {Object[]} actions       action of an issue.
 * @apiSuccess (Response body) {String} actions.type The type of the action.
 * @apiSuccess (Response body) {String} actions.user The user who take the action.
 * @apiSuccess (Response body) {Number} actions._id The unique identifier of the action.
 * @apiSuccess (Response body) {Date}   actions.updateDate The date of the action which mean it is the date at which the issue was uptadeted.
 *
 * @apiSuccessExample 200 OK
 *     HTTP/1.1 200 OK
 *     Content-Type: application/json
 *     Link: &lt;https://heigvd-webserv-2017-team-4.herokuapp.com/issues
 *
 *[
 * {
 *     "_id": "58b6c5775506470011dd2357",
 *     "type": "Détérioration",
 *     "issueName": "graffiti",
 *     "description": "un autre graff trop stylé",
 *     "user": "58b559a31277be1abc493011",
 *     "tags": [],
 *     "actions": [
 *       {
 *         "type": "test",
 *         "user": "58b559a31277be1abc493011",
 *         "_id": "58b6c5775506470011dd2358",
 *         "updateDate": "2017-03-01T12:58:31.178Z"
 *       }
 *     ],
 *     "location": {
 *       "coordinates": [
 *         23
 *       ],
 *       "type": "Point"
 *     },
 *     "status": "inProgress",
 *     "creationDate": "2017-03-01T12:58:31.160Z"
 *   },
 * ]
 */

 // Get all isssues from most recent to older
 router.get('/', function (req, res, next) {
    // appel du modèle
    Issue.find().sort('-creationDate').exec(function(err, issue){
      if (err){
        res.status(404).send(err);
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
            res.status(422).send(err);
            return;
          }
          res.set('X-Pagination-Page', page);
          res.set('X-Pagination-Page-Size', pageSize);
          res.set('X-Pagination-Total', totalCount);
          Issue.find(function(err, issue){
            if (err){
              res.status(404).send(err);
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
      res.status(404).send(err);
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
      res.status(400).send(err);
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
      res.status(404).send(err);
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
        res.status(400).send(err);
        return;
      }
      res.send(updatedIssue);
      });
  });
});

// Find all issues from a user ----- Fonction déplacée dans les routes users
/*router.get('/user/:id', function (req,res,next){
var userId = req.params.id;

Issue.find({'user': userId}, function(err, issues){
  if (err){
    res.status(404).send(err);
    return;
  }
  res.send(issues);
});
});*/

// FILTER : Find all issues from a type
router.get('/type/:type', function (req,res,next){
    var type = req.params.type;

    Issue.find({'type': type}, function(err, issues){
      if (err){
        res.status(404).send(err);
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
      res.status(404).send(err);
      return;
    }
    console.log('Deleted '+ data + 'informations from db');
    res.sendStatus(204);
  });
});



module.exports = router;
