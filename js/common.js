"use strict";
var _eleWrap = document.querySelector(".wrap");
var debug = function(msg){
    console.log(msg);
    if(msg) {
        let div = document.createElement("div");
        div.innerHTML = msg;
        _eleWrap.appendChild(div);
    }
}
