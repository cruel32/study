var express = require("express");
var cookieParser = require("cookie-parser");

var app = express();

app.use(cookieParser());

app.get("/getCookie", function(request, response){
    //응답합니다.
    response.send(request.cookies);
});

app.get("/setCookie", function(resuest, response){
    //쿠키를 생성합니다.
    response.cookie("string", "cookie",{
        maxAge : 6000,
        secure : true
    });
    response.cookie("json", {
        name : "cookie",
        property : "delicious"
    });

    //응답합니다.
    response.redirect("/getCookie");
});

app.listen(52273,function(){
    console.log("Server running at http://127.0.0.1:52273");
})

