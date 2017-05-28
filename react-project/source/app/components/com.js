module.exports.test = {
    test1 : function(){
        console.log("this test1 : ", this);
    },
    test2 : ()=>{
        console.log("this test2 : ", this);
    },
    test3(){
        console.log("this  test3: ", this);
    }
}