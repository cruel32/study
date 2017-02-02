let fs = require("fs");
let ejs = require("ejs");
let mysql = require("mysql");
let express = require("express");
let bodyParser = require("body-parser");

let client = mysql.createConnection({
    user : "root",
    password : "qqqq",
    database : "Company"
});

let app = express();

app.use(bodyParser.urlencoded({
    extended : false
}));

app.listen(52273,()=>{
    console.log("Server running at http://127.0.0.1:52273");
});

app.get("/",(request,response)=>{
    fs.readFile("list.html", "utf8", (error,data)=>{
        client.query('SELECT * FROM products', (error,results,fields) => {
            if(error){
                console.log('쿼리 문장에 오류가 있습니다.');
            } else {
                response.send(ejs.render(data,{
                    data : results
                }))
            }
        });
    })
});

app.get("/delete/:id",(request,response)=>{

});

app.get("/insert",(request,response)=>{

});

app.post("/insert",(request,response)=>{

});

app.get("/edit/:id",(request,response)=>{

});

app.post("/edit/:id",(request,response)=>{

});


//client.query('USE Company');
/*
client.query('SELECT * FROM products', (error,results,fields) => {
    if(error){
        console.log('쿼리 문장에 오류가 있습니다.');
    } else {
        console.log('results');
    }
});
*/
