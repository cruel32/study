var express = require("express");
var app = express();

var routerA = express.Router();
var routerB = express.Router();

app.get("/page/:id",function(request,response){
    var name = request.params.id;
    response.send(`<h1>${name} Page</h1>`);
});

routerA.get("/index", function(request,response){
    var agent = request.header("User-Agent"); console.log("request.headers : ", request.headers, " agent : ", agent);
    response.send(`<h1>hello routerA</h1>`);
});

routerB.get("/index", function(request,response){
    //query
    var name = request.query.name; console.log("name : ", name);
    var region = request.query.region; console.log("region : ", region);
    response.send(`<h1>hello routerB</h1>`);
});

app.use("/",function(request,response){
    response.send(`<h1>hello root</h1>`);
});

app.use("/a", routerA);
app.use("/b", routerB);


app.listen(52273,function(){
    console.log("Server Running at http:127.0.0.1:52273");
})
