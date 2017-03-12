var express = require('express');
var router = express.Router();
const Issue = require('../models/issue');
const lodash = require('lodash');

/**
 * @api {get} /issues List issues
 * @apiName GetAllIssues
 * @apiGroup Issues
 * @apiVersion 1.0.0
 * @apiDescription Get list of all issues from the most recent to the oldest.
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
 *
 * @apiError {Object} 404/NotFound No issue was found corresponding to the ID in the URL path
 *
 * @apiErrorExample {json} 404 Not Found
 *     HTTP/1.1 404 Not Found
 *     Content-Type: application/json
 *
 *{
 * "message": "Cast to ObjectId failed for value \"58c3d3ed9843810011bb15\" at path \"_id\" for model \"Issue\"",
 * "name": "CastError",
 * "stringValue": "\"58c3d3ed9843810011bb15\"",
 * "kind": "ObjectId",
 * "value": "58c3d3ed9843810011bb15",
 * "path": "_id"
 * }
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

/**
 * @api {get} /issues Paginated list issues
 * @apiName GetPaginatedAllIssues
 * @apiGroup Issues
 * @apiVersion 1.0.0
 * @apiDescription Get a paginated list of all issues from the most recent to the oldest.
 *
 * @apiExample Example
 *     GET /issues/paginate
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
 *
 * Headers :
 * Connection →keep-alive
 * Content-Length →2118
 * Content-Type →application/json; charset=utf-8
 * Date →Sun, 12 Mar 2017 21:12:41 GMT
 * Etag →W/"846-+F6njeDkFhCbniljSa9NPA"
 * Server →Cowboy
 * Via →1.1 vegur
 * X-Pagination-Page →1
 * X-Pagination-Page-Size →30
 * X-Pagination-Total →6
 * X-Powered-By →Express
 *
 * @apiError {Object} 404/NotFound No issue was found corresponding to the ID in the URL path
 *
 * @apiErrorExample {json} 404 Not Found
 *     HTTP/1.1 404 Not Found
 *     Content-Type: application/json
 *
 *{
 * "message": "Cast to ObjectId failed for value \"58c3d3ed9843810011bb15\" at path \"_id\" for model \"Issue\"",
 * "name": "CastError",
 * "stringValue": "\"58c3d3ed9843810011bb15\"",
 * "kind": "ObjectId",
 * "value": "58c3d3ed9843810011bb15",
 * "path": "_id"
 * }
 */

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

/**
 * @api {get} /issues Retrieve Issue
 * @apiName GetIssueById
 * @apiGroup Issues
 * @apiVersion 1.0.0
 * @apiDescription Get a specific issue by his unique id
 *
 * @apiExample Example
 *     GET /issues/58c3d3ed9843810011bb151a
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
 *     Link: &lt;https://heigvd-webserv-2017-team-4.herokuapp.com/issues/58c3d3ed9843810011bb151a
 *
 *[
 *{
 * "_id": "58c3d3ed9843810011bb151a",
 * "type": "Détérioration",
 * "issueName": "tag3",
 * "description": "un autre tag",
 * "user": "58b6b26381e7e50011e69124",
 * "tags": [],
 * "actions": [],
 * "location": {
 *   "coordinates": [
 *     23
 *   ],
 *   "type": "Point"
 * },
 * "status": "new",
 * "creationDate": "2017-03-11T10:39:41.180Z"
 * }
 * ]
 *
 * @apiError {Object} 404/NotFound No issue was found corresponding to the ID in the URL path
 *
 * @apiErrorExample {json} 404 Not Found
 *     HTTP/1.1 404 Not Found
 *     Content-Type: application/json
 *
 *{
 * "message": "Cast to ObjectId failed for value \"58c3d3ed9843810011bb15\" at path \"_id\" for model \"Issue\"",
 * "name": "CastError",
 * "stringValue": "\"58c3d3ed9843810011bb15\"",
 * "kind": "ObjectId",
 * "value": "58c3d3ed9843810011bb15",
 * "path": "_id"
 * }
 */

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

/**
 * @api {post} /issues Create an issue
 * @apiName CreateIssue
 * @apiGroup Issues
 * @apiVersion 1.0.0
 * @apiDescription Register a new issue
 *
 * @apiExample Example
 *     POST /users HTTP/1.1
 *     Content-Type: application/json
 *
 * [
 * {
 *   "type": "vendale",
 *   "issueName": "Vitre cassée",
 *   "description": "Vitre d'un distributeur de journaux cassée",
 *   "user": "58b559a31277be1abc493011",
 *   "actions": [
 *     {
 *       "type": "test",
 *       "user": "58b559a31277be1abc493011"
 *     }
 *   ],
 *   "location": {
 *     "coordinates": [
 *       23
 *     ],
 *     "type": "Point"
 *   } 
 * }
 * ]
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
 *     Link: &lt;https://heigvd-webserv-2017-team-4.herokuapp.com/issues/58c3d3ed9843810011bb151a
 *
 *[
 *{
 * "_id": "58c5b217cc36f200118f2944",
 * "type": "vendale",
 * "issueName": "Vitre cassée",
 * "description": "Vitre d'un distributeur de journaux cassée",
 * "user": "58b559a31277be1abc493011",
 * "tags": [],
 * "actions": [],
 * "location": {
 *   "coordinates": [
 *     23
 *   ],
 *   "type": "Point"
 * },
 * "status": "new",
 * "creationDate": "2017-03-11T10:39:41.180Z"
 * }
 * ]
 *
 * @apiError {Object} 400/BadRequest Some of the issue's properties are invalid
 *
 * @apiErrorExample {json} 400 Bad Request
 *     HTTP/1.1 400 Bad Request
 *     Content-Type: text
 *
 * "Unexpected token { in JSON at position 79"
 */


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

/**
 * @api {patch} /issues/:id Partially Update an issue
 * @apiName PartiallyUpdateIssue
 * @apiGroup Issues
 * @apiVersion 1.0.0
 * @apiDescription Partially updates an issue's data (only the properties found in the request body will be updated).
 * All properties are optional.
 *
 * @apiExample Example
 *     PATCH issues/58c3d3ed9843810011bb151a HTTP/1.1
 *     Content-Type: application/json
 *
 * {
 *   "issueName": "Tag numéro 3"
 * }
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
 *     Link: &lt;https://heigvd-webserv-2017-team-4.herokuapp.com/issues/58c3d3ed9843810011bb151a
 *
 * [
 * {
 * "_id": "58c3d3ed9843810011bb151a",
 * "type": "Détérioration",
 * "issueName": "Tag numéro 3",
 * "description": "un autre tag",
 * "user": "58b6b26381e7e50011e69124",
 * "tags": [],
 * "actions": [],
 * "location": {
 *   "coordinates": [
 *     23
 *   ],
 *   "type": "Point"
 * },
 * "status": "new",
 * "creationDate": "2017-03-11T10:39:41.180Z"
 * }
 * ]
 *
 * @apiError {Object} 404/NotFound No issue was found corresponding to the ID in the URL path
 *
 * @apiErrorExample {json} 404 Not Found
 *     HTTP/1.1 404 Not Found
 *     Content-Type: application/json
 *
 *{
 * "message": "Cast to ObjectId failed for value \"58c3d3ed9843810011bb15\" at path \"_id\" for model \"Issue\"",
 * "name": "CastError",
 * "stringValue": "\"58c3d3ed9843810011bb15\"",
 * "kind": "ObjectId",
 * "value": "58c3d3ed9843810011bb15",
 * "path": "_id"
 * }
 */

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

/**
 * @api {get} /issues/type/:id Get all issues from a type
 * @apiName GetAllIssuesFromType
 * @apiGroup Issues
 * @apiVersion 1.0.0
 * @apiDescription Get a paginated list of all issues from a type.
 *
 * @apiExample Example
 *     GET /issues/type/Détérioration
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
 * [
 *  {
 *   "_id": "58b6c5775506470011dd2357",
 *   "type": "Détérioration",
 *   "issueName": "graffiti",
 *   "description": "un autre graff trop stylé",
 *   "user": "58b559a31277be1abc493011",
 *   "tags": [],
 *   "actions": [
 *     {
 *       "type": "test",
 *       "user": "58b559a31277be1abc493011",
 *       "_id": "58b6c5775506470011dd2358",
 *       "updateDate": "2017-03-01T12:58:31.178Z"
 *     }
 *   ],
 *   "location": {
 *     "coordinates": [
 *       23
 *     ],
 *     "type": "Point"
 *   },
 *   "status": "inProgress",
 *   "creationDate": "2017-03-01T12:58:31.160Z"
 * },
 * {
 *   "_id": "58c3d37a9843810011bb1518",
 *   "type": "Détérioration",
 *   "issueName": "tag",
 *   "description": "un autre tag",
 *   "user": "58b6b26381e7e50011e69124",
 *   "tags": [],
 *   "actions": [],
 *   "location": {
 *     "coordinates": [
 *       23
 *     ],
 *     "type": "Point"
 *   },
 *   "status": "new",
 *   "creationDate": "2017-03-11T10:37:46.579Z"
 * },
 * {
 *   "_id": "58c3d3e59843810011bb1519",
 *   "type": "Détérioration",
 *   "issueName": "tag2",
 *   "description": "un autre tag",
 *   "user": "58b6b26381e7e50011e69124",
 *   "tags": [],
 *   "actions": [],
 *   "location": {
 *     "coordinates": [
 *       23
 *     ],
 *     "type": "Point"
 *   },
 *   "status": "new",
 *   "creationDate": "2017-03-11T10:39:33.601Z"
 * },
 * ]
 *
 * @apiError {Object} 404/NotFound No issue was found corresponding to the ID in the URL path
 *
 * @apiErrorExample {json} 404 Not Found
 *     HTTP/1.1 404 Not Found
 *     Content-Type: application/json
 *
 *{
 * "message": "Cast to ObjectId failed for type \"58c3d3ed9843810011bb15\" at path \"_id\" for model \"Issue\"",
 * "name": "CastError",
 * "stringValue": "\"58c3d3ed9843810011bb15\"",
 * "kind": "ObjectId",
 * "value": "58c3d3ed9843810011bb15",
 * "path": "_id"
 * }
 */

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

/**
 * @api {delete} /issues/:id Delete an issue
 * @apiName DeleteIssue
 * @apiGroup Issues
 * @apiVersion 1.0.0
 * @apiDescription Permanently deletes an issue.
 *
 * @apiExample Example
 *     DELETE /issues/58c3d3ed9843810011bb151a
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
 * @apiSuccessExample 204 No Content
 *     HTTP/1.1 204 No Content
 */

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
