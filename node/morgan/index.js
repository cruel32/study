let express = require("express");
let morgan = require("morgan");
let app = express();

app.use(morgan("combined"));
app.use(morgan(":method + :date"));
app.use((request,response)=>{
    response.send("<h1>express basic</h1>");
})
app.listen(52273,()=>{
    console.log("Server running at http://127.0.0.1:52273");
})
