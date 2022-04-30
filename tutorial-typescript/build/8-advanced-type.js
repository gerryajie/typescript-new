"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CreateUser(data) { }
CreateUser({
    id: 1,
    name: 'doe',
    age: 20,
    createdAt: new Date(),
});
const message = {
    id: '1',
    name: 'gerry',
    address: '',
    age: 10,
};
const allUsers = {
    '1': { id: 1, name: 'gerry', age: 20, createdAt: new Date() },
    '2': { id: 2, name: 'pratama', age: 25, createdAt: new Date() },
};
console.log(allUsers);
