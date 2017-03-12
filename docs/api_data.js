define({ "api": [
  {
    "type": "post",
    "url": "/issues",
    "title": "Create an issue",
    "name": "CreateIssue",
    "group": "Issues",
    "version": "1.0.0",
    "description": "<p>Register a new issue</p>",
    "examples": [
      {
        "title": "Example",
        "content": "    POST /users HTTP/1.1\n    Content-Type: application/json\n\n[\n{\n  \"type\": \"vendale\",\n  \"issueName\": \"Vitre cassée\",\n  \"description\": \"Vitre d'un distributeur de journaux cassée\",\n  \"user\": \"58b559a31277be1abc493011\",\n  \"actions\": [\n    {\n      \"type\": \"test\",\n      \"user\": \"58b559a31277be1abc493011\"\n    }\n  ],\n  \"location\": {\n    \"coordinates\": [\n      23\n    ],\n    \"type\": \"Point\"\n  } \n}\n]",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Response body": [
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>The unique identifier of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "issueName",
            "description": "<p>The name of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A short description of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>The user who created the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "tags",
            "description": "<p>The tag of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "Date",
            "optional": false,
            "field": "creationDate",
            "description": "<p>The date at which the issue was created.</p>"
          },
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "location",
            "description": "<p>The location where is the issue which contain coordinates and type.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>The status of the issue (inProgress, canceled, completed).</p>"
          },
          {
            "group": "Response body",
            "type": "Object[]",
            "optional": false,
            "field": "actions",
            "description": "<p>action of an issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "actions.type",
            "description": "<p>The type of the action.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "actions.user",
            "description": "<p>The user who take the action.</p>"
          },
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "actions._id",
            "description": "<p>The unique identifier of the action.</p>"
          },
          {
            "group": "Response body",
            "type": "Date",
            "optional": false,
            "field": "actions.updateDate",
            "description": "<p>The date of the action which mean it is the date at which the issue was uptadeted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "    HTTP/1.1 200 OK\n    Content-Type: application/json\n    Link: &lt;https://heigvd-webserv-2017-team-4.herokuapp.com/issues/58c3d3ed9843810011bb151a\n\n[\n{\n\"_id\": \"58c5b217cc36f200118f2944\",\n\"type\": \"vendale\",\n\"issueName\": \"Vitre cassée\",\n\"description\": \"Vitre d'un distributeur de journaux cassée\",\n\"user\": \"58b559a31277be1abc493011\",\n\"tags\": [],\n\"actions\": [],\n\"location\": {\n  \"coordinates\": [\n    23\n  ],\n  \"type\": \"Point\"\n},\n\"status\": \"new\",\n\"creationDate\": \"2017-03-11T10:39:41.180Z\"\n}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400/BadRequest",
            "description": "<p>Some of the issue's properties are invalid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400 Bad Request",
          "content": "    HTTP/1.1 400 Bad Request\n    Content-Type: text\n\n\"Unexpected token { in JSON at position 79\"",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issues.js",
    "groupTitle": "Issues"
  },
  {
    "type": "delete",
    "url": "/issues/:id",
    "title": "Delete an issue",
    "name": "DeleteIssue",
    "group": "Issues",
    "version": "1.0.0",
    "description": "<p>Permanently deletes an issue.</p>",
    "examples": [
      {
        "title": "Example",
        "content": "DELETE /issues/58c3d3ed9843810011bb151a",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Response body": [
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>The unique identifier of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "issueName",
            "description": "<p>The name of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A short description of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>The user who created the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "tags",
            "description": "<p>The tag of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "Date",
            "optional": false,
            "field": "creationDate",
            "description": "<p>The date at which the issue was created.</p>"
          },
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "location",
            "description": "<p>The location where is the issue which contain coordinates and type.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>The status of the issue (inProgress, canceled, completed).</p>"
          },
          {
            "group": "Response body",
            "type": "Object[]",
            "optional": false,
            "field": "actions",
            "description": "<p>action of an issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "actions.type",
            "description": "<p>The type of the action.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "actions.user",
            "description": "<p>The user who take the action.</p>"
          },
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "actions._id",
            "description": "<p>The unique identifier of the action.</p>"
          },
          {
            "group": "Response body",
            "type": "Date",
            "optional": false,
            "field": "actions.updateDate",
            "description": "<p>The date of the action which mean it is the date at which the issue was uptadeted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "204 No Content",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issues.js",
    "groupTitle": "Issues"
  },
  {
    "type": "get",
    "url": "/issues",
    "title": "List issues",
    "name": "GetAllIssues",
    "group": "Issues",
    "version": "1.0.0",
    "description": "<p>Get list of all issues from the most recent to the oldest.</p>",
    "examples": [
      {
        "title": "Example",
        "content": "GET /issues",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Response body": [
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>The unique identifier of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "issueName",
            "description": "<p>The name of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A short description of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>The user who created the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "tags",
            "description": "<p>The tag of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "Date",
            "optional": false,
            "field": "creationDate",
            "description": "<p>The date at which the issue was created.</p>"
          },
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "location",
            "description": "<p>The location where is the issue which contain coordinates and type.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>The status of the issue (inProgress, canceled, completed).</p>"
          },
          {
            "group": "Response body",
            "type": "Object[]",
            "optional": false,
            "field": "actions",
            "description": "<p>action of an issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "actions.type",
            "description": "<p>The type of the action.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "actions.user",
            "description": "<p>The user who take the action.</p>"
          },
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "actions._id",
            "description": "<p>The unique identifier of the action.</p>"
          },
          {
            "group": "Response body",
            "type": "Date",
            "optional": false,
            "field": "actions.updateDate",
            "description": "<p>The date of the action which mean it is the date at which the issue was uptadeted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "    HTTP/1.1 200 OK\n    Content-Type: application/json\n    Link: &lt;https://heigvd-webserv-2017-team-4.herokuapp.com/issues\n\n[\n{\n    \"_id\": \"58b6c5775506470011dd2357\",\n    \"type\": \"Détérioration\",\n    \"issueName\": \"graffiti\",\n    \"description\": \"un autre graff trop stylé\",\n    \"user\": \"58b559a31277be1abc493011\",\n    \"tags\": [],\n    \"actions\": [\n      {\n        \"type\": \"test\",\n        \"user\": \"58b559a31277be1abc493011\",\n        \"_id\": \"58b6c5775506470011dd2358\",\n        \"updateDate\": \"2017-03-01T12:58:31.178Z\"\n      }\n    ],\n    \"location\": {\n      \"coordinates\": [\n        23\n      ],\n      \"type\": \"Point\"\n    },\n    \"status\": \"inProgress\",\n    \"creationDate\": \"2017-03-01T12:58:31.160Z\"\n  },\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "404/NotFound",
            "description": "<p>No issue was found corresponding to the ID in the URL path</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not Found",
          "content": "    HTTP/1.1 404 Not Found\n    Content-Type: application/json\n\n{\n\"message\": \"Cast to ObjectId failed for value \\\"58c3d3ed9843810011bb15\\\" at path \\\"_id\\\" for model \\\"Issue\\\"\",\n\"name\": \"CastError\",\n\"stringValue\": \"\\\"58c3d3ed9843810011bb15\\\"\",\n\"kind\": \"ObjectId\",\n\"value\": \"58c3d3ed9843810011bb15\",\n\"path\": \"_id\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issues.js",
    "groupTitle": "Issues"
  },
  {
    "type": "get",
    "url": "/issues/type/:id",
    "title": "Get all issues from a type",
    "name": "GetAllIssuesFromType",
    "group": "Issues",
    "version": "1.0.0",
    "description": "<p>Get a paginated list of all issues from a type.</p>",
    "examples": [
      {
        "title": "Example",
        "content": "GET /issues/type/Détérioration",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Response body": [
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>The unique identifier of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "issueName",
            "description": "<p>The name of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A short description of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>The user who created the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "tags",
            "description": "<p>The tag of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "Date",
            "optional": false,
            "field": "creationDate",
            "description": "<p>The date at which the issue was created.</p>"
          },
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "location",
            "description": "<p>The location where is the issue which contain coordinates and type.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>The status of the issue (inProgress, canceled, completed).</p>"
          },
          {
            "group": "Response body",
            "type": "Object[]",
            "optional": false,
            "field": "actions",
            "description": "<p>action of an issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "actions.type",
            "description": "<p>The type of the action.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "actions.user",
            "description": "<p>The user who take the action.</p>"
          },
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "actions._id",
            "description": "<p>The unique identifier of the action.</p>"
          },
          {
            "group": "Response body",
            "type": "Date",
            "optional": false,
            "field": "actions.updateDate",
            "description": "<p>The date of the action which mean it is the date at which the issue was uptadeted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "    HTTP/1.1 200 OK\n    Content-Type: application/json\n    Link: &lt;https://heigvd-webserv-2017-team-4.herokuapp.com/issues\n\n[\n {\n  \"_id\": \"58b6c5775506470011dd2357\",\n  \"type\": \"Détérioration\",\n  \"issueName\": \"graffiti\",\n  \"description\": \"un autre graff trop stylé\",\n  \"user\": \"58b559a31277be1abc493011\",\n  \"tags\": [],\n  \"actions\": [\n    {\n      \"type\": \"test\",\n      \"user\": \"58b559a31277be1abc493011\",\n      \"_id\": \"58b6c5775506470011dd2358\",\n      \"updateDate\": \"2017-03-01T12:58:31.178Z\"\n    }\n  ],\n  \"location\": {\n    \"coordinates\": [\n      23\n    ],\n    \"type\": \"Point\"\n  },\n  \"status\": \"inProgress\",\n  \"creationDate\": \"2017-03-01T12:58:31.160Z\"\n},\n{\n  \"_id\": \"58c3d37a9843810011bb1518\",\n  \"type\": \"Détérioration\",\n  \"issueName\": \"tag\",\n  \"description\": \"un autre tag\",\n  \"user\": \"58b6b26381e7e50011e69124\",\n  \"tags\": [],\n  \"actions\": [],\n  \"location\": {\n    \"coordinates\": [\n      23\n    ],\n    \"type\": \"Point\"\n  },\n  \"status\": \"new\",\n  \"creationDate\": \"2017-03-11T10:37:46.579Z\"\n},\n{\n  \"_id\": \"58c3d3e59843810011bb1519\",\n  \"type\": \"Détérioration\",\n  \"issueName\": \"tag2\",\n  \"description\": \"un autre tag\",\n  \"user\": \"58b6b26381e7e50011e69124\",\n  \"tags\": [],\n  \"actions\": [],\n  \"location\": {\n    \"coordinates\": [\n      23\n    ],\n    \"type\": \"Point\"\n  },\n  \"status\": \"new\",\n  \"creationDate\": \"2017-03-11T10:39:33.601Z\"\n},\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "404/NotFound",
            "description": "<p>No issue was found corresponding to the ID in the URL path</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not Found",
          "content": "    HTTP/1.1 404 Not Found\n    Content-Type: application/json\n\n{\n\"message\": \"Cast to ObjectId failed for type \\\"58c3d3ed9843810011bb15\\\" at path \\\"_id\\\" for model \\\"Issue\\\"\",\n\"name\": \"CastError\",\n\"stringValue\": \"\\\"58c3d3ed9843810011bb15\\\"\",\n\"kind\": \"ObjectId\",\n\"value\": \"58c3d3ed9843810011bb15\",\n\"path\": \"_id\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issues.js",
    "groupTitle": "Issues"
  },
  {
    "type": "get",
    "url": "/issues",
    "title": "Retrieve Issue",
    "name": "GetIssueById",
    "group": "Issues",
    "version": "1.0.0",
    "description": "<p>Get a specific issue by his unique id</p>",
    "examples": [
      {
        "title": "Example",
        "content": "GET /issues/58c3d3ed9843810011bb151a",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Response body": [
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>The unique identifier of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "issueName",
            "description": "<p>The name of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A short description of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>The user who created the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "tags",
            "description": "<p>The tag of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "Date",
            "optional": false,
            "field": "creationDate",
            "description": "<p>The date at which the issue was created.</p>"
          },
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "location",
            "description": "<p>The location where is the issue which contain coordinates and type.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>The status of the issue (inProgress, canceled, completed).</p>"
          },
          {
            "group": "Response body",
            "type": "Object[]",
            "optional": false,
            "field": "actions",
            "description": "<p>action of an issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "actions.type",
            "description": "<p>The type of the action.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "actions.user",
            "description": "<p>The user who take the action.</p>"
          },
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "actions._id",
            "description": "<p>The unique identifier of the action.</p>"
          },
          {
            "group": "Response body",
            "type": "Date",
            "optional": false,
            "field": "actions.updateDate",
            "description": "<p>The date of the action which mean it is the date at which the issue was uptadeted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "    HTTP/1.1 200 OK\n    Content-Type: application/json\n    Link: &lt;https://heigvd-webserv-2017-team-4.herokuapp.com/issues/58c3d3ed9843810011bb151a\n\n[\n{\n\"_id\": \"58c3d3ed9843810011bb151a\",\n\"type\": \"Détérioration\",\n\"issueName\": \"tag3\",\n\"description\": \"un autre tag\",\n\"user\": \"58b6b26381e7e50011e69124\",\n\"tags\": [],\n\"actions\": [],\n\"location\": {\n  \"coordinates\": [\n    23\n  ],\n  \"type\": \"Point\"\n},\n\"status\": \"new\",\n\"creationDate\": \"2017-03-11T10:39:41.180Z\"\n}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "404/NotFound",
            "description": "<p>No issue was found corresponding to the ID in the URL path</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not Found",
          "content": "    HTTP/1.1 404 Not Found\n    Content-Type: application/json\n\n{\n\"message\": \"Cast to ObjectId failed for value \\\"58c3d3ed9843810011bb15\\\" at path \\\"_id\\\" for model \\\"Issue\\\"\",\n\"name\": \"CastError\",\n\"stringValue\": \"\\\"58c3d3ed9843810011bb15\\\"\",\n\"kind\": \"ObjectId\",\n\"value\": \"58c3d3ed9843810011bb15\",\n\"path\": \"_id\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issues.js",
    "groupTitle": "Issues"
  },
  {
    "type": "get",
    "url": "/issues",
    "title": "Paginated list issues",
    "name": "GetPaginatedAllIssues",
    "group": "Issues",
    "version": "1.0.0",
    "description": "<p>Get a paginated list of all issues from the most recent to the oldest.</p>",
    "examples": [
      {
        "title": "Example",
        "content": "GET /issues/paginate",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Response body": [
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>The unique identifier of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "issueName",
            "description": "<p>The name of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A short description of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>The user who created the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "tags",
            "description": "<p>The tag of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "Date",
            "optional": false,
            "field": "creationDate",
            "description": "<p>The date at which the issue was created.</p>"
          },
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "location",
            "description": "<p>The location where is the issue which contain coordinates and type.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>The status of the issue (inProgress, canceled, completed).</p>"
          },
          {
            "group": "Response body",
            "type": "Object[]",
            "optional": false,
            "field": "actions",
            "description": "<p>action of an issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "actions.type",
            "description": "<p>The type of the action.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "actions.user",
            "description": "<p>The user who take the action.</p>"
          },
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "actions._id",
            "description": "<p>The unique identifier of the action.</p>"
          },
          {
            "group": "Response body",
            "type": "Date",
            "optional": false,
            "field": "actions.updateDate",
            "description": "<p>The date of the action which mean it is the date at which the issue was uptadeted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "    HTTP/1.1 200 OK\n    Content-Type: application/json\n    Link: &lt;https://heigvd-webserv-2017-team-4.herokuapp.com/issues\n\n[\n{\n    \"_id\": \"58b6c5775506470011dd2357\",\n    \"type\": \"Détérioration\",\n    \"issueName\": \"graffiti\",\n    \"description\": \"un autre graff trop stylé\",\n    \"user\": \"58b559a31277be1abc493011\",\n    \"tags\": [],\n    \"actions\": [\n      {\n        \"type\": \"test\",\n        \"user\": \"58b559a31277be1abc493011\",\n        \"_id\": \"58b6c5775506470011dd2358\",\n        \"updateDate\": \"2017-03-01T12:58:31.178Z\"\n      }\n    ],\n    \"location\": {\n      \"coordinates\": [\n        23\n      ],\n      \"type\": \"Point\"\n    },\n    \"status\": \"inProgress\",\n    \"creationDate\": \"2017-03-01T12:58:31.160Z\"\n  },\n]\n\nHeaders :\nConnection →keep-alive\nContent-Length →2118\nContent-Type →application/json; charset=utf-8\nDate →Sun, 12 Mar 2017 21:12:41 GMT\nEtag →W/\"846-+F6njeDkFhCbniljSa9NPA\"\nServer →Cowboy\nVia →1.1 vegur\nX-Pagination-Page →1\nX-Pagination-Page-Size →30\nX-Pagination-Total →6\nX-Powered-By →Express",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "404/NotFound",
            "description": "<p>No issue was found corresponding to the ID in the URL path</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not Found",
          "content": "    HTTP/1.1 404 Not Found\n    Content-Type: application/json\n\n{\n\"message\": \"Cast to ObjectId failed for value \\\"58c3d3ed9843810011bb15\\\" at path \\\"_id\\\" for model \\\"Issue\\\"\",\n\"name\": \"CastError\",\n\"stringValue\": \"\\\"58c3d3ed9843810011bb15\\\"\",\n\"kind\": \"ObjectId\",\n\"value\": \"58c3d3ed9843810011bb15\",\n\"path\": \"_id\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issues.js",
    "groupTitle": "Issues"
  },
  {
    "type": "patch",
    "url": "/issues/:id",
    "title": "Partially Update an issue",
    "name": "PartiallyUpdateIssue",
    "group": "Issues",
    "version": "1.0.0",
    "description": "<p>Partially updates an issue's data (only the properties found in the request body will be updated). All properties are optional.</p>",
    "examples": [
      {
        "title": "Example",
        "content": "    PATCH issues/58c3d3ed9843810011bb151a HTTP/1.1\n    Content-Type: application/json\n\n{\n  \"issueName\": \"Tag numéro 3\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Response body": [
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>The unique identifier of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "issueName",
            "description": "<p>The name of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A short description of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>The user who created the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "tags",
            "description": "<p>The tag of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "Date",
            "optional": false,
            "field": "creationDate",
            "description": "<p>The date at which the issue was created.</p>"
          },
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "location",
            "description": "<p>The location where is the issue which contain coordinates and type.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>The status of the issue (inProgress, canceled, completed).</p>"
          },
          {
            "group": "Response body",
            "type": "Object[]",
            "optional": false,
            "field": "actions",
            "description": "<p>action of an issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "actions.type",
            "description": "<p>The type of the action.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "actions.user",
            "description": "<p>The user who take the action.</p>"
          },
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "actions._id",
            "description": "<p>The unique identifier of the action.</p>"
          },
          {
            "group": "Response body",
            "type": "Date",
            "optional": false,
            "field": "actions.updateDate",
            "description": "<p>The date of the action which mean it is the date at which the issue was uptadeted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "    HTTP/1.1 200 OK\n    Content-Type: application/json\n    Link: &lt;https://heigvd-webserv-2017-team-4.herokuapp.com/issues/58c3d3ed9843810011bb151a\n\n[\n{\n\"_id\": \"58c3d3ed9843810011bb151a\",\n\"type\": \"Détérioration\",\n\"issueName\": \"Tag numéro 3\",\n\"description\": \"un autre tag\",\n\"user\": \"58b6b26381e7e50011e69124\",\n\"tags\": [],\n\"actions\": [],\n\"location\": {\n  \"coordinates\": [\n    23\n  ],\n  \"type\": \"Point\"\n},\n\"status\": \"new\",\n\"creationDate\": \"2017-03-11T10:39:41.180Z\"\n}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "404/NotFound",
            "description": "<p>No issue was found corresponding to the ID in the URL path</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not Found",
          "content": "    HTTP/1.1 404 Not Found\n    Content-Type: application/json\n\n{\n\"message\": \"Cast to ObjectId failed for value \\\"58c3d3ed9843810011bb15\\\" at path \\\"_id\\\" for model \\\"Issue\\\"\",\n\"name\": \"CastError\",\n\"stringValue\": \"\\\"58c3d3ed9843810011bb15\\\"\",\n\"kind\": \"ObjectId\",\n\"value\": \"58c3d3ed9843810011bb15\",\n\"path\": \"_id\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issues.js",
    "groupTitle": "Issues"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create an user",
    "name": "CreateUser",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>Register a new user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The users-ID, generated automatically.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>The users' role.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "    POST /users HTTP/1.1\n    Content-Type: application/json\n\n{\n \"role\": \"citizen\",\n \"firstName\": \"Max\",\n \"lastName\": \"Hibou\",\n \"email\": \"coucouat.cim\",\n \"password\": \"1234567\",\n \"_id\": \"58b6cd595506470011dd235b\",\n \"createdAt\": \"2017-03-01T13:32:09.332Z\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Response body": [
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The unique identifier of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>The role of the user (citizen or manager)</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>The first name of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>The last name of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The personal email of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password chosen by the user</p>"
          },
          {
            "group": "Response body",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The date at which the user was created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "    HTTP/1.1 200 OK\n    Content-Type: application/json\n    Link: &lt;https://heigvd-webserv-2017-team-4.herokuapp.com/users/58b6b26381e7e50011e69124\n\n[\n  {\n   \"role\": \"citizen\",\n   \"firstName\": \"Max\",\n   \"lastName\": \"Hibou\",\n   \"email\": \"coucouat.cim\",\n   \"password\": \"1234567\",\n   \"_id\": \"58b6cd595506470011dd235b\",\n   \"createdAt\": \"2017-03-01T13:32:09.332Z\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400/BadRequest",
            "description": "<p>Some of the user's properties are invalid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400 Bad Request",
          "content": "    HTTP/1.1 400 Bad Request\n    Content-Type: application/json\n\n{\n\"errors\": {\n  \"firstName\": {\n    \"message\": \"Path `firstName` is required.\",\n    \"name\": \"ValidatorError\",\n    \"properties\": {\n      \"type\": \"required\",\n      \"message\": \"Path `{PATH}` is required.\",\n      \"path\": \"firstName\",\n      \"value\": \"\"\n    },\n    \"kind\": \"required\",\n    \"path\": \"firstName\",\n    \"value\": \"\"\n  }\n},\n\"message\": \"User validation failed\",\n\"name\": \"ValidationError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "users/user/:id",
    "title": "Delete all issues from an user",
    "name": "DeleteIssuesFromUser",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>Permanently deletes all issues from an user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The users-ID, generated automatically.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>The users' role.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "DELETE users/58b6d6455506470011dd235f/58c3d3ed9843810011bb151a HTTP/1.1",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Response body": [
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The unique identifier of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>The role of the user (citizen or manager)</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>The first name of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>The last name of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The personal email of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password chosen by the user</p>"
          },
          {
            "group": "Response body",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The date at which the user was created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "204 No Content",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "404/NotFound",
            "description": "<p>No user was found corresponding to the ID in the URL path</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not Found",
          "content": "    HTTP/1.1 404 Not Found\n    Content-Type: application/json\n\n    {\n\"message\": \"Cast to ObjectId failed for value \\\"58b6d6455506470011dd2\\\" at path \\\"_id\\\" for model \\\"User\\\"\",\n\"name\": \"CastError\",\n\"stringValue\": \"\\\"58b6d6455506470011dd2\\\"\",\n\"kind\": \"ObjectId\",\n\"value\": \"58b6d6455506470011dd2\",\n\"path\": \"_id\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "users/:id",
    "title": "Delete an user",
    "name": "DeleteUser",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>Permanently deletes an user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The users-ID, generated automatically.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>The users' role.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "DELETE users/58b6d6455506470011dd235f HTTP/1.1",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Response body": [
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The unique identifier of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>The role of the user (citizen or manager)</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>The first name of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>The last name of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The personal email of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password chosen by the user</p>"
          },
          {
            "group": "Response body",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The date at which the user was created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "204 No Content",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/user/:id",
    "title": "Get all issues from an user",
    "name": "GetAllIssuesFromUser",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>Get all issues from an user</p>",
    "examples": [
      {
        "title": "Example",
        "content": "GET users/58b6d6455506470011dd235f/58c3d3ed9843810011bb151a HTTP/1.1",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Response body": [
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>The unique identifier of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "issueName",
            "description": "<p>The name of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A short description of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>The user who created the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "tags",
            "description": "<p>The tag of the issue.</p>"
          },
          {
            "group": "Response body",
            "type": "Date",
            "optional": false,
            "field": "creationDate",
            "description": "<p>The date at which the issue was created.</p>"
          },
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "location",
            "description": "<p>The location where is the issue which contain coordinates and type.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>The status of the issue (inProgress, canceled, completed).</p>"
          },
          {
            "group": "Response body",
            "type": "Object[]",
            "optional": false,
            "field": "actions",
            "description": "<p>action of an issue.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "actions.type",
            "description": "<p>The type of the action.</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "actions.user",
            "description": "<p>The user who take the action.</p>"
          },
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "actions._id",
            "description": "<p>The unique identifier of the action.</p>"
          },
          {
            "group": "Response body",
            "type": "Date",
            "optional": false,
            "field": "actions.updateDate",
            "description": "<p>The date of the action which mean it is the date at which the issue was uptadeted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "    HTTP/1.1 200 OK\n    Content-Type: application/json\n    Link: &lt;https://heigvd-webserv-2017-team-4.herokuapp.com/users/58b6d6455506470011dd235f/58c3d3ed9843810011bb151a\n\n[\n{\n    \"_id\": \"58b6c5775506470011dd2357\",\n    \"type\": \"Détérioration\",\n    \"issueName\": \"graffiti\",\n    \"description\": \"un autre graff trop stylé\",\n    \"user\": \"58b559a31277be1abc493011\",\n    \"tags\": [],\n    \"actions\": [\n      {\n        \"type\": \"test\",\n        \"user\": \"58b559a31277be1abc493011\",\n        \"_id\": \"58b6c5775506470011dd2358\",\n        \"updateDate\": \"2017-03-01T12:58:31.178Z\"\n      }\n    ],\n    \"location\": {\n      \"coordinates\": [\n        23\n      ],\n      \"type\": \"Point\"\n    },\n    \"status\": \"inProgress\",\n    \"creationDate\": \"2017-03-01T12:58:31.160Z\"\n  },\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "404/NotFound",
            "description": "<p>No user was found corresponding to the ID in the URL path</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not Found",
          "content": "    HTTP/1.1 404 Not Found\n    Content-Type: application/json\n\n    {\n\"message\": \"Cast to ObjectId failed for value \\\"58b6d6455506470011dd2\\\" at path \\\"_id\\\" for model \\\"User\\\"\",\n\"name\": \"CastError\",\n\"stringValue\": \"\\\"58b6d6455506470011dd2\\\"\",\n\"kind\": \"ObjectId\",\n\"value\": \"58b6d6455506470011dd2\",\n\"path\": \"_id\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "List users",
    "name": "GetAllUsers",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>Get a list of all users by alphabetic order.</p>",
    "examples": [
      {
        "title": "Example",
        "content": "GET /users",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The users-ID, generated automatically.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>The users' role.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response body": [
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The unique identifier of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>The role of the user (citizen or manager)</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>The first name of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>The last name of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The personal email of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password chosen by the user</p>"
          },
          {
            "group": "Response body",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The date at which the user was created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "    HTTP/1.1 200 OK\n    Content-Type: application/json\n    Link: &lt;https://heigvd-webserv-2017-team-4.herokuapp.com/users\n\n[\n{\n  \"_id\": \"58b6b26381e7e50011e69124\",\n  \"role\": \"citizen\",\n  \"firstName\": \"Daniel\",\n  \"lastName\": \"Mendes\",\n  \"email\": \"hkshau\",\n  \"password\": \"1234567\",\n   \"createdAt\": \"2017-03-01T11:37:07.113Z\"\n},\n{\n  \"_id\": \"58b6b26f81e7e50011e69126\",\n  \"role\": \"citizen\",\n  \"firstName\": \"David\",\n  \"lastName\": \"Mendes\",\n \"email\": \"hkshau\",\n \"password\": \"1234567\",\n  \"createdAt\": \"2017-03-01T11:37:19.613Z\"\n}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "404/NotFound",
            "description": "<p>No user was found corresponding to the ID in the URL path</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not Found",
          "content": "    HTTP/1.1 404 Not Found\n    Content-Type: application/json\n\n{\n\"message\": \"Cast to ObjectId failed for value \\\"58c3d3ed9843810011bb15\\\" at path \\\"_id\\\" for model \\\"User\\\"\",\n\"name\": \"CastError\",\n\"stringValue\": \"\\\"58c3d3ed9843810011bb15\\\"\",\n\"kind\": \"ObjectId\",\n\"value\": \"58c3d3ed9843810011bb15\",\n\"path\": \"_id\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Retrieve user",
    "name": "GetUserById",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>Get a specific user by his unique id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The users-ID, generated automatically.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>The users' role.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "GET /users/58b6b26381e7e50011e69124",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Response body": [
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The unique identifier of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>The role of the user (citizen or manager)</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>The first name of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>The last name of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The personal email of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password chosen by the user</p>"
          },
          {
            "group": "Response body",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The date at which the user was created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "    HTTP/1.1 200 OK\n    Content-Type: application/json\n    Link: &lt;https://heigvd-webserv-2017-team-4.herokuapp.com/users/58b6b26381e7e50011e69124\n\n[\n{\n  \"_id\": \"58b6b26381e7e50011e69124\",\n  \"role\": \"citizen\",\n  \"firstName\": \"Daniel\",\n  \"lastName\": \"Mendes\",\n  \"email\": \"hkshau\",\n  \"password\": \"1234567\",\n   \"createdAt\": \"2017-03-01T11:37:07.113Z\"\n}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "404/NotFound",
            "description": "<p>No user was found corresponding to the ID in the URL path</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not Found",
          "content": "    HTTP/1.1 404 Not Found\n    Content-Type: application/json\n\n    {\n\"message\": \"Cast to ObjectId failed for value \\\"58b6d6455506470011dd2\\\" at path \\\"_id\\\" for model \\\"User\\\"\",\n\"name\": \"CastError\",\n\"stringValue\": \"\\\"58b6d6455506470011dd2\\\"\",\n\"kind\": \"ObjectId\",\n\"value\": \"58b6d6455506470011dd2\",\n\"path\": \"_id\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "patch",
    "url": "users/:id",
    "title": "Partially Update an user",
    "name": "PartiallyUpdateUser",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>Partially updates a user's data (only the properties found in the request body will be updated). All properties are optional.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The users-ID, generated automatically.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>The users' role.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "    PATCH users/58b6d6455506470011dd235f HTTP/1.1\n    Content-Type: application/json\n\n{\n \"email\": \"monvraiemail\",\n \"password\": \"hello\",\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Response body": [
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The unique identifier of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>The role of the user (citizen or manager)</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>The first name of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>The last name of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The personal email of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password chosen by the user</p>"
          },
          {
            "group": "Response body",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The date at which the user was created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "    HTTP/1.1 200 OK\n    Content-Type: application/json\n\n[\n{\n \"_id\": \"58b6d6455506470011dd235f\",\n \"role\": \"citizen\",\n \"firstName\": \"Walid\",\n \"lastName\": \"Chatelain\",\n \"email\": \"monvraiemail\",\n \"password\": \"hello\",\n \"createdAt\": \"2017-03-01T14:10:13.561Z\"\n}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400/BadRequest",
            "description": "<p>Some of the user's properties are invalid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400 Bad Request",
          "content": "    HTTP/1.1 400 Bad Request\n    Content-Type: application/json\n\n{\n\"errors\": {\n  \"firstName\": {\n    \"message\": \"Path `firstName` is required.\",\n    \"name\": \"ValidatorError\",\n    \"properties\": {\n      \"type\": \"required\",\n      \"message\": \"Path `{PATH}` is required.\",\n      \"path\": \"firstName\",\n      \"value\": \"\"\n    },\n    \"kind\": \"required\",\n    \"path\": \"firstName\",\n    \"value\": \"\"\n  }\n},\n\"message\": \"User validation failed\",\n\"name\": \"ValidationError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/users.js",
    "groupTitle": "User"
  }
] });
