var module = require("./module.js");

module.timer.on("tick",function(code){
    console.log("실행 : ", code)
});


var http = require("http");

/*
var server = http.createServer();
server.on("request",function(code){
    console.log("Request On");
});

server.on("connection",function(code){
    console.log("Connection On");
});

server.on("close",function(code){
    console.log("Close On");
});

server.listen(52273,function(){
    console.log("Server Running at http://127.0.0.1:52273")
});
*/

var server = http.createServer(function(request,response){
    var date = new Date();
    date.setDate(date.getDate()+7);

    response.writeHead(200, {
        "Content-Type" : "text/html",
        "Set-cookie" : [
            "breakfast=toast;Expires="+date.toUTCString(),
            "dinner=chicken"
        ]
    });
    response.end("<h1>"+request.headers.cookie+"</h1>");


}).listen(52273,function(){
    console.log("Server Running at http://127.0.0.1:52273")
})










