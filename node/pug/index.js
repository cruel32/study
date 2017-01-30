var http = require("http");
var url = require("url");
var fs = require("fs");
var pug = require("pug");

//서버실행
http.createServer(function(request,response){
    var pathname = url.parse(request.url).pathname;
    if(pathname == "/"){
        fs.readFile("index.pug", function(error,data){
            console.log("error : ", error);
            console.log("data : ", data);
            var fn = pug.compile(data);
            response.writeHead(200,{"Content-Type" : "text/html"});
            response.end( fn() );
        })
    } else if(pathname == "/otherPage"){
        fs.readFile("otherPage.pug",function(error,data){
            var module = require("/work/study/node/request/module.js");
            module.timer.on("tick",function(code){
                console.log("실행")
            });
            var fn = pug.compile(data);
            response.writeHead(200,{"Content-Type" : "text/html"});
            response.end( fn() );
        })
    }
}).listen(52273,function(){
   console.log("Server Running at http://127.0.0.1:52273");
});

