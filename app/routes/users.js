var express = require('express');
var router = express.Router();
const User = require('../models/user');
const Issue = require('../models/issue');
const lodash = require('lodash');


/**
 * @api {get} /users List users
 * @apiName GetAllUsers
 * @apiGroup User
 * @apiVersion 1.0.0
 * @apiDescription Get a list of all users by alphabetic order.
 *
 *
 * @apiExample Example
 *     GET /users
 *
 * @apiParam {Number} id The users-ID, generated automatically.
 * @apiParam {String} role The users' role.
 *
 * @apiSuccess (Response body) {String} id The unique identifier of the user
 * @apiSuccess (Response body) {String} role The role of the user (citizen or manager)
 * @apiSuccess (Response body) {String} firstName The first name of the user
 * @apiSuccess (Response body) {String} lastName The last name of the user
 * @apiSuccess (Response body) {String} email The personal email of the user
 * @apiSuccess (Response body) {String} password The password chosen by the user
 * @apiSuccess (Response body) {Date} createdAt The date at which the user was created
 *
 * @apiSuccessExample 200 OK
 *     HTTP/1.1 200 OK
 *     Content-Type: application/json
 *     Link: &lt;https://heigvd-webserv-2017-team-4.herokuapp.com/users
 *
 * [
 * {
 *   "_id": "58b6b26381e7e50011e69124",
 *   "role": "citizen",
 *   "firstName": "Daniel",
 *   "lastName": "Mendes",
 *   "email": "hkshau",
 *   "password": "1234567",
 *    "createdAt": "2017-03-01T11:37:07.113Z"
 * },
 * {
 *   "_id": "58b6b26f81e7e50011e69126",
 *   "role": "citizen",
 *   "firstName": "David",
 *   "lastName": "Mendes",
 *  "email": "hkshau",
 *  "password": "1234567",
 *   "createdAt": "2017-03-01T11:37:19.613Z"
 * }
 * ]
 */

router.get('/', function(req, res, next) {
   User.find().sort('lastName').exec(function(err, users) {
      if (err) {
        return next(err);
      }
      const usersIds = users.map(user => user._id);
      console.log(usersIds);
      Issue.aggregate([
      {
        $match: { // Select issues created by the people we are interested in
          user: { $in: usersIds }
        }
      },
      {
        $group: { // Group the issues by user ID
            _id: '$user',
            issuesCount: { // Count the number of issues for that ID
              $sum: 1
            }
        }
      }
    ], function(err, results) {
        if (err) {
          return next(err);
        }
        // Convert the User documents to JSON
        const userJson = users.map(user => user.toJSON());
        console.log(userJson);

        // For each result...
        results.forEach(function(result) {
          // Get the director ID (that was used to $group)...
          const resultId = result._id.toString();
          // Find the corresponding person...
          const correspondingPerson = userJson.find(user => user._id == resultId);
          // And attach the new property
          correspondingPerson.createdIssuesCount = result.issuesCount;
        });
        // Send the enriched response
        res.send(userJson);
      });

    });
 });
// GET all users 
/*router.get('/', function(req, res, next) {
  User.find().sort('lastName').exec(function(err, users) {
    if (err) {
      res.status(404).send(err);
      return;
    }
    console.log('OK');
    res.send(users);
  });
});/*



/**
 * @api {get} /users Retrieve user
 * @apiName GetUserById
 * @apiGroup User
 * @apiVersion 1.0.0
 * @apiDescription Get a specific user by his unique id
 *
 *
 * @apiParam {Number} id The users-ID, generated automatically.
 * @apiParam {String} role The users' role.
 *
 *
 * @apiExample Example
 *     GET /users/58b6b26381e7e50011e69124
 *
 * @apiSuccess (Response body) {String} id The unique identifier of the user
 * @apiSuccess (Response body) {String} role The role of the user (citizen or manager)
 * @apiSuccess (Response body) {String} firstName The first name of the user
 * @apiSuccess (Response body) {String} lastName The last name of the user
 * @apiSuccess (Response body) {String} email The personal email of the user
 * @apiSuccess (Response body) {String} password The password chosen by the user
 * @apiSuccess (Response body) {Date} createdAt The date at which the user was created
 *
 * @apiSuccessExample 200 OK
 *     HTTP/1.1 200 OK
 *     Content-Type: application/json
 *     Link: &lt;https://heigvd-webserv-2017-team-4.herokuapp.com/users/58b6b26381e7e50011e69124
 *
 * [
 * {
 *   "_id": "58b6b26381e7e50011e69124",
 *   "role": "citizen",
 *   "firstName": "Daniel",
 *   "lastName": "Mendes",
 *   "email": "hkshau",
 *   "password": "1234567",
 *    "createdAt": "2017-03-01T11:37:07.113Z"
 * }
 * ]
 */

// GET user with id 
router.get('/:id', function (req, res, next) {

  var userId = req.params.id;

  User.findById(userId, function(err, user){
    if (err){
      res.status(404).send(err);
      return;
    }
    res.send(user);
  });
});

/**
 * @api {post} /users Create a user
 * @apiName CreateUser
 * @apiGroup User
 * @apiVersion 1.0.0
 * @apiDescription Registers a new user.
 *
 * @apiParam {Number} id The users-ID, generated automatically.
 * @apiParam {String} role The users' role.
 *
 *
 * @apiExample Example
 *     POST /users HTTP/1.1
 *     Content-Type: application/json
 *
 * {
 *  "role": "citizen",
 *  "firstName": "Max",
 *  "lastName": "Hibou",
 *  "email": "coucouat.cim",
 *  "password": "1234567",
 *  "_id": "58b6cd595506470011dd235b",
 *  "createdAt": "2017-03-01T13:32:09.332Z"
 * }
 *
 * @apiSuccess (Response body) {String} id The unique identifier of the user
 * @apiSuccess (Response body) {String} role The role of the user (citizen or manager)
 * @apiSuccess (Response body) {String} firstName The first name of the user
 * @apiSuccess (Response body) {String} lastName The last name of the user
 * @apiSuccess (Response body) {String} email The personal email of the user
 * @apiSuccess (Response body) {String} password The password chosen by the user
 * @apiSuccess (Response body) {Date} createdAt The date at which the user was created
 *
 * @apiSuccessExample 200 OK
 *     HTTP/1.1 200 OK
 *     Content-Type: application/json
 *     Link: &lt;https://heigvd-webserv-2017-team-4.herokuapp.com/users/58b6b26381e7e50011e69124
 *
 * [
 *   {
 *    "role": "citizen",
 *    "firstName": "Max",
 *    "lastName": "Hibou",
 *    "email": "coucouat.cim",
 *    "password": "1234567",
 *    "_id": "58b6cd595506470011dd235b",
 *    "createdAt": "2017-03-01T13:32:09.332Z"
 *  }
 * ]
 *
 * @apiError {Object} 422/UnprocessableEntity Some of the user's properties are invalid
 *
 * @apiErrorExample {json} 422 Unprocessable Entity
 *     HTTP/1.1 422 Unprocessable Entity
 *     Content-Type: application/json
 *
 * {
 * "errors": {
 *   "firstName": {
 *     "message": "Path `firstName` is required.",
 *     "name": "ValidatorError",
 *     "properties": {
 *       "type": "required",
 *       "message": "Path `{PATH}` is required.",
 *       "path": "firstName",
 *       "value": ""
 *     },
 *     "kind": "required",
 *     "path": "firstName",
 *     "value": ""
 *   }
 * },
 * "message": "User validation failed",
 * "name": "ValidationError"
 * }
 */


// POST new user 
router.post('/', function (req, res, next) {
  var user = new User(req.body);

  user.save(function(err, createdUser){
    if (err){
      //console.log('PEUXPASPOSTER');
      res.status(400).send(err);
      return;
    }
    res.send(createdUser);
  });
});

/**
 * @api {patch} users/:id Partially Update a user
 * @apiName PartiallyUpdateUser
 * @apiGroup User
 * @apiVersion 1.0.0
 * @apiDescription Partially updates a user's data (only the properties found in the request body will be updated).
 * All properties are optional.
 *
 * @apiParam {Number} id The users-ID, generated automatically.
 * @apiParam {String} role The users' role.
 *
 * @apiExample Example
 *     PATCH users/58b6d6455506470011dd235f HTTP/1.1
 *     Content-Type: application/json
 *
 * {
 *  "email": "monvraiemail",
 *  "password": "hello",
 * }
 *
 * @apiSuccess (Response body) {String} id The unique identifier of the user
 * @apiSuccess (Response body) {String} role The role of the user (citizen or manager)
 * @apiSuccess (Response body) {String} firstName The first name of the user
 * @apiSuccess (Response body) {String} lastName The last name of the user
 * @apiSuccess (Response body) {String} email The personal email of the user
 * @apiSuccess (Response body) {String} password The password chosen by the user
 * @apiSuccess (Response body) {Date} createdAt The date at which the user was created
 *
 *
 * @apiSuccessExample 200 OK
 *     HTTP/1.1 200 OK
 *     Content-Type: application/json
 *
 * {
 *  "_id": "58b6d6455506470011dd235f",
 *  "role": "citizen",
 *  "firstName": "Walid",
 *  "lastName": "Chatelain",
 *  "email": "monvraiemail",
 *  "password": "hello",
 *  "createdAt": "2017-03-01T14:10:13.561Z"
 * }
 */

// UPDATE user with id
router.patch('/:id', function(req,res,next){
  var userId = req.params.id;
  //console.log("OK");

  User.findById(userId, function(err, user){
    if (err){
      res.status(404).send(err);
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
        res.status(400).send(err);
        return;
      }
      res.send(updatedUser);
      });
  });
});

/**
 * @api {delete} users/:id Delete a user
 * @apiName DeleteUser
 * @apiGroup User
 * @apiVersion 1.0.0
 * @apiDescription Permanently deletes a user.
 *
 * @apiParam {Number} id The users-ID, generated automatically.
 * @apiParam {String} role The users' role.
 *
 * @apiExample Example
 *     DELETE users/58b6d6455506470011dd235f HTTP/1.1
 *
 * @apiSuccess (Response body) {String} id The unique identifier of the user
 * @apiSuccess (Response body) {String} role The role of the user (citizen or manager)
 * @apiSuccess (Response body) {String} firstName The first name of the user
 * @apiSuccess (Response body) {String} lastName The last name of the user
 * @apiSuccess (Response body) {String} email The personal email of the user
 * @apiSuccess (Response body) {String} password The password chosen by the user
 * @apiSuccess (Response body) {Date} createdAt The date at which the user was created
 *
 * @apiSuccessExample 204 No Content
 *     HTTP/1.1 204 No Content
 */


// DELETE an user with id
router.delete('/:id', function(req,res,next){
  var userId = req.params.id;

  User.remove({_id: userId}, function(err, data){
    if (err){
      res.status(404).send(err);
      return;
    }
    console.log('Deleted '+ data + 'informations from db');
    res.sendStatus(204);
  });
});



// GET all issues from a user
router.get('/user/:id', function (req,res,next){
var userId = req.params.id;

Issue.find({'user': userId}, function(err, issues){
  if (err){
    res.status(404).send(err);
    return;
  }
  res.send(issues);
});
});

// DELETE all issues from a user
router.delete('/user/:id', function (req,res,next){
var userId = req.params.id;

Issue.remove({'user': userId}, function(err, data){
  if (err){
    res.status(404).send(err);
    return;
  }
  console.log('Deleted '+ data + 'informations from db');
    res.sendStatus(204);
});
});




module.exports = router;
