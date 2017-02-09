var path = require("path");
module.exports = {
    entry: './bundle/app.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'bundle')
    }
};

// module.exports = {  
//     context: __dirname + '/origin', // 모듈 파일 폴더
//     entry: { // 엔트리 파일 목록
//         cat : `./js/cat.js`,
//         jquery: `./js/jquery/jquery.js`, 
//         bootstrap: `./js/bootstrap/bootstrap.js`, 
//         react: `./js/react/react.js`
//     },
//     output: {
//         path: __dirname+`/bundle`, // 번들 파일 폴더
//         filename: '[name].bundle.js' // 번들 파일 이름 규칙
//     }
// }