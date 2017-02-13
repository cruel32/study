module.exports.test = {
    test1 : function(){
        console.log("this : ", this);
    },
    test2 : ()=>{
        console.log("this : ", this);
    },
    test3(){
        console.log("this : ", this);
    }
}