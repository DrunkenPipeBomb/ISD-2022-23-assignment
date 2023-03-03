var http = require ('http');

const PORT = 8080;

// request handler
function handleRequest(request, response) {
  response.end('Hello, World');

}
var server = http.createServer(handleRequest);

// start the server
server.listen(PORT);