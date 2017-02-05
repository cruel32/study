/*프로그래밍 api*/
let bower = require("bower");
bower.commands.install(["jquery#1.10","jquery-ui"],{save:true},{

}).on("end",(installed)=>{
    console.log("설치됨 : ");
    console.log(installed);
});

bower.commands.search("jquery",{

}).on("end",(results)=>{
    console.log("결과 : ");
    console.log(results);
})