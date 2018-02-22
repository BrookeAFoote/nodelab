// server.js
var http = require("http");

http.createServer(function(request, response) {
response.writeHead(200, { "Content-type": "text/plain" });
response.write("I'm tired and done.");
response.end();
}).listen(3000);