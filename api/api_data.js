define({ "api": [
  {
    "type": "get",
    "url": "/sample_route/hello_word/:message",
    "title": "Hello Echo Message",
    "name": "HelloEcho",
    "group": "Sample",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "message",
            "description": "<p>Some unique message to echo with a hello.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Hello Person\":\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>JSON Object representing the client object in the database.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/sample_route.js",
    "groupTitle": "Sample"
  }
] });