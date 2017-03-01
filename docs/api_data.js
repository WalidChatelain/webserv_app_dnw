define({ "api": [
  {
    "type": "get",
    "url": "/issues",
    "title": "List issues",
    "name": "GetAllIssues",
    "group": "Issues",
    "version": "1.0.0",
    "description": "<p>Get a paginated list of all issues from the most recent to the oldest.</p>",
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
    "filename": "app/routes/issues.js",
    "groupTitle": "Issues"
  }
] });
