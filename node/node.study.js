var module = require("./module");

module.timer.on("tick",function(code){
    console.log("실행 : ", code)
});
