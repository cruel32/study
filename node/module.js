exports.abs = function(number){
    if(0<number){
        return number;
    } else {
        return -number;
    }
}

exports.timer = new process.EventEmitter();

setTimeout(function(){
    exports.timer.emit("tick");
},3000);
