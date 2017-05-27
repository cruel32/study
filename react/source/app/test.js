// import { testFunc } from './testB.js';
let testFunc = require('./testB.js');

console.log('testFunc : ', testFunc);
let a = {
    'es6' : '2015'
}
let b = {
    'es7' : '2017'
}
let c = ['a','b','c','d'];
Object.assign(a,b);
console.log(a);

let d = c.reduce((prev,curt,idx,arr)=>{
    return prev+curt;
})
console.log('c : ', c);
console.log('d : ', d);

