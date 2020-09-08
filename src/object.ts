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
