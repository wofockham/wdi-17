var http = require('http');
var _ = require('lodash');

const PORT = 8888;

var handleRequest = function (request, response) {
  console.log('request received ' + request.url);
  response.end('It works!!' + _.random(1, 100));
}

var server = http.createServer(handleRequest);

server.listen(PORT, function () {
  console.log('Server is listening on: http://localhost:%s', PORT);
});
