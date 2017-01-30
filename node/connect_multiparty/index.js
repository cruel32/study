let fs = require('fs');
let express = require("express");
let multipart = require("connect-multiparty");

let app = express();

app.use(multipart({uploadDir: __dirname+ "/multipart"}));

app.get("/",(request,response)=>{
    fs.readFile("HTMLPage.html",(error,data)=>{
        response.send(data.toString());
    });
});

app.post("/",(request,response)=>{
    let comment = request.body.comment;
    let imageFile = request.files.image;

    if(imageFile){
        let name = imageFile.name;
        let path = imageFile.path;
        let type = imageFile.type;

        if( type.includes("image") ){
            let outputPath = __dirname + "/multipart/" + Date.now() + "_" + name;
            console.log("outputPath : ", outputPath);
            fs.rename(path,outputPath,(error)=>{
                response.redirect("/");
            })
        } else {
            fs.unlink(path,(error)=>{
                response.sendStatus(400);
            })
        }
    } else {
        response.sendStatus(404);
    }
});

app.listen(52273,()=>{
    console.log("Server running at http://127.0.0.1:52273");
})

