let fs = require('fs');
let express = require("express");
let bodyParser = require("body-parser");

let DummyDB = (()=>{
    let DummyDB = {};
    let storage = [];
    let count = 1;

    DummyDB.get = (id)=>{
        if(id){
            id = (typeof id == "string") ? Number(id) : id;
            for(let i in storage) {
                if(storage[i].id == id){
                    return storage[i];
                }
            }
        } else {
            return storage;
        }
    };

    DummyDB.insert = (data) => {
        data.id = count++;
        storage.push(data);
        return data;
    };

    DummyDB.remove = (id) => {
        id = (typeof id == "string") ? Number(id) : id;
        for(let i in storage) {
            if(storage[i].id == id){
                storage.splice(i,1);
                return true;
            }
        }
        return false;
    };
    return DummyDB;
})();

let app = express();

app.use(bodyParser.urlencoded({
    extended : false
}));

app.get("/user",(request,response)=>{
    response.send(DummyDB.get());
});

app.get("/user/:id",(request,response)=>{
    response.send(DummyDB.get(request.params.id));
});

app.post("/user",(request,response)=>{
    let name = request.body.name;
    let region = request.body.region;

    if(name && region){
        response.send(DummyDB.insert({
            name : name,
            region : region
        }));
    } else {
        throw new Error("error");
    }
});

app.put("/user/:id",(request,response)=>{
    let id = request.params.id;
    let name = request.body.name;
    let region = request.body.region;

    let item = DummyDB.get(id);
    item.name = name || item.name;
    item.region = region || item.region;

    response.send(item);
});

app.delete("/user/:id",(request,response)=>{
    reponse.send(DummyDB.remove(request.params.id));
});

app.listen(52273,()=>{
    console.log("Server running at http://127.0.0.1:52273");
});

