let obj: object = {};
let arr: object = [];
let func: object = function() {};

// strict : true 일 경우 object에 null 사용 불가 
// let nullValue: object = null;

let userA: {name: string, age: number} = {
    name: 'lee',
    age: 123
}

// interface or type
interface IUser {
    name : string,
    age: number
}

type TUser = {name: string, age: number}

// null & undefined
// let num: number = undefined;


// void
function hello(msg: string): void {
    console.log(`Hello ${msg}`);
}

const hi: void = hello('world');

console.log(hi)

// never
function error(message: string): never {
    throw new Error(message);
}

//error('error 발생!');

// Union
let union: (string | number);
union = 'Hello type!';
union = 123;

// Intersection
interface IUser {
    name: string,
    age: number
}

interface IValidation {
    isValid: boolean
}

const foo: IUser & IValidation = {
    name: 'foo',
    age: 12,
    isValid: true
}

// function
let myFunc: (arg1: number, arg2: number) => number;
myFunc = (x, y) => x + y;
console.log(myFunc(1,2));

// Inference : 타입추론
let inferNum = 12;
//inferNum = 'hello'; // error

// Assertions : 타입단언 (prevent inference!)
function someFunc(val: string | number, isNumber: boolean) {
    // some logic
    if(isNumber) {
        // 1. 변수 as 타입
        (val as number).toFixed(2);
        // 2. <타입> 변수 : JSX 문법과 겹침
        //(<number>val).toFixed(2);
    }
}

// non-null (!)
function fnE(x: number | null | undefined) {
    return x!.toFixed(2);
}

// DOM 사용시 타입 단언
// 1. Error
// document.querySelector('.muenu-item').innerHTML
// 2. Type assertion
// (docuemnt.querySelector('.menu-item') as HTMLDivElement).innerHTML;
// (<HTMLDivElement>docuemnt.querySelector('.menu-item')).innerHTML;
// 3. Non-null
// document.querySelector('.menu-item')!.innerHTML;

// type Guards
function isNumber(val: string | number): val is number {
    return typeof val === 'number';
}

function someFunc2(val: string | number) {
    if(isNumber(val)) {
        val.toFixed(2);
        isNaN(val);
    } else {
        val.split('');
        val.toUpperCase();
        val.length;
    }
}








