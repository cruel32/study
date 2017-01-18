var express = require("express");
var app = express();

console.log("gg");
app.use(express.static(__dirname));

app.listen(52273,function(){
    console.log("Server running at http://127.0.0.1:52273");    
})