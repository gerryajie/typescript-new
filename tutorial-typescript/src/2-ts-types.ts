/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
// type inference(Implicit)
let ti = 'hello';

// type annotation(Explicit)
let ta: string;
ta = 'hello ts';

let a;
console.log(typeof a); // undefined

let b: boolean;
b = true;
console.log(typeof b); // boolean

let c: number;
c = 3;
console.log(typeof c); // number

let d = 'hello';
console.log(typeof d); // string

let e = 100n;
console.log(typeof e); // big int (starting ES2020)

let f: symbol;
f = Symbol('sym');
console.log(typeof f); // symbol  (starting ES2015)

let g: () => void;
g = function () {
    // function
    return null;
};
console.log(typeof g);

let h: null;
h = null;
console.log(typeof h); // null ( special primitive )

let i = {};
i = {};
console.log(typeof i); // Object Literal

let j: [];
j = [];
console.log(typeof j); // array

class Product {
    // class
    //...
}
let k = new Product();
console.log(typeof k);

let m: any;
m = [1, 2];
m = 3;
m = 'nono';

function sum(a: number, b: number): void {
    // return a + b;
}

let multi: string | number;
multi = 4;
multi = 'asik';
// multi = true;    pasti salah karena tidak akan di kenali sebagai string atau number

// type aliasess

type Custemtype = string | number;
let mytype: Custemtype;
mytype = 4;
mytype = 'asummm';
