// Access from browser with http://localhost:8080/hello?name=World!

var express = require('express');
const PORT = 8080;

var app = express();

app.get("/hello", function(request, response) {
    var name = request.query.name;
    response.send("Hello, "+name);
});

// start server
app.listen(PORT);
console.log('Listening on port %s', PORT);