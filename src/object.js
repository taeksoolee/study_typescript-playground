"use strict";
let obj = {};
let arr = [];
let func = function () { };
// strict : true 일 경우 object에 null 사용 불가 
// let nullValue: object = null;
let userA = {
    name: 'lee',
    age: 123
};
// null & undefined
// let num: number = undefined;
// void
function hello(msg) {
    console.log(`Hello ${msg}`);
}
