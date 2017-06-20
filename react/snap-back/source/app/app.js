if(module.hot){
  module.hot.accept()
}

// import {testClass, testClass2} from '../sass/test';
// import '../sass/default.scss';

// let test = new testClass();
// test.show();

// let test2 = new testClass2();
// test2.show();

const a = [1,2,3,4,5].reduce((prev,current,i,[])=>{
            return prev+current
        })

console.log("aaaa : ", a);

let React = require('react');
let ReactDOM = require('react-dom');
let Application = require('./components/Application.react');

console.log("React : ", React);
console.log("ReactDOM : ", ReactDOM);

// ReactDOM.render(<application/>, document.getElementById('react-application'));