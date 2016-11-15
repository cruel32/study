"use strict";
var _eleWrap = document.querySelector(".wrap");
var debug = function(){
    for(var i=0; i<arguments.length; i++){
        console.log(arguments[i]);
        let div = document.createElement("div");
        div.innerHTML = arguments[i];
        _eleWrap.appendChild(div);
    }
}
