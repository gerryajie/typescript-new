"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y) {
    return x + y;
}
console.log(add(2, 6));
const addEx = function (x, y) {
    return x + y;
};
const addArrow = (x, y) => x + y;
const hello = (name) => console.log('hello ' + name);
function request(url, cb) {
    cb(url);
}
let fn = (str) => console.log(fn);
request('http://olala.com', fn);
function submitContact(firstName, lastName, language = 'english', gender) {
    return {
        firstName: firstName,
        lastName: lastName,
        language,
        ...(gender && { gender }),
    };
}
let result = submitContact('gerry', 'pratama', 'english', 'male');
let result2 = submitContact('tama', 'ajie', 'kaka');
console.log(result);
console.log(result2);
function fruitsCollection(item, ...restItems) {
    return item + ' ' + restItems.join(' ');
}
let fruits = fruitsCollection('Apple', 'Mango', 'Avocado', 123);
function CT(param) {
    return param;
}
function CT2(param) {
    return param;
}
CT2('hello');
CT2(1233);
function CT_overLoad(param) {
    return param;
}
CT_overLoad('hello');
CT_overLoad(123);
