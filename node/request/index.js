var http = require("http");
var fs = require("fs");
var url = require("url");

//서버실행
http.createServer(function(request,response){
    var pathname = url.parse(request.url).pathname;
    if(pathname == "/"){
        fs.readFile("/work/study/node/request/index.html", function(error,data){
            console.log("data : ", data);
            response.writeHead(200,{"Content-Type" : "text/html"});
            response.end(data);
        })
    } else if(pathname == "/otherPage"){
        fs.writeFile("/work/study/node/request/test.txt", "text", "utf8", function(error){
            console.log("complete");
        });
        fs.readFile("/work/study/node/request/otherPage.html",function(error,data){
            console.log("data : ", data);
            var module = require("./module.js");
            module.timer.on("tick",function(code){
                console.log("실행")
            });

            response.writeHead(200,{"Content-Type" : "text/html"});
            response.end(data);
        })
    }
}).listen(52273,function(){
   console.log("Server Running at http://127.0.0.1:52273");
});

