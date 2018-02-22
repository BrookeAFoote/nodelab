// server.js
var http = require("http");
var tasks = require("./main");
function randomString(array){
    var randomNumber = Math.floor(Math.random()*array.length);
    return array[randomNumber];
}//randomstring
http.createServer(function(request, response) {
response.writeHead(200, { "Content-type": "text/plain" });
response.write(randomString(tasks));
response.end();
}).listen(3000);

