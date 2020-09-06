"use strict";
function add(a, b) {
    return a + b;
}
const sum = add(1, 2);
console.log(sum);
// boolean
let isBoolean;
let isDone = false;
// number
let num;
let integer = 6;
let float = 3.14;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
let infinity = Infinity;
let nan = NaN;
// string
let str;
let red = 'Red';
let green = 'Green';
let myColor = `My color is ${red}`;
let yourColor = 'Your color is ' + green;
//Array
let fruits1 = ['apple', 'banana', 'mango'];
let numbers = [1, 2, 3, 4];
let mixArray = [1, 'two', 3];
let mixArray2 = ['one', 2, 'three'];
let anyArray = [1, 2, 'three', true, {}, []];
let anyArray2 = [1, 2, 'three', true, {}, []];
let literalArray = [];
literalArray.push(10);
// literalArray.push(11);
let arrA = [1, 2, 3, 4, NaN];
let arrB = [1, 2, 3];
let userrArr = [
    { name: 'Neo', age: 85, isValid: true }
];
// turple : 고정 길이 배열 (push, splice 가능)
let tuple = ['one', 2];
// tuple = ['one', 2,3];
let userArray = [
    ['one', 1, true],
    ['two', 2, false]
];
let tupleLiteral;
tupleLiteral = [1, 1];
tupleLiteral = [1, 2];
// tupleLiteral = [1, 'string'];
let tupleReadOnly = [1, 'one'];
// tupleReadOnly[0] = 2;
// Enum
var Week;
(function (Week) {
    Week[Week["Sun"] = 0] = "Sun";
    Week[Week["Mon"] = 1] = "Mon";
    Week[Week["Tue"] = 2] = "Tue";
    Week[Week["Wed"] = 3] = "Wed";
    Week[Week["Thu"] = 4] = "Thu";
    Week[Week["Fri"] = 5] = "Fri";
    Week[Week["Sat"] = 6] = "Sat";
})(Week || (Week = {}));
console.log(Week.Mon);
console.log(Week.Sun);
var EnumNumber;
(function (EnumNumber) {
    EnumNumber[EnumNumber["Zero"] = 0] = "Zero";
    EnumNumber[EnumNumber["One"] = 11] = "One";
    EnumNumber[EnumNumber["Two"] = 12] = "Two";
    EnumNumber[EnumNumber["Three"] = 13] = "Three"; // 13
})(EnumNumber || (EnumNumber = {}));
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
console.log(Color.Red);
