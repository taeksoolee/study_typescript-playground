function add(a: number, b: number): number{
    return a + b;
}

const sum: number = add(1, 2);
console.log(sum);

// boolean
let isBoolean: boolean;
let isDone: boolean = false;

// number
let num: number;
let integer: number = 6;
let float: number = 3.14;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let infinity: number = Infinity;
let nan: number = NaN;

// string
let str: string;
let red: string = 'Red';
let green: string = 'Green';
let myColor: string = `My color is ${red}`;
let yourColor: string = 'Your color is ' + green;

//Array
let fruits1: string[] = ['apple', 'banana', 'mango'];
let numbers: Array<number> = [1,2,3,4];

let mixArray: Array<string | number> = [1, 'two', 3];
let mixArray2: (string | number)[] = ['one', 2, 'three'];

let anyArray: Array<any> = [1,2,'three', true, {}, []]
let anyArray2: any[] = [1,2,'three', true, {}, []]

let literalArray: 10[] = [];
literalArray.push(10);
// literalArray.push(11);

let arrA: ReadonlyArray<number> = [1,2,3,4, NaN];
let arrB: readonly number[] = [1,2,3];

// interface
interface IUser {
    name: string,
    age: number,
    isValid: boolean
}

let userrArr: IUser[] = [
    {name: 'Neo', age: 85, isValid: true}
]

// turple : 고정 길이 배열 (push, splice 가능)
let tuple: [string, number] = ['one', 2];
// tuple = ['one', 2,3];

let userArray: [string, number, boolean][] = [
    ['one', 1, true],
    ['two', 2, false]
]

let tupleLiteral: [1, number] ;
tupleLiteral = [1, 1];
tupleLiteral = [1, 2];
// tupleLiteral = [1, 'string'];

let tupleReadOnly: readonly [number, string] = [1, 'one'];
// tupleReadOnly[0] = 2;

// Enum
enum Week {
    Sun,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat
}

console.log(Week.Mon);
console.log(Week.Sun);

enum EnumNumber {
    Zero,
    One = 11, // 11
    Two, // 12
    Three // 13
}

enum Color {
    Red = 'red',
    Green = 'green',
    Blue = 'blue'
}

console.log(Color.Red);

// 금지 - compile option : "noImplicitAny": true
const list: any[] = [1, true, 'Anything'];

// any : 어떤 타입이든, Unknown : 알 수 없는 타입 (any에만 assign 가능)
let a: any = 123;
let u: unknown = 123;

let v1: boolean = a;
// let v2: number = u;
let v3: any = u;







