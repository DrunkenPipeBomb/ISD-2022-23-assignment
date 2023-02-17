// access from browser with http://localhost:8080

var http = require('http');

const PORT = 8080;

function handelRequest(request, response) {
    response.end("Hello, World!")
}

var server = http.createServer(handleRequest);

// start server
server.listen(PORT, function() {
    console.log('listening on port %s', PORT);
});