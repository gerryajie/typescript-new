/* eslint-disable no-console */
// Javascritp Data Types

/********** Javascript Types ***********/

let a;
console.log(typeof a); // undefined

let b = true;
console.log(typeof b); // boolean

let c = 1;
console.log(typeof c); // number

let d = 'hello';
console.log(typeof d); // string

let e = 100n;
console.log(typeof e); // big int (starting ES2020)

let f = Symbol('Sym');
console.log(typeof f); // symbol  (starting ES2015)

let g = function () {
    // function
    return null;
};
console.log(typeof g);

let h = null;
console.log(typeof h); // null ( special primitive )

let i = {};
console.log(typeof i); // Object Literal

let j = [];
console.log(typeof j); // array

class Product {
    // class
    //...
}
let k = new Product();
console.log(typeof k);

/********** Why is it call dynamic type / weekly typed ? ***********/

// 1. No Declaration. Type automatically set based on value at runtime
// 2. Re-Assign
// 3. with dynamic type comes great responsiblity
