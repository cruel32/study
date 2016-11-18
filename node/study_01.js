let mod = require("./module.js");
console.log( mod.abs(-255) );
let process = require("process");
let os = require("os");
let url = require("url");
let querystring = require("querystring");
let crypto = require("crypto");

console.log( querystring.stringify({name:"csh",age:25}) );


let shasum = crypto.createHash("sha256");
shasum.update("crypto_hash");
let output = shasum.digest("hex");

console.log("crypto_hash : ",output);

let key = "아무도 알지 못하는 나만의 비밀 키";
let input = "password";


//암호화
let cipher = crypto.createCipher("aes192",key);
cipher.update(input, "uf8", "base64");

let cipheredOutput = cipher.final("base64");


//암호화 해제
let decipher = crypto.createDecipher("aes192",key);
decipher.update(cipheredOutput, "base64", "utf8");

let decipherOutput = decipher.final("utf8");

//출력
console.log("원래 문자열 : ", input);
console.log("암호화 : ", cipheredOutput);
console.log("암호화 해제 : ", decipherOutput);

let fs = require("fs");
let data = "hello world";

fs.writeFile("TextFileOtherWrite.txt", data, "utf8", function(error){
    console.log("write file async complete");
})

fs.writeFileSync("TextFileOtherWrite.txt", data, "utf8");
console.log("write file sync complete");

