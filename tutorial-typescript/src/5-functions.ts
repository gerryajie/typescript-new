/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

export {}; // quick fix for global variable

/**
 * 1. function declaration, expression, arrow
 * 2. optional & default parameters
 * 3. rest parameter
 * 4. conditional type with union, generic, overlods
 */

/********** 1. Basic Function  ***********/
/* Function Declaration, Expession, Arrow
 */

// function declaration
function add(x: number, y: number): number {
    return x + y;
}
console.log(add(2, 6));

// function expression
const addEx = function (x: number, y: number): number {
    return x + y;
};

// arrow function
const addArrow = (x: number, y: number) => x + y;

// function with no return value
const hello = (name: string) => console.log('hello ' + name);

// function with callback
type greeting = (message: string) => void;
function request(url: string, cb: greeting) {
    cb(url);
}
let fn = (str: string) => console.log(fn);
request('http://olala.com', fn);

/********** 2. optional & default parameters  ***********/
/*
| parameters | required | default value |
| ---------- | -------- | ------------- |
| firstName  | Yes      |               |
| lastName   | Yes      |               |
| gender     | No       |               |optional
| languange  | No       | english       |optional ada default value 
*/

/*
function submitContact(firstName, lastName, languange, gender){
  return {
    firstName,
    lastName
    languange
  }
}
*/
type Contact = {
    firstName: string;
    lastName: string;
    gender?: string; //Optional
    language: string;
};

function submitContact(firstName: string, lastName: string, language = 'english', gender?: string): Contact {
    return {
        firstName: firstName,
        lastName: lastName,
        language,
        ...(gender && { gender }), //kondisi jika ada gender akan di return
    };
}
let result = submitContact('gerry', 'pratama', 'english', 'male');
let result2 = submitContact('tama', 'ajie', 'kaka');
console.log(result);
console.log(result2);
/********** 3. Rest Parameter  ***********/

function fruitsCollection(item: string, ...restItems: (string | number)[]) {
    return item + ' ' + restItems.join(' ');
}
let fruits = fruitsCollection('Apple', 'Mango', 'Avocado', 123);
// console.log(fruits);

/********* 4. conditional type with union ***********/
/*
  - accept parameter either string or number
  - return either string or number
  - don't use `any`
*/

//solution 1 adalah union
function CT(param: string | number): string | number {
    return param;
}

//solusi ke 2 adalah gneric
function CT2<T>(param: T): T {
    return param;
}
// cara panggil function generic

CT2<string>('hello');
CT2<number>(1233);

//solusi ke 3 yaitu overloading

function CT_overLoad(param: string): string;
function CT_overLoad(param: number): number;
function CT_overLoad(param: any): any {
    return param;
}

CT_overLoad('hello');
CT_overLoad(123);
// CT_overLoad(true); Akan terjadi error walaupun sudah pakai any, karna sudah di definisikan sebagai string dan number
