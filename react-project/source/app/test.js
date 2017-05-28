// import { testFunc } from './testB.js';
let testFunc = require('./testB.js');
// let scss = require('../sass/default.scss');
// import '../sass/default.scss';

console.log('testFunc : ', testFunc);
console.log('scss : ', scss);

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

