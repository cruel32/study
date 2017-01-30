let express = require("express");
let session = require("express-session");

let app = express();

app.use(session({
    secret : "secret key",
    resave : false,
    saveUninitialized : true
}));

app.use((request,response)=>{
    request.session.now = (new Date()).toUTCString();
    response.send(request.session);
});

app.listen(52273,()=>{
    console.log("Server running at http://127.0.0.1:52273");
})

